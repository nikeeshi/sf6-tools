# patch-digest

[patch-notes](../patch-notes/) の原文を古い順に読み、拾ったものを分類して置く場所。原文の保管は patch-notes 側、読み取った内容はこちら。

目的は3つ。

- フレーム表に載らない詳しい仕様を知る
- 公式の用語を知る
- その他の有用な情報を拾っておく

## 構成

| ファイル                             | 内容                                                                          |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| [terms.md](terms.md)                 | 公式用語。説明が要る語だけ本文を付け、それ以外は初出の記録だけ残す            |
| [input-buffer.md](input-buffer.md)   | 先行入力。状況別に猶予が設定されているので独立させている                      |
| [input-hold.md](input-hold.md)       | 入力保持フレーム。コマンドが崩れるまでの猶予で、先行入力とは別概念            |
| [combo-count.md](combo-count.md)     | コンボカウント。パッチノートにしか記述が無い内部値                            |
| [system.md](system.md)               | システムの挙動と、不具合修正の裏返しとして読み取れる不変条件                  |
| [design-policy.md](design-policy.md) | 調整の方針として原文に明言されているもの                                      |
| [moves/](moves/)                     | キャラ別・技別の変更履歴。ファイル名は move-db の `raw-frame-tsv/` に合わせる |

## 進め方

下のチェックリストの上から順に、1版ずつ読む。日付順に並べてあるので飛ばさない。

原文を読むときは、行番号を保ったまま空白を詰めるダンプを使う。prettierの桁揃えが落ちるぶん分量が減る。1回の出力が30KBを超えると切り詰められるので、大きい版は200行ずつ刻む。

```bash
node patch-digest/tools/dump-version.mjs 20240626
```

読み終えたらチェックリストに `[x]` を付け、検証を走らせる。出典リンクが実在する項目を指しているか、原文の項目を拾い残していないかを見る。読み終えた版はチェックリストから読み取るので、印を付けるのが先。

```bash
node patch-digest/tools/verify-digest.mjs
```

コミットは1版1回。小さい版は2件までまとめてよい。コミットのたびにプッシュする。

`moves/` に追記するとき、同じ技の節を二重に作ることがある。**追記前の確認はしない。32件すべて読み終えてから一度だけ統合する。** そのとき機械任せにせず、重複した節の中身を両方表示してから畳むこと。片方にしか無い項目を消す事故を一度起こしている。

## 出典の書き方

各項目の行頭に版の日付を置き、その日付を原文へのリンクにする。リンク先は [battle-change](../patch-notes/battle-change/) の `.md` で、`#L` で該当行を指す。原文の表は1行が1項目なので、行番号がそのまま項目を指す。リンクの後ろにはキャラ名と変更箇所を添える。

行番号は原文を取り直すとずれる。ずれてもキャラ名と変更箇所で引けるようにしてあるので、その時は張り直す。

[update-maintenance](../patch-notes/update-maintenance/) は本文がJSONの1つの文字列に入っていて行番号が意味を持たないので、ファイルだけを指してキャラ名と技名を添える。

バトル変更リストの `category`(調整 / 不具合修正)は初期の版では空になっている。その場合は本文の文言から読む。

パッチノートに書かれていない知識を補うときは、行頭に **補足:** を付けて出典を持たないことを示す。

全体則として書けるのは、全ファイター共通の項に書かれているか、複数キャラで同じ記述が出た場合だけ。単一キャラの記述からはその技の話として書く。

モダン操作でのみ起きる話は、出典の直後に **(M)** を付ける。原文がSPボタン・アシストボタン・AUTOに言及していればモダンの話。1つの項目にモダン限定とそうでない話が混ざっている場合は `(M)` を付けず、本文側でどちらの話か書き分ける。

## 持ち越している疑問

- **フォースブロウダウン**が[強制ダウン](system.md)と同じものか未確定。この語は 2024.02.27 に1回、2025.12.16 に2回、2026.08.03 に5回出てくるので、読み進めれば判定できる。

## 読んだ版

日付順。全32件。

- [x] 2023.07.24 [battle-change/20230724](../patch-notes/battle-change/20230724.md)
- [x] 2023.07.25 [update-maintenance/20230725](../patch-notes/update-maintenance/20230725.json)
- [x] 2023.08.08 [battle-change/20230808](../patch-notes/battle-change/20230808.md)
- [x] 2023.09.27 [battle-change/20230927](../patch-notes/battle-change/20230927.md)
- [x] 2023.11.01 [update-maintenance/20231101](../patch-notes/update-maintenance/20231101.json)
- [x] 2023.11.15 [update-maintenance/20231115](../patch-notes/update-maintenance/20231115.json)
- [x] 2023.12.01 [battle-change/20231201](../patch-notes/battle-change/20231201.md)
- [x] 2024.01.09 [update-maintenance/20240109](../patch-notes/update-maintenance/20240109.json)
- [x] 2024.02.27 [battle-change/20240227](../patch-notes/battle-change/20240227.md)
- [x] 2024.05 [battle-change/202405](../patch-notes/battle-change/202405.md)
- [x] 2024.06.26 [battle-change/20240626](../patch-notes/battle-change/20240626.md)
- [x] 2024.08.01 [update-maintenance/20240801](../patch-notes/update-maintenance/20240801.json)
- [ ] 2024.09.24 battle-change/20240924
- [ ] 2024.12.02 battle-change/20241202
- [ ] 2024.12.07 20241207.md (X告知)
- [ ] 2025.02.05 battle-change/20250205
- [ ] 2025.06 battle-change/202506
- [ ] 2025.06.06 update-maintenance/20250606
- [ ] 2025.06.26 update-maintenance/20250626
- [ ] 2025.07.04 update-maintenance/20250704
- [ ] 2025.08.05 battle-change/20250805
- [ ] 2025.09.01 battle-change/20250901
- [ ] 2025.10.15 battle-change/20251015
- [ ] 2025.10.22 battle-change/20251022
- [ ] 2025.11.13 battle-change/20251113
- [ ] 2025.12.16 battle-change/20251216
- [ ] 2026.03.17 battle-change/20260317
- [ ] 2026.04.15 battle-change/20260415
- [ ] 2026.05.28 battle-change/20260528
- [ ] 2026.07.02 update-maintenance/20260702
- [ ] 2026.08.03 battle-change/20260803
- [ ] 2026.08.12 20260812.md (X告知)
