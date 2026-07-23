// 公式サイトのフレーム表HTMLを、加工しやすいTSV/CSVに落とすパーサー。
//
// 使い方:
//   node --experimental-strip-types tools/parse-frame-html.ts raw-frame-html/luke.html > raw-frame-tsv/luke.tsv
//   node --experimental-strip-types tools/parse-frame-html.ts raw-frame-html/luke.html --csv
//
// 入力は https://www.streetfighter.com/6/character/<name>/frame をブラウザで開き、
// DevToolsで<html>のouterHTMLを保存したもの(JS描画後のDOM)。
//
// このパーサーは値を解釈しない。「※11」「全体 47」「22+着地後12」のような表記は
// セルの文字列のまま出力する。数値化やスキーマへの写像は後段の別スクリプトの担当。

import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

/** セル内に複数の要素(li・p)があるときの連結文字。表のセルに元から現れない文字を選ぶ */
const ITEM_SEPARATOR = "|";

/** 出力する列。keyはtdのクラス名(ハッシュ部を除いたもの) */
const COLUMNS = [
  { key: "frame_skill", header: "技名" }, // 実際には技名/条件/入力の3列に展開する
  { key: "frame_startup_frame", header: "発生" },
  { key: "frame_active_frame", header: "持続" },
  { key: "frame_recovery_frame", header: "硬直" },
  { key: "frame_hit_frame", header: "ヒット硬直差" },
  { key: "frame_block_frame", header: "ガード硬直差" },
  { key: "frame_cancel", header: "キャンセル" },
  { key: "frame_damage", header: "ダメージ" },
  { key: "frame_combo_correct", header: "コンボ補正値" },
  { key: "frame_drive_gauge_gain_hit", header: "Dゲージ増加ヒット" },
  { key: "frame_drive_gauge_lose_dguard", header: "Dゲージ減少ガード" },
  { key: "frame_drive_gauge_lose_punish", header: "Dゲージ減少PC" },
  { key: "frame_sa_gauge_gain", header: "SAゲージ増加" },
  { key: "frame_attribute", header: "属性" },
  { key: "frame_note", header: "備考" },
] as const;

/**
 * 多段技の持続セルはツールチップを持ち、その中にヒットごとの内訳が入っている
 * (ラベルが「6-15」、ツールチップが「6-8, 9-15」)。これを別の列として取り出す。
 */
const ACTIVE_DETAIL_HEADER = "持続内訳";

/** 技名セルは3列、持続セルは2列に展開されるので、ヘッダーもそれに合わせる */
const HEADER = [
  "キャラ",
  "カテゴリ",
  "技名",
  "条件",
  "入力",
  ...COLUMNS.slice(1).flatMap((c) =>
    c.header === "持続" ? [c.header, ACTIVE_DETAIL_HEADER] : [c.header],
  ),
];

/**
 * 入力表記のアイコン画像 → テキストトークン。
 * 強度付きの打撃アイコン(icon_punch_l等)は直後に「弱」「中」「強」(英語版はL/M/H)の
 * テキストが続くので、そちらは重複として捨てる。
 */
const ICON_TOKENS: Record<string, string> = {
  // レバー
  "key-u": "↑",
  "key-d": "↓",
  "key-l": "←",
  "key-r": "→",
  "key-ul": "↖",
  "key-ur": "↗",
  "key-dl": "↙",
  "key-dr": "↘",
  "key-nutral": "N", // 公式のファイル名がneutralではなくnutral
  // 溜め(charge)。末尾のcが溜めを表す
  "key-uc": "↑溜め",
  "key-dc": "↓溜め",
  "key-lc": "←溜め",
  "key-rc": "→溜め",
  "key-ulc": "↖溜め",
  "key-urc": "↗溜め",
  "key-dlc": "↙溜め",
  "key-drc": "↘溜め",
  "key-circle": "一回転", // スクリューパイルドライバー等のレバー一回転
  "key-plus": "+",
  "key-or": "or",
  arrow_3: "⇒", // 派生を表す矢印。レバーの→と紛らわしいので別の字にする
  // ボタン(強度なし。2つ並ぶとODやSA等の同時押しになる)
  icon_punch: "P",
  icon_kick: "K",
  // ボタン(強度あり)
  icon_punch_l: "弱P",
  icon_punch_m: "中P",
  icon_punch_h: "強P",
  icon_kick_l: "弱K",
  icon_kick_m: "中K",
  icon_kick_h: "強K",
};

/** 強度付きアイコンの直後に現れる、捨ててよい重複テキスト */
const REDUNDANT_STRENGTH = /^(?:弱|中|強|L|M|H)/;

