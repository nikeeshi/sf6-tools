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
| [system.md](system.md)               | システムの挙動と、不具合修正の裏返しとして読み取れる不変条件                  |
| [design-policy.md](design-policy.md) | 調整の方針として原文に明言されているもの                                      |
| [moves/](moves/)                     | キャラ別・技別の変更履歴。ファイル名は move-db の `raw-frame-tsv/` に合わせる |

1版読み終えるごとに検証する。出典リンクが実在する項目を指しているか、原文の項目を拾い残していないかを見る。読み終えた版は下のチェックリストの `[x]` から読み取るので、印を付けてから走らせる。

```bash
node patch-digest/tools/verify-digest.mjs
```

## 出典の書き方

各項目の行頭に版の日付を置き、その日付を原文へのリンクにする。リンク先は [battle-change](../patch-notes/battle-change/) の `.md` で、`#L` で該当行を指す。原文の表は1行が1項目なので、行番号がそのまま項目を指す。リンクの後ろにはキャラ名と変更箇所を添える。

行番号は原文を取り直すとずれる。ずれてもキャラ名と変更箇所で引けるようにしてあるので、その時は張り直す。

[update-maintenance](../patch-notes/update-maintenance/) は本文がJSONの1つの文字列に入っていて行番号が意味を持たないので、ファイルだけを指してキャラ名と技名を添える。

バトル変更リストの `category`(調整 / 不具合修正)は初期の版では空になっている。その場合は本文の文言から読む。

パッチノートに書かれていない知識を補うときは、行頭に **補足:** を付けて出典を持たないことを示す。

全体則として書けるのは、全ファイター共通の項に書かれているか、複数キャラで同じ記述が出た場合だけ。単一キャラの記述からはその技の話として書く。

モダン操作でのみ起きる話は、出典の直後に **(M)** を付ける。原文がSPボタン・アシストボタン・AUTOに言及していればモダンの話。1つの項目にモダン限定とそうでない話が混ざっている場合は `(M)` を付けず、本文側でどちらの話か書き分ける。

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
- [ ] 2024.05 battle-change/202405
- [ ] 2024.06.26 battle-change/20240626
- [ ] 2024.08.01 update-maintenance/20240801
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
