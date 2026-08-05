move-db の進捗・タスク管理。上から下へ「着手前 → 着手中 → 完了」の流れ。

# Pending requirement

方針が決まらないと着手できないもの。

- 飛び道具の hitstun/blockstun 絶対値の算出方法(発生・持続が着弾タイミングと一致せず、標準計算が使えない)

# Backlog

仕様は明確で未着手のもの。

- 他29キャラの TS 化(機械パス + 手作業パス)
- ルークの実機調査項目(hitstun/blockstun 確定値・hitCount 確定値・多段 hits)
- 硬直欄の例外表記(※N / 全体※N / 着地N / ジェイミー SA1 の 74※107)の処理
- 属性・キャンセル欄の表記揺れの正規化
- 飛び道具の行分割(動作行と弾行)の統合

# In progress

- ヤスミン(20260803)の手作業パス ※機械パス完了(tsv/ts 生成・typecheck 通過)。残 TODO 854 件(id 付与・派生関係・無敵/空中/アーマー構造化・実機項目)

# Pending verification

実装済みで確認待ちのもの。

- 版サブディレクトリへの再編(moves / raw-frame-html / raw-frame-tsv を `<yyyymmdd>/` 下へ、既存を 20260528 に。import・tsconfig・README 追従、typecheck 通過済み)

# Closed

- 全30キャラの公式フレーム表を TSV 化(2361技)
- スキーマを schema.ts に切り出し
- 整形自動化(prettier + husky + lint-staged)を導入
- ルークの TS 化(機械パス + id 付与 + 派生関係 + 無敵/空中/アーマー構造化、実機項目を除く)