const warnings: string[] = [];

/** CSS Modulesが付ける `__ハッシュ` を落とす。frame_skill__aB3xY → frame_skill */
function stripHash(className: string): string {
  return className.replace(/__[A-Za-z0-9_-]+$/, "");
}

function classesOf(tagHtml: string): string[] {
  const m = tagHtml.match(/\sclass="([^"]*)"/);
  if (!m) return [];
  // Reactのバグで "undefined" というクラスが混ざることがあるので落とす
  return m[1]
    .split(/\s+/)
    .filter((c) => c && c !== "undefined")
    .map(stripHash);
}

function decodeEntities(s: string): string {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&");
}

/**
 * HTML片をテキストにする。li/pは別々の項目として ITEM_SEPARATOR で連結し、
 * 空の項目は落とす。
 */
function plainText(html: string): string {
  const items = html
    // li・p・brで項目に分けてから、各項目の残りのタグを落とす。
    // 日本語版はliで、英語版は1つのp内をbrで区切っている
    .split(/<(?:li|p)\b[^>]*>|<br\s*\/?>/)
    .map((t) =>
      decodeEntities(t.replace(/<[^>]+>/g, ""))
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter((t) => t !== "");
  return items.join(ITEM_SEPARATOR);
}

/**
 * セルの末尾に付くツールチップ(div.frame_ex)を切り離す。
 * 表示上の補足なので本文には含めず、必要な列だけが中身を使う。
 */
function splitTooltip(html: string): { body: string; tooltip: string } {
  const at = html.search(/<div[^>]*class="[^"]*frame_ex[^"]*"/);
  if (at === -1) return { body: html, tooltip: "" };
  return { body: html.slice(0, at), tooltip: html.slice(at) };
}

/** セルの本文テキスト(ツールチップを除いたもの) */
function cellText(html: string): string {
  return plainText(splitTooltip(html).body);
}

/**
 * 技名セルを 技名/条件/入力 に分解する。
 * 構造は `<span class="frame_arts">技名</span><p class="frame_classic">（条件）アイコン列</p>`。
 */
function parseSkillCell(html: string): {
  name: string;
  condition: string;
  notation: string;
} {
  const arts = html.match(
    /<span[^>]*class="[^"]*frame_arts[^"]*"[^>]*>([\s\S]*?)<\/span>/,
  );
  const classic = html.match(
    /<p[^>]*class="[^"]*frame_classic[^"]*"[^>]*>([\s\S]*?)<\/p>/,
  );
  const name = arts ? cellText(arts[1]) : cellText(html);
  if (!classic) return { name, condition: "", notation: "" };

  // アイコンをトークンに置換しつつテキストを組み立てる
  let notation = "";
  let rest = classic[1];
  while (rest.length > 0) {
    const img = rest.match(/<img[^>]*src="([^"]*)"[^>]*>/);
    if (!img) {
      notation += decodeEntities(rest.replace(/<[^>]+>/g, ""));
      break;
    }
    notation += decodeEntities(
      rest.slice(0, img.index).replace(/<[^>]+>/g, ""),
    );
    const file = img[1].replace(/^.*\//, "").replace(/\.\w+$/, "");
    const token = ICON_TOKENS[file];
    if (token === undefined) {
      warnings.push(`未知の入力アイコン: ${file}`);
      notation += `[${file}]`;
    } else {
      notation += token;
    }
    rest = rest.slice(img.index! + img[0].length);
    // 強度付きアイコンはトークンに強度を含めたので、直後の重複テキストを捨てる
    if (/_(l|m|h)$/.test(file)) {
      rest = rest.replace(REDUNDANT_STRENGTH, "");
    }
  }
  // アイコン同士の間の改行・空白は表示の都合なので詰める(P P → PP)
  notation = notation
    .replace(/\s+/g, " ")
    .replace(/([PK])\s+(?=[弱中強LMH]?[PK])/g, "$1")
    .trim();

  // 先頭のカッコ書き(（ジャンプ中に）/ (During a jump))は入力ではなく使用条件
  const cond = notation.match(/^（[^）]*）|^\([^)]*\)/);
  return {
    name,
    condition: cond ? cond[0] : "",
    notation: cond ? notation.slice(cond[0].length).trim() : notation,
  };
}

/** 開始タグ名で区切って、各要素の [開始タグ, 中身] を返す。要素はネストしない前提 */
function splitElements(html: string, tag: string): [string, string][] {
  const parts = html.split(new RegExp(`<${tag}\\b`, "g")).slice(1);
  return parts.map((p) => {
    const close = p.indexOf(">");
    const end = p.indexOf(`</${tag}>`);
    return [
      p.slice(0, close),
      p.slice(close + 1, end === -1 ? undefined : end),
    ];
  });
}

