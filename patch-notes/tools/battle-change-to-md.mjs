// battle-change のJSONを、同じ内容のmarkdownに機械変換する。
// 使い方: node tools/battle-change-to-md.mjs battle-change/*.json
// 出力は入力と同じディレクトリに、拡張子だけ .md に変えた名前で書く。JSONは触らない。
import { readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

// ---- HTML → markdown ----

/**
 * 開始タグ・終了タグ1つをmarkdownの断片に変換する。
 * 改行は一旦 <BR> という中間表現にしておき、最後に出力先(表の中か外か)に応じて置き換える。
 * @param {string} tag タグ文字列。例: "<li>"
 * @param {{lists: {type: string, count: number}[], spans: string[], hrefs: string[]}} state 入れ子の状態
 * @returns {string} markdownの断片
 */
function tagToMarkdown(tag, state) {
  const lower = tag.toLowerCase();

  if (/^<br\s*\/?>$/.test(lower)) return "<BR>";

  if (/^<ul\b/.test(lower)) {
    // 原文には </ul> の代わりに <ul> が置かれている箇所があるが、
    // 新しいリストの開始として扱っても番号が振り直されるだけで実害が無いのでこのままにする。
    state.lists.push({
      type: /list-style:\s*decimal/.test(tag) ? "decimal" : "disc",
      count: 0,
    });
    return "";
  }
  if (lower === "</ul>") {
    state.lists.pop();
    return "";
  }
  if (lower === "<li>") {
    const current = state.lists.at(-1);
    if (!current) return "<BR>・";
    current.count += 1;
    return current.type === "decimal" ? `<BR>${current.count}. ` : "<BR>・";
  }
  if (lower === "</li>") return "";

  if (/^<span\b/.test(lower)) {
    if (/font-weight:\s*bold/.test(tag)) {
      state.spans.push("**");
      return "**";
    }
    if (/battle_change_through/.test(tag)) {
      state.spans.push("~~");
      return "~~";
    }
    // battle_change_caution と字下げ用のspanは、囲いを外して中身だけ残す。
    state.spans.push("");
    return "";
  }
  if (lower === "</span>") return state.spans.pop() ?? "";

  if (/^<a\b/.test(lower)) {
    state.hrefs.push(tag.match(/href=['"]([^'"]*)['"]/)?.[1] ?? "");
    return "[";
  }
  if (lower === "</a>") return `](${state.hrefs.pop() ?? ""}.md)`;

  // <div data-word='combo_count'> は用語をマークするだけなので、囲いを外して語を残す。
  if (/^<\/?div\b/.test(lower)) return "";

  if (/^<\/?p\b/.test(lower)) return "<BR>";

  return "";
}

/**
 * 原文のHTMLをmarkdownに変換する。
 * @param {unknown} html 原文。文字列でなければ空文字を返す
 * @param {boolean} inline 表のセルに入れるなら true。改行を <br> のまま残す
 * @returns {string} markdown
 */
function htmlToMarkdown(html, inline) {
  if (typeof html !== "string") return "";
  const state = { lists: [], spans: [], hrefs: [] };
  let out = "";
  let last = 0;
  for (const match of html.matchAll(/<[^>]*>/g)) {
    out += html.slice(last, match.index).replaceAll("|", "\\|");
    last = match.index + match[0].length;
    out += tagToMarkdown(match[0], state);
  }
  out += html.slice(last).replaceAll("|", "\\|");

  out = out
    .replaceAll(/\r?\n/g, " ")
    .replaceAll(/(?:<BR>\s*){3,}/g, "<BR><BR>")
    .replace(/^(?:<BR>\s*)+/, "")
    .replace(/(?:\s*<BR>)+$/, "")
    .trim();

  return inline ? out.replaceAll("<BR>", "<br>") : out.replaceAll("<BR>", "\n");
}

// ---- 組み立て ----

/**
 * 変更項目の配列を、変更箇所・カテゴリ・調整内容の3列の表にする。
 * 1つの変更箇所が複数の項目を持つ場合は、変更箇所を繰り返して行を分ける。
 * @param {{title: string, body: {category: string, text: string}[]}[]} items 変更項目
 * @returns {string} markdownの表。項目が無ければ空文字
 */
function toTable(items) {
  const rows = [];
  for (const item of items ?? []) {
    const where = htmlToMarkdown(item.title, true);
    for (const body of item.body ?? []) {
      rows.push(
        `| ${where} | ${htmlToMarkdown(body.category, true)} | ${htmlToMarkdown(body.text, true)} |`,
      );
    }
  }
  if (rows.length === 0) return "";
  return [
    "| 変更箇所 | カテゴリ | 調整内容 |",
    "| --- | --- | --- |",
    ...rows,
  ].join("\n");
}

/**
 * battle-change のJSONをmarkdownの本文に変換する。
 * @param {object} data JSONをパースしたもの
 * @returns {string} markdown全文
 */
function buildMarkdown(data) {
  const out = [`# ${data.title}`];

  // policy の title は fighter_tool_name。それ以外(全体コンセプトや見出しの無い文)は全体側に置く。
  const toolNames = new Set(
    (data.fighter ?? []).map((f) => f.fighter_tool_name),
  );
  const policyByFighter = new Map();
  const generalPolicies = [];
  for (const policy of data.policy ?? []) {
    if (toolNames.has(policy.title)) policyByFighter.set(policy.title, policy);
    else generalPolicies.push(policy);
  }

  // policy が空の版では 調整方針 の節ごと出さない。
  if (generalPolicies.length > 0) {
    out.push("## 調整方針", "### 全体コンセプト");
    for (const policy of generalPolicies) {
      // title が "全体コンセプト" や空文字のときは見出しにしても情報が増えないので落とす。
      if (policy.title && policy.title !== "全体コンセプト") {
        out.push(`**${htmlToMarkdown(policy.title, true)}**`);
      }
      const text = htmlToMarkdown(policy.text, false);
      if (text) out.push(text);
    }
  }

  const commonTable = toTable(data.common);
  if (commonTable) out.push("## 全ファイター共通", commonTable);

  for (const fighter of data.fighter ?? []) {
    out.push(`## ${fighter.fighter_alpha}`);
    const policy = policyByFighter.get(fighter.fighter_tool_name);
    if (policy) {
      const text = htmlToMarkdown(policy.text, false);
      if (text) out.push("### 調整方針", text);
    }
    const table = toTable(fighter.detail);
    if (table) out.push(table);
  }

  return out.join("\n\n") + "\n";
}

for (const path of process.argv.slice(2)) {
  const data = JSON.parse(readFileSync(path, "utf8"));
  const outPath = join(dirname(path), basename(path).replace(/\.json$/, ".md"));
  writeFileSync(outPath, buildMarkdown(data), "utf8");
  console.log(`${path} -> ${outPath}`);
}
