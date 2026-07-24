// raw-frame-tsv/<char>.tsv を、schema.ts の CharacterMoveDb 形に機械変換する。
//
// 使い方:
//   node --experimental-strip-types tools/tsv-to-ts.ts raw-frame-tsv/luke.tsv > moves/luke.ts
//
// このスクリプトは「機械的に確定できる項目」だけを埋める。判断が要る項目
// (id・派生・多段のhits・実機調査項目・例外)は null / placeholder で残し、
// 該当行に `// TODO` を出力する。生成後に手作業パスで埋める前提。
//
// 出力は `export const <char> = {...} satisfies CharacterMoveDb;` の .ts。
// satisfies で schema.ts に対する型検査ができる。

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const KNOWN_PROPERTIES = [
  "上",
  "中",
  "下",
  "投",
  "弾",
  "空弾",
  "アーマーブレイク",
];

/** 矢印 → テンキー(数字)。5(ニュートラル)は矢印がないので含めない */
const ARROW_TO_NUMPAD: Record<string, string> = {
  "↑": "8",
  "↗": "9",
  "→": "6",
  "↘": "3",
  "↓": "2",
  "↙": "1",
  "←": "4",
  "↖": "7",
};

/**
 * 公式表の入力(`↓↘→ + 中P`)をテンキー表記(`236中P`)に変換する。
 * - 派生 ⇒ は各段変換し、前置(j./5)は1段目だけに付ける
 * - 方向キーが無い地上通常技は 5 前置、ジャンプ攻撃は j. 前置
 * - ボタン名(弱P/中P/強P)はそのまま
 */
function toNumpad(input: string, condition: string | undefined): string {
  const isAir = condition ? /ジャンプ|空中/.test(condition) : false;
  return input
    .split("⇒")
    .map((seg, idx) => {
      let t = seg
        .replace(/\bN\b/g, "5") // ニュートラル
        .replace(/[↑↗→↘↓↙←↖]/g, (c) => ARROW_TO_NUMPAD[c])
        .replace(/\s*\+\s*/g, "") // 「方向 + ボタン」の区切りを詰める
        .replace(/強P強K/g, "DI") // ドライブインパクト系のボタン対(→強P強K=6DI等)
        .replace(/中P中K/g, "DP") // ドライブパリィ系のボタン対
        .trim();
      if (idx === 0) {
        if (isAir) t = "j." + t;
        // 5(ニュートラル)前置は「条件なしの立ち通常技(ボタン始まり)」だけ。
        // 派生技(条件あり)はボタンだけ残し派生パスで直す。DI/DPには前置しない
        else if (condition === undefined && /^[弱中強]/.test(t)) t = "5" + t;
      }
      return t;
    })
    .join("⇒");
}

interface Row {
  [key: string]: string;
}

// --- パース補助 ------------------------------------------------------------

/** 空文字は undefined。それ以外は trim して返す */
function s(v: string | undefined): string | undefined {
  const t = (v ?? "").trim();
  return t === "" ? undefined : t;
}

/** 整数として読む。読めなければ undefined */
function int(v: string | undefined): number | undefined {
  const t = s(v);
  if (t === undefined) return undefined;
  const n = Number.parseInt(t, 10);
  return Number.isNaN(n) ? undefined : n;
}

// --- 値リテラルの生成 ------------------------------------------------------