function parseCharacter(html: string, fallback: string): string {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/);
  if (!title) return fallback;
  return (
    decodeEntities(title[1])
      .split(/[｜|]/)[0]
      .replace(/\s*(フレームデータ|FRAME\s*DATA)\s*$/i, "")
      .trim() || fallback
  );
}

export interface FrameRow {
  character: string;
  category: string;
  name: string;
  condition: string;
  notation: string;
  /** COLUMNSの2列目以降と持続内訳。ヘッダー名をキーにした素のセル文字列 */
  cells: Record<string, string>;
}

export function parseFrameHtml(html: string, fallbackName = ""): FrameRow[] {
  const character = parseCharacter(html, fallbackName);
  const start = html.indexOf("<tbody");
  const end = html.indexOf("</tbody>");
  if (start === -1 || end === -1) throw new Error("tbodyが見つからない");
  const tbody = html.slice(start, end);

  const rows: FrameRow[] = [];
  let category = "";
  for (const [, inner] of splitElements(tbody, "tr")) {
    const tds = splitElements(inner, "td");
    // セクション見出し行(通常技/必殺技…)はcolspanの1セルだけを持つ
    if (tds.length === 1) {
      category = cellText(tds[0][1]);
      continue;
    }
    if (tds.length !== COLUMNS.length) {
      warnings.push(
        `セル数が${COLUMNS.length}ではない行を飛ばした(${tds.length}セル): ${cellText(inner).slice(0, 40)}`,
      );
      continue;
    }

    // クラス名で列を引き当てる。位置に依存しないので列順の変更に強い
    const byKey = new Map<string, string>();
    tds.forEach(([tag, body], i) => {
      const key =
        classesOf(tag).find((c) => COLUMNS.some((col) => col.key === c)) ??
        COLUMNS[i].key;
      byKey.set(key, body);
    });

    const skillHtml = byKey.get("frame_skill");
    if (skillHtml === undefined) {
      warnings.push(
        `技名セルが無い行を飛ばした: ${cellText(inner).slice(0, 40)}`,
      );
      continue;
    }
    const { name, condition, notation } = parseSkillCell(skillHtml);
    const cells: Record<string, string> = {};
    for (const col of COLUMNS.slice(1)) {
      const body = byKey.get(col.key);
      if (body === undefined) {
        warnings.push(`列が見つからない: ${col.header} (${name})`);
        cells[col.header] = "";
        continue;
      }
      cells[col.header] = cellText(body);
      if (col.key === "frame_active_frame") {
        cells[ACTIVE_DETAIL_HEADER] = plainText(splitTooltip(body).tooltip);
      }
    }
    rows.push({ character, category, name, condition, notation, cells });
  }
  return rows;
}

function toDelimited(rows: FrameRow[], csv: boolean): string {
  const sep = csv ? "," : "\t";
  const escape = (v: string) =>
    csv ? `"${v.replace(/"/g, '""')}"` : v.replace(/[\t\r\n]/g, " ");
  const lines = [HEADER.map(escape).join(sep)];
  for (const r of rows) {
    const values = [
      r.character,
      r.category,
      r.name,
      r.condition,
      r.notation,
      ...COLUMNS.slice(1).flatMap((c) =>
        c.header === "持続"
          ? [r.cells[c.header] ?? "", r.cells[ACTIVE_DETAIL_HEADER] ?? ""]
          : [r.cells[c.header] ?? ""],
      ),
    ];
    lines.push(values.map(escape).join(sep));
  }
  return lines.join("\n") + "\n";
}

function main(argv: string[]): void {
  const csv = argv.includes("--csv");
  const file = argv.find((a) => !a.startsWith("--"));
  if (!file) {
    console.error(
      "使い方: node --experimental-strip-types tools/parse-frame-html.ts <html> [--csv]",
    );
    process.exit(1);
  }
  const html = readFileSync(file, "utf8");
  const fallback = file.replace(/^.*[\\/]/, "").replace(/\.\w+$/, "");
  const rows = parseFrameHtml(html, fallback);
  process.stdout.write(toDelimited(rows, csv));
  for (const w of [...new Set(warnings)]) console.error(`警告: ${w}`);
  console.error(`${rows.length}行を出力した`);
}

// 直接実行されたときだけCLIとして動く(importされた場合は関数だけ提供する)
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main(process.argv.slice(2));
}
