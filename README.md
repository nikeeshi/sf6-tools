# SF6-tools

スト6(ストリートファイター6)関連のツール集。各ツールはサブディレクトリで管理する。

## プロジェクト一覧

- [frame-meter](frame-meter/README.md) — フレームメーター風の図を作る解説用UIツール
- [combo-tree](combo-tree/README.md) — コンボルートを木構造で管理する自分用ツール
- [damage-calc](damage-calc/README.md) — 全キャラ共通のコンボダメージ計算エンジン(TypeScriptライブラリ)
- [move-db](move-db/README.md) — 全キャラの技データベース(JSON)
- [combo-count](combo-count/README.md) — コンボカウント(始動値/加算値/上限値)の実測記録
- [info-sources](info-sources/README.md) — 攻略情報の情報源の索引(キャラ別の発信者・サイト)
- [patch-notes](patch-notes/README.md) — 公式パッチノート・不具合修正告知の原文保管
- [patch-digest](patch-digest/README.md) — パッチノートの原文から読み取った仕様・用語・変更履歴

作りたいものと着手中の把握は [BACKLOG.md](BACKLOG.md) で行う。

## このプロジェクトについて

このリポジトリはClaude(Anthropic)との共同作業で構築している。実装・修正のコミットには
`Co-Authored-By: Claude <noreply@anthropic.com>` を付与し、Claudeが関わった変更であることが
コミット履歴から分かるようにしている。
