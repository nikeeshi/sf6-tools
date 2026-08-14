// battle-change の md を、行番号を保ったまま空白を詰めて表示する。読むだけ。
// prettier の桁揃えで入った空白を落とし、読むときの分量を減らすためのもの。
// 出典に使う行番号は元のまま変わらない。
//
// 使い方: node tools/dump-version.mjs <版ID> [開始行] [終了行]
//   例: node tools/dump-version.mjs 20240626
//       node tools/dump-version.mjs 202405 400 600
//
// 1回の出力が30KBを超えると表示が切り詰められるので、大きい版は200行ずつ刻む。
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const battleChangeDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../patch-notes/battle-change",
);

const [id, from = "1", to = "999999"] = process.argv.slice(2);
if (!id) {
  console.error("版IDを指定する。例: node tools/dump-version.mjs 20240626");
  process.exit(1);
}

const lines = readFileSync(join(battleChangeDir, `${id}.md`), "utf8").split(
  "\n",
);

for (let i = +from - 1; i < Math.min(+to, lines.length); i += 1) {
  const line = lines[i];
  const number = String(i + 1).padStart(4);

  if (/^\|[\s|-]*$/.test(line)) continue; // 表の区切り行
  if (line.startsWith("|")) {
    const cells = line.split("|").map((c) => c.trim());
    if (cells[1] === "変更箇所") continue; // 表の見出し行
    console.log(`${number} [${cells[1]}] ${cells[3]}`);
  } else if (line.trim()) {
    console.log(`${number} ${line}`);
  }
}
