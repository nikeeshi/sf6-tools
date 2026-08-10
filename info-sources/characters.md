# 全キャラの情報源マップ

**31キャラ横断の一覧。** キャラを深掘りする前に、まずここで「そのキャラに何があるか」を見る。
キャラ別に掘ったものは個別ファイルへ([ingrid.md](ingrid.md) / [lily.md](lily.md) / [elena.md](elena.md))。
キャラ一覧の正は [`move-db/characterList.ts`](../move-db/characterList.ts)。

**なぜ全キャラでやるか。** 情報源はキャラ単位ではなくサイト単位・大会単位で存在するので、
**1回の取得で31キャラ分が埋まる**。1キャラずつ掘るより桁で効率がいい。

**調査日: 2026-08-09。**

## 一覧

| キャラ           | 大会選手                                   | レジェ数 | 60位MR   | モダン | かくぶろ                  | pachi-mea |
| ---------------- | ------------------------------------------ | -------- | -------- | ------ | ------------------------- | --------- |
| **ルーク**       | 9人 (NoahTheProdigy, Hinao, Chris Wong)    | 16       | 2102     | 24     | combo/setup/howtouse      | 10313     |
| **ジェイミー**   | 3人 (John Takeuchi, Tantanmen, Boltstrike) | 19       | 2047     | 1      | combo/setup/howtouse      | 10321     |
| **マノン**       | 3人 (Akutagawa, Johnny, iDom)              | 8        | 2005     | 4      | howtouse                  | 10263     |
| **キンバリー**   | 13人 (NARIKUN, matsu56, tako)              | 18       | 2097     | 1      | howtouse                  | 10328     |
| **マリーザ**     | **0人**                                    | 12       | 2041     | 12     | howtouse                  | 10317     |
| **リリー**       | 4人 (Hibiki, KojiKOG, ElChakotay)          | 8        | **2001** | **23** | howtouse のみ             | 10341     |
| **JP**           | 19人 (Tokido, Momochi, takepi)             | **27**   | **2120** | 1      | setup/combo ほか5本       | 10259     |
| **ジュリ**       | 10人 (Nephew, pugera, JAK)                 | 16       | 2056     | 2      | howtouse                  | 10182     |
| **DJ**           | 10人 (Xian, Bloo, Fuudo)                   | 20       | 2100     | 2      | howtouse                  | 10277     |
| **キャミィ**     | 14人 (Phenom, Punk, Akira)                 | 25       | 2108     | 5      | howtouse                  | 10219     |
| **リュウ**       | 15人 (Blaz, Hinao, Shuto)                  | 15       | 2089     | 2      | combo/setup               | 10309     |
| **本田**         | 3人 (FREESER, Eastwood, Matt Hazard)       | 13       | 2015     | 14     | howtouse                  | 10336     |
| **ブランカ**     | 10人 (MenaRD, ACQUA, Takagi)               | 18       | 2046     | 7      | howtouse                  | 10265     |
| **ガイル**       | 11人 (Higuchi, Caba, NuckleDu)             | 8        | 2004     | 2      | howtouse                  | 10251     |
| **ケン**         | 11人 (ChrisT, orarin, Tokido)              | 19       | 2101     | 3      | combo/howtouse            | 10237     |
| **春麗**         | 7人 (moke, GO1, Seiya)                     | 22       | 2058     | 9      | howtouse                  | 10255     |
| **ザンギエフ**   | 6人 (kobayan, Itabashi Zangief, Jr.)       | 17       | 2008     | 10     | howtouse                  | 10241     |
| **ダルシム**     | 8人 (Torimeshi, YHC-Mochi, Mister Crimson) | 15       | 2034     | 2      | 1本のみ                   | 10332     |
| **ラシード**     | 8人 (gachikun, Big Bird, Oil King)         | 11       | 2024     | 2      | howtouse                  | 10233     |
| **A.K.I.**       | 6人 (Hikaru, Hope, Mono)                   | 13       | 2016     | 5      | howtouse                  | 10283     |
| **エド**         | 11人 (Sahara, Fuudo, Momochi)              | 22       | 2077     | 14     | howtouse                  | 10200     |
| **豪鬼**         | 20人 (Kawano, Shuto, Daigo)                | 16       | 2100     | 1      | combo/offense/skill       | 10215     |
| **ベガ**         | 20人 (HotDog29, Nemo, MenaRD)              | 26       | 2111     | 2      | combo/neutral/setup       | 10208     |
| **テリー**       | 17人 (kincho, Kusanagi, Wabiichi)          | 16       | 2096     | 2      | combo/neutral/setup       | 10346     |
| **舞**           | **30人** (moke, Yamaguchi, Mago)           | 26       | **2153** | 5      | combo/setup/howtouse+対策 | 10455     |
| **エレナ**       | 5人 (Dogura, sako, ElChakotay)             | 12       | 2065     | 3      | combo/setup/howtouse      | 10416     |
| **サガット**     | 22人 (Bonchan, Mago, Hinao)                | 26       | 2122     | 4      | combo/setup/howtouse      | 11262     |
| **C.ヴァイパー** | 9人 (Tachikawa, Fujimura, Kazunoko)        | 19       | 2103     | **20** | combo/offense/howtouse    | 11271     |
| **アレックス**   | 6人 (Problem X, Nemo, Dogura)              | **7**    | 2021     | 5      | combo/setup/neutral       | 11273     |
| **イングリッド** | 5人 (sako, Punk, Nephew)                   | 13       | 2065     | 10     | combo/setup/neutral       | 11275     |
| **ヤスミン**     | 0人(8/3参戦)                               | —        | —        | —      | combo/setup/neutral       | 12587     |

