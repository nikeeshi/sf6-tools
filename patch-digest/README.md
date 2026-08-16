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

### moves/ への追記はファイル末尾に足すだけにする

この作業はトークン消費が大きい。以下は削減のための方針で、絶対則ではない。

**`moves/` は末尾に新しい節を作って追記する。既存の節を探さない。** 同じ技の節が二重にできてよい。理由は、既存の節に差し込もうとすると、挿入位置を探すためにファイルを開き、さらに編集時に既存行をそのまま引用することになるため。このレポジトリの技の行は1行200字級なので、1項目の追記で長い行を2回出力することになる。

したがって、次のことをしない。

- 追記先を決めるために `moves/` のファイルを開く
- 既存の節の中で版の時系列順になる位置に差し込む
- 同じ技の節が既にあるか確認する

**重複した節は32件すべて読み終えてから一度だけ統合する。** 手順は下の[重複した節の統合](#重複した節の統合)にある。

### 直接編集してよいファイル

[system.md](system.md)・[terms.md](terms.md)・[design-policy.md](design-policy.md)・[input-buffer.md](input-buffer.md)・[input-hold.md](input-hold.md)・[combo-count.md](combo-count.md) は概念ごとの整理が要るので、これまで通り該当箇所を探して直接編集する。版あたりの件数が少なく、`moves/` ほど嵩まない。

### フレーム表を読まない

[move-db](../move-db/) の `raw-frame-tsv/` は参照しない。トークンを使う割に、digestに書けるのはパッチノート原文由来の内容だけで、得るものが少ない。原文の技名がフレーム表と食い違っていそうな場合も、原文の表記のまま残して先に進む。

## 出典の書き方

各項目の行頭に版の日付を置き、その日付を原文へのリンクにする。リンク先は [battle-change](../patch-notes/battle-change/) の `.md` で、`#L` で該当行を指す。原文の表は1行が1項目なので、行番号がそのまま項目を指す。リンクの後ろにはキャラ名と変更箇所を添える。

行番号は原文を取り直すとずれる。ずれてもキャラ名と変更箇所で引けるようにしてあるので、その時は張り直す。

[update-maintenance](../patch-notes/update-maintenance/) は本文がJSONの1つの文字列に入っていて行番号が意味を持たないので、ファイルだけを指してキャラ名と技名を添える。

バトル変更リストの `category`(調整 / 不具合修正)は初期の版では空になっている。その場合は本文の文言から読む。

パッチノートに書かれていない知識を補うときは、行頭に **補足:** を付けて出典を持たないことを示す。

全体則として書けるのは、全ファイター共通の項に書かれているか、複数キャラで同じ記述が出た場合だけ。単一キャラの記述からはその技の話として書く。

モダン操作でのみ起きる話は、出典の直後に **(M)** を付ける。原文がSPボタン・アシストボタン・AUTOに言及していればモダンの話。1つの項目にモダン限定とそうでない話が混ざっている場合は `(M)` を付けず、本文側でどちらの話か書き分ける。

## 持ち越している疑問

- **フォースブロウダウン**が[強制ダウン](system.md)と同じものか未確定。**原文からは判定できないことが確定した。** 当初は「2025.12.16 に2回、2026.08.03 に5回出てくるので読み進めれば判定できる」としていたが、実際に数えると **フォースブロウダウンは全パッチノート中 2024.02.27 の1回だけ**、強制ダウンも 2023.12.01 の1回だけだった。両方とも1回ずつしか出ないため、原文の対比から結論は出ない。判定するならゲーム内表示など原文の外を当たる必要がある。

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
- [x] 2024.09.24 [battle-change/20240924](../patch-notes/battle-change/20240924.md)
- [x] 2024.12.02 [battle-change/20241202](../patch-notes/battle-change/20241202.md)
- [x] 2024.12.07 [20241207.md](../patch-notes/20241207.md) (X告知)
- [x] 2025.02.05 [battle-change/20250205](../patch-notes/battle-change/20250205.md)
- [x] 2025.06 [battle-change/202506](../patch-notes/battle-change/202506.md)
- [x] 2025.06.06 [update-maintenance/20250606](../patch-notes/update-maintenance/20250606.json)
- [x] 2025.06.26 [update-maintenance/20250626](../patch-notes/update-maintenance/20250626.json)
- [x] 2025.07.04 [update-maintenance/20250704](../patch-notes/update-maintenance/20250704.json)
- [x] 2025.08.05 [battle-change/20250805](../patch-notes/battle-change/20250805.md)
- [x] 2025.09.01 [battle-change/20250901](../patch-notes/battle-change/20250901.md)
- [x] 2025.10.15 [battle-change/20251015](../patch-notes/battle-change/20251015.md)
- [x] 2025.10.22 [battle-change/20251022](../patch-notes/battle-change/20251022.md)
- [x] 2025.11.13 [battle-change/20251113](../patch-notes/battle-change/20251113.md)
- [x] 2025.12.16 [battle-change/20251216](../patch-notes/battle-change/20251216.md)
- [x] 2026.03.17 [battle-change/20260317](../patch-notes/battle-change/20260317.md)
- [x] 2026.04.15 [battle-change/20260415](../patch-notes/battle-change/20260415.md)
- [x] 2026.05.28 [battle-change/20260528](../patch-notes/battle-change/20260528.md)
- [x] 2026.07.02 [update-maintenance/20260702](../patch-notes/update-maintenance/20260702.json)
- [x] 2026.08.03 [battle-change/20260803](../patch-notes/battle-change/20260803.md)
- [x] 2026.08.12 [20260812.md](../patch-notes/20260812.md) (X告知)

## 重複した節の統合

32版すべてを読み終えた後の作業。末尾追記でできた `moves/` の重複節を1キャラずつ畳む。

対象は**完全同名の節だけ**。版サフィックスを外すと文字列が一致する組を指す。版サフィックスには `(2026.08.03)` の日単位と `(2025.06)` の年月単位がある。コマンド注記の有無が違うだけの組(例: `## 螭吻(→+強P)` と `## 螭吻(2025.06)`)は、別技を指している場合があるので触らない。

1キャラの手順。

- 先に出てくる節へ後の節の項目を畳み、項目は日付昇順に並べる
- 見出しはコマンド注記のある方を残し、版サフィックス(例: `## 立ち中K(2026.08.03)`)は落とす。日付は項目行の先頭にあるので見出し側には要らない
- 重複していない節に付いた版サフィックスも、そのファイルを触るついでに落とす。ただし落とすと別の節と同名になる場合は、対象外の組なので付けたままにする
- 畳んだら `verify-digest.mjs` を走らせる。項目を1行落とすと、参照されない原文項目として検出される

コミットは3〜5キャラで1回。

完全同名の重複を持つのは以下の26件。残る4件(alex, cviper, elena, ingrid)は重複が無いので、版サフィックスも残したままになっている。

- [x] [aki](moves/aki.md)
- [x] [blanka](moves/blanka.md)
- [x] [cammy](moves/cammy.md)
- [x] [chunli](moves/chunli.md)
- [x] [deejay](moves/deejay.md)
- [x] [dhalsim](moves/dhalsim.md)
- [x] [ed](moves/ed.md)
- [x] [ehonda](moves/ehonda.md)
- [x] [gouki](moves/gouki.md)
- [x] [guile](moves/guile.md)
- [x] [jamie](moves/jamie.md)
- [x] [jp](moves/jp.md)
- [x] [juri](moves/juri.md)
- [x] [ken](moves/ken.md)
- [x] [kimberly](moves/kimberly.md)
- [x] [lily](moves/lily.md)
- [x] [luke](moves/luke.md)
- [x] [mai](moves/mai.md)
- [x] [manon](moves/manon.md)
- [x] [marisa](moves/marisa.md)
- [ ] [rashid](moves/rashid.md)
- [ ] [ryu](moves/ryu.md)
- [ ] [sagat](moves/sagat.md)
- [ ] [terry](moves/terry.md)
- [ ] [vega](moves/vega.md)
- [ ] [zangief](moves/zangief.md)