/** 1つの Move を TS オブジェクトリテラル(コメント込み)の行配列にする */
function serializeMove(row: Row, index: number): string {
  const lines: string[] = [];
  const todos: string[] = []; // オブジェクト冒頭にまとめて出す相談・TODO

  const push = (key: string, value: string, comment?: string) => {
    lines.push(`    ${key}: ${value},${comment ? ` // ${comment}` : ""}`);
  };

  const category =
    row["カテゴリ"] === "スーパーアーツ" ? "SA" : row["カテゴリ"];
  const isCommon = category === "共通システム";
  const moveName = row["技名"] ?? "";

  // notation: ドライブインパクト/リバーサル/パリィは toNumpad のボタン対置換(DI/DP)で
  // 変換される。ラッシュ2種とジャストパリィ打撃だけ個別に寄せる
  const conditionRaw = s(row["条件"]);
  let notation: string;
  if (isCommon && moveName.includes("パリィドライブラッシュ")) notation = "RR";
  else if (isCommon && moveName.includes("キャンセルドライブラッシュ"))
    notation = "CR";
  else if (moveName.includes("ジャストパリィ") && moveName.includes("打撃"))
    notation = "1DPか4DP";
  else notation = toNumpad(s(row["入力"]) ?? "", conditionRaw);
  if (/[↑↗→↘↓↙←↖]|方向/.test(notation)) {
    todos.push(`TODO 相談: notation「${notation}」を変換しきれず`);
  }

  // --- 必須・基本項目 ---
  push("id", JSON.stringify(`${charKey}.__${index}`), "TODO idを付与");
  push("name", JSON.stringify(moveName));
  push("category", JSON.stringify(category));
  push("notation", JSON.stringify(notation));

  const condition = s(row["条件"]);
  if (condition === undefined) {
    push("condition", "null");
  } else {
    const cond = condition.replace(/^（|）$/g, "");
    // フレーム表の条件をそのまま保持。ただし投げの「近距離で」は全投げ共通の前提なので無視。
    // 距離で技が変わるザンギエフ半回転などは例外(生成後に手動で条件を戻す)
    if (category === "通常投げ" && cond === "近距離で")
      push("condition", "null");
    else push("condition", JSON.stringify(cond));
  }

  // --- ダメージ・フレーム ---
  const hitCountDetail = s(row["持続内訳"]);
  const hitCount = hitCountDetail ? hitCountDetail.split(",").length : 1;
  push("hitCount", String(hitCount), "TODO 実機確認まだ");

  // ダメージ: 先頭の ※ を除いて整数化
  const rawDamage = s(row["ダメージ"]);
  if (rawDamage !== undefined) {
    const dmg = int(rawDamage.replace(/^※/, ""));
    if (dmg !== undefined) push("totalDamage", String(dmg));
  }

  const startUp = int(row["発生"]);
  if (startUp !== undefined) push("startUp", String(startUp));

  // active: 持続 "7-8" → 8-7+1、単一 "15" → 1
  const rawActive = s(row["持続"]);
  if (rawActive !== undefined) {
    const m = rawActive.match(/^(\d+)-(\d+)$/);
    if (m) push("active", String(Number(m[2]) - Number(m[1]) + 1));
    else if (/^\d+$/.test(rawActive)) push("active", "1");
  }

  // 硬直欄の振り分け
  const rawRecovery = s(row["硬直"]);
  let recoveryLine: { hit: number } | null = null;
  if (rawRecovery !== undefined) {
    let m: RegExpMatchArray | null;
    if (/^\d+$/.test(rawRecovery)) {
      recoveryLine = { hit: Number(rawRecovery) };
    } else if ((m = rawRecovery.match(/^※(\d+)$/))) {
      recoveryLine = { hit: Number(m[1]) }; // ※付きも数値は普通の硬直。中身は多段再調査時にまとめて見る
    } else if ((m = rawRecovery.match(/^全体\s*(\d+)$/))) {
      push("totalFrame", m[1]);
    } else if ((m = rawRecovery.match(/^着地後?(\d+)$/))) {
      push("landingRecovery", m[1]);
    } else {
      todos.push(
        `TODO 保留: 硬直「${rawRecovery}」を機械変換できず(要手動分解)`,
      );
    }
  }

  // 硬直差: null は入れない。素の "-" は相談
  const advDance = (label: string, key: string) => {
    const raw = s(row[label]);
    if (raw === undefined) return;
    if (raw === "D") push(key, '"D"');
    else if (raw === "-") todos.push(`TODO 相談: ${label}が「-」`);
    else {
      const n = int(raw);
      if (n !== undefined) push(key, String(n));
      else todos.push(`TODO 相談: ${label}「${raw}」を数値化できず`);
    }
  };
  advDance("ガード硬直差", "advantageOnBlock");
  advDance("ヒット硬直差", "advantageOnHit");

  // overAllProperties: 全段同じ属性のときだけ。分岐(/)・段変化・先頭※は相談
  const rawAttr = s(row["属性"]);
  if (rawAttr === undefined) {
    push("overAllProperties", "null");
  } else {
    const parts = rawAttr.split("・");
    if (parts.every((p) => KNOWN_PROPERTIES.includes(p))) {
      push("overAllProperties", JSON.stringify(parts));
    } else {
      push("overAllProperties", "null");
      todos.push(`TODO 相談: 属性「${rawAttr}」(段ごと変化/分岐/注釈)`);
    }
  }

  // hits: 単発は1要素。多段(持続内訳あり)は要手動
  if (hitCount > 1) {
    todos.push(
      `TODO hits: 多段(${hitCount}ヒット)。段ごとのダメージ・属性を手動で`,
    );
    push("hits", "[]");
  }

  // scaling: コンボ補正値を分解
  const rawScaling = s(row["コンボ補正値"]);
  if (rawScaling !== undefined) {
    const scaling: Record<string, number> = {};
    for (const tok of rawScaling.split("|")) {
      let m: RegExpMatchArray | null;
      if ((m = tok.match(/^※即時補正(\d+)[%％]/)))
        scaling["SA3CancelImmediateScaling"] = Number(m[1]);
      else if ((m = tok.match(/始動補正(\d+)[%％]/)))
        scaling["starterScaling"] = Number(m[1]);
      else if ((m = tok.match(/コンボ補正(\d+)[%％]/)))
        scaling["comboScaling"] = Number(m[1]);
      else if ((m = tok.match(/即時補正(\d+)[%％]/)))
        scaling["immediateScaling"] = Number(m[1]);
      // 乗算補正は scaling ではない(driveRush等) → notes 側で扱う
    }
    if (Object.keys(scaling).length > 0) {
      const body = Object.entries(scaling)
        .map(([k, v]) => `${k}: ${v}`)
        .join(", ");
      push("scaling", `{ ${body} }`);
    }
  }

  // recovery / hitstun / blockstun
  if (recoveryLine) {
    push("recovery", `{ hit: ${recoveryLine.hit} }`, "TODO 多段技なら要再調査");
  } else {
    push("recovery", "null");
  }
  push("hitstun", "null", "TODO 実機確認");
  push("blockstun", "null", "TODO 実機確認");

  // キャンセル
  const rawCancel = s(row["キャンセル"]);
  if (rawCancel !== undefined) push("cancelableBy", JSON.stringify(rawCancel));

  // 派生・無敵系はすべて手動
  push("derivesInto", "[]", "TODO 派生先");
  push("invincibleFrames", "null", "TODO 備考から抽出");
  push("airborneFrames", "null", "TODO 備考から抽出");
  push("superArmorFrames", "null", "TODO 備考から抽出");
  push("absorbFrames", "null", "TODO 備考から抽出");

  // ゲージ4種を guage オブジェクトにまとめる(guageは必須なので空でも出す)
  const guage: Record<string, number> = {};
  const g = (label: string, key: string) => {
    const n = int(row[label]);
    if (n !== undefined) guage[key] = n;
  };
  g("Dゲージ増加ヒット", "dGainOnHit");
  g("Dゲージ減少ガード", "dReductionOnBlock");
  g("Dゲージ減少PC", "dReductionOnPunishCounter");
  g("SAゲージ増加", "sAGain");
  const guageBody = Object.entries(guage)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");
  push("guage", guageBody ? `{ ${guageBody} }` : "{}");

  // notes: 共通システムは基本不要(表のメモが不正確)。前ステ/バクステのみ残す
  const rawNote = s(row["備考"]);
  const keepNote = !isCommon || moveName.includes("ステップ");
  if (rawNote !== undefined && keepNote) {
    const notes = rawNote.split("|").map((n) => JSON.stringify(n.trim()));
    push("notes", `[${notes.join(", ")}]`, "TODO 備考を構造化情報へ整理");
  } else {
    push("notes", "[]");
  }

  const header = todos.map((t) => `    // ${t}`).join("\n");
  return `  {\n${header ? header + "\n" : ""}${lines.join("\n")}\n  }`;
}

// --- メイン ----------------------------------------------------------------

const tsvPath = process.argv[2];
if (!tsvPath) {
  console.error("usage: tsv-to-ts.ts <path-to-tsv>");
  process.exit(1);
}

const charKey = basename(tsvPath)
  .replace(/\.tsv$/, "")
  .replace(/-.*/, "");

const text = readFileSync(tsvPath, "utf8")
  .replace(/\r\n?/g, "\n")
  .replace(/\n$/, "");
const [headerLine, ...bodyLines] = text.split("\n");
const headers = headerLine.split("\t");
const rows: Row[] = bodyLines.map((line) => {
  const cells = line.split("\t");
  const row: Row = {};
  headers.forEach((h, i) => (row[h] = cells[i] ?? ""));
  return row;
});

const characterName = rows[0]?.["キャラ"] ?? charKey;
const moves = rows.map((row, i) => serializeMove(row, i + 2)); // +2: TSVの行番号(ヘッダー=1)に合わせる

const out = `import type { CharacterMoveDb } from "../schema.ts";

// このファイルは tools/tsv-to-ts.ts で raw-frame-tsv/${basename(tsvPath)} から機械生成した
// 一次データ(moves/ 配下に置く)。TODO を手作業パスで潰していく。

export const ${charKey} = {
  character: ${JSON.stringify(characterName)},
  moves: [
${moves.join(",\n")},
  ],
} satisfies CharacterMoveDb;
`;

process.stdout.write(out);