**列の意味と出典:**

- **大会選手** — Liquipedia の主要大会14ページから抽出([common.md](common.md) の取り方参照)。
  SFL 2026・EVO 2026・EVO Japan 2026・EWC 2026・TOPANGA 7・Capcom Cup 12・Blink Respawn 2026・
  Combo Breaker 2026・BAM16・VSFighting 2026・Battle of BC 8・Only The Best 8・EVO France 2025。
  **CPT World Warrior の地域予選は含んでいない**ので、実数はこれより多い
- **レジェ数 / 60位MR / モダン** — madaraomi の Act.12(2026-05-01〜08-01)集計表。
  60位MR はそのキャラの層の厚さ、モダンは上位60人中のモダン操作の人数
- **かくぶろ** — `takukakugamer.com/sf6-<char>-<種類>/`。setup=セットプレイ、neutral/howtouse=立ち回り
- **pachi-mea** — `pachi-mea.com/sf6-wiki/<番号>/`

## 読み取れること

**かくぶろは新しいキャラほど厚い。** Year2 以降(ベガ・テリー・舞・エレナ・サガット・C.ヴァイパー・
アレックス・イングリッド・ヤスミン)はほぼ combo/setup/立ち回りの3本立て。**無印18人は howtouse 1本**が
大半。**ヤスミンは 8/3 参戦で 8/9 時点にはもう3本揃っている** — 新キャラへの反応が速い。
逆に言えば**古いキャラをかくぶろで掘ろうとすると薄い**。

**pachi-mea は全31キャラが均等に揃っている。** しかも各ページに「キャラ相性」「キャラ対策」の節がある。
**受け側(相手からどう対策されているか)を全キャラ分カバーできる唯一の文章媒体。**
未参戦キャラ(アルジュン・ティファ・ボシュ)の予想記事まで持っている。

**大会とランクマは一致しない。** JP はレジェンド27人(1位)で大会選手19人と両方多いが、
**リリーはモダン23人(全キャラ最多)なのに大会選手4人**、逆に**キンバリーは大会13人なのにモダン1人**。
**マリーザは主要大会に0人だがモダン12人**。どちらか片方だけ見ると見落とす。

**モダン比率が極端なキャラがある。** リリー23人・ルーク24人・C.ヴァイパー20人が多く、
JP・ジェイミー・キンバリー・豪鬼が1人。**モダン名簿でそのキャラ使いを引けるかはキャラによる。**

**60位MR が層の厚さ。** 舞2153 が最高、リリー2001・ガイル2004・マノン2005 が最低水準。
**60位MR が低いキャラは、上位帯の人口そのものが少ない**ので情報源も薄くなる。

## まだ埋めていない列

- **ゴジライン**(「今夜勝ちたい」全キャラ分あるはず) — **サイトは正常に開ける。**
  `sitemap.xml` と `wp-sitemap.xml` が 404 なので**記事一覧を機械的に取る手段が未確立**なだけ。
  記事は `goziline.com/archives/<番号>/` 形式で、記事ページ内に他記事へのリンクが数十本あるので、
  既知の記事(`65776` イングリッド、`66675`)から辿れば全キャラ分を集められる
- **スコレル**(モダン操作の記事が充実)・**カルコラ**・**神ゲー攻略**・**Gameeブログ** — 未着手
- **受け側の動画**(対策動画) — イングリッドだけ拾ってある
- **CPT World Warrior の地域予選** — イングリッドだけ拾ってある。全キャラでやると大会選手の数が増える
