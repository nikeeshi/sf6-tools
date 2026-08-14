// patch-digest の出典リンクを検証する。読むだけで何も書き換えない。
// 使い方: node tools/verify-digest.mjs
//
// 見るのは2点。
//   1. #L が指す行が実在し、原文の項目行か調整方針の本文行であること
//   2. 読み終えた版の項目が、どこからも参照されないまま残っていないこと
//
// 読み終えた版は README.md のチェックリストの [x] から読み取る。
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const digestDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const battleChangeDir = join(digestDir, "../patch-notes/battle-change");

// 中身が無く、拾わないと決めた行。版IDごとに行番号を並べる。
const skipped = {
  20230724: ["12"], // その他軽微な不具合を修正いたしました。
};

/**
 * README.md のチェックリストから、読み終えた battle-change の版IDを集める。
 * @returns {string[]} 版ID。例: ["20230724", "20230808"]
 */
function readFinishedVersions() {
  const readme = readFileSync(join(digestDir, "README.md"), "utf8");
  return [...readme.matchAll(/- \[x\][^\n]*battle-change\/(\d+)/g)].map(
    (m) => m[1],
  );
}

/**
 * ディレクトリ以下のmdファイルを再帰的に集める。
 * @param {string} dir 探索するディレクトリ
 * @returns {string[]} mdファイルのパス
 */
function collectMarkdown(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectMarkdown(path));
    else if (path.endsWith(".md")) out.push(path);
  }
  return out;
}

/** 原文の表の行かどうか。区切り行は除く。 */
const isItemRow = (line) => line.startsWith("|") && !/^\|[\s|-]*$/.test(line);
/** 調整方針の本文行かどうか。 */
const isPolicyText = (line) =>
  line.length > 0 && !line.startsWith("|") && !line.startsWith("#");

const versions = readFinishedVersions();
const source = {};
for (const version of versions) {
  source[version] = readFileSync(
    join(battleChangeDir, version + ".md"),
    "utf8",
  ).split("\n");
}

let total = 0;
let ng = 0;
/** 版ID -> 参照された行番号の集合 */
const referenced = {};

for (const file of collectMarkdown(digestDir)) {
  const text = readFileSync(file, "utf8");
  // 版IDは8桁(20230724)と6桁(202405)の両方がある。
  for (const match of text.matchAll(/(\d{6,8})\.md#L(\d+)/g)) {
    total += 1;
    const lines = source[match[1]];
    if (!lines) {
      console.log(`NG 読み終えていない版を参照 ${file} ${match[0]}`);
      ng += 1;
      continue;
    }
    const line = lines[+match[2] - 1] ?? "";
    if (!isItemRow(line) && !isPolicyText(line)) {
      console.log(`NG 指す先が項目でも本文でもない ${file} ${match[0]}`);
      ng += 1;
    }
    (referenced[match[1]] ??= new Set()).add(match[2]);
  }
}

console.log(
  `出典リンク ${total}件 / ${ng ? ng + "件NG" : "全て実在する項目を指している"}\n`,
);

for (const version of versions) {
  const rows = [];
  source[version].forEach((line, index) => {
    if (isItemRow(line) && line.split("|")[1].trim() !== "変更箇所")
      rows.push(String(index + 1));
  });
  const missing = rows.filter(
    (row) =>
      !(referenced[version] ?? new Set()).has(row) &&
      !(skipped[version] ?? []).includes(row),
  );
  console.log(
    `${version} 項目${String(rows.length).padStart(4)} / 未参照: ${missing.length ? missing.join(",") : "なし"}`,
  );
}

process.exit(ng > 0 ? 1 : 0);
