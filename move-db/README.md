# move-db

SF6全キャラの技データ(ダメージ・補正値・フレーム等)をJSONで持つデータベース。
[damage-calc](../damage-calc/README.md) が毎回技データを聞き直さずに済むようにするのが目的。

## 現状(2026-07-22時点で保留中)

ルーク1キャラ分(76技)を`luke.json`に投入したところで、スキーマの見直しが必要という
判断になり、他キャラへは進まず保留中。新しいチャットスレッドで続きから作業できるように、
決定事項と保留事項をここに書き出している。

## スキーマ(暫定)

```typescript
type Confidence = 1 | 2 | 3 | 4 | 5;

interface RatedValue<T> {
  value: T;
  confidence: Confidence;
  source: string;
}
type Rated<T> = RatedValue<T> | null;

type AttackLevel = "上段" | "中段" | "下段" | "投げ";
type HitOutcome = "hit" | "whiff" | "block";
type HitStrength = "normal" | "counter" | "punishCounter";

interface FrameRange {
  from: number;
  to: number;
}

// 1つの攻撃判定。発生+持続をまとめて範囲で表現。多段技はこれが複数並ぶ想定
interface Hit {
  range: Rated<FrameRange>;
  baseDamage: Rated<number>;
  attackLevel: Rated<AttackLevel>;
}

interface DerivesInto {
  input: string;              // 派生に必要な入力
  window: Rated<FrameRange>;  // 派生可能なタイミング
  moveId: string;
}

interface Move {
  id: string;                 // "キャラ.技slug" の一意キー
  name: string;
  category: string;
  notation: string;

  hits: Hit[];                 // 単発技も要素数1として持つ。ダメージが出ない技は空配列

  starterScaling: Rated<number>;
  comboScaling: Rated<number>;
  immediateScaling: Rated<number>;
  minGuarantee: Rated<number>;

  // 技自体の硬直。hit/whiff/blockで変わる技だけ埋める
  recovery: { hit: Rated<number>; block: Rated<number>; whiff: Rated<number> } | null;

  // 相手の地上ヒット時の硬直。normal/counter/punishCounterを独立値で持つ
  hitstun: { normal: Rated<number>; counter: Rated<number>; punishCounter: Rated<number> } | null;

  blockstun: Rated<number> | null;

  cancelWindow: Rated<FrameRange> | null;
  cancelRushWindow: Rated<FrameRange> | null;

  derivesFrom: string | null;   // 派生元のid(子側)
  derivesInto: DerivesInto[];   // 派生先の一覧(親側)

  notes: string[];              // 構造化してない属性(無敵時間・強制ジャグル等)の自由記述
}

interface CharacterMoveDb {
  character: string;
  moves: Move[];
}
```

- `baseDamage` / `starterScaling` / `comboScaling` / `immediateScaling` / `minGuarantee` は
  [damage-calc](../damage-calc/damage-calc.ts) の `MoveInput` にそのまま渡せる形にする
- 値がない/未確認の項目は `null`

## 信頼度スケール(仮、未確認)

| 値 | 意味 |
|---|---|
| 5 | ゲーム内実測 |
| 4 | 公式サイトのフレーム表 |
| 3 | コミュニティのフレームデータサイト/wiki、または一般則からの推測(例: カウンター=通常+2F) |
| 2 | 動画等からの目算・推測 |
| 1 | 未確認・暫定値 |

5と4はユーザー指定。1〜3は提案時点で未確認なので、使う前に本人確認を取ること。

## 対象キャラ

全キャラ。データ量が多いのでキャラ単位で区切って進める想定。

- **ルーク**: `luke.json` に76技(通常技18・特殊技11・必殺技28・SA4・投げ2・共通システム10)を投入済み。
  公式サイトの日本語版フレーム表(HTML)をパースして変換した。ただし下記の保留事項次第で
  スキーマごと再変換になる可能性あり。
- 他キャラ: 未着手。

## 保留事項

- **スキーマの軽量化**: `luke.json`は76技で約160KB・5000行超になった。主因は数値項目ごとの
  `{ value, confidence, source }` ラップ。他キャラに広げる前に、`source`文字列の共通化や
  pretty-print方針など、軽量化の検討が必要(未着手)。
- **Dゲージ増減・SAゲージ増加量**: 公式フレーム表にはあるがスキーマにまだ項目がない。
  ルークの生データはスクレイプ済みなので、スキーマが決まれば追加投入は可能。
- **飛び道具のhitstun/blockstun(絶対値)算出方法**: 発生・持続のフレームが弾の着弾タイミングと
  一致しないため、格闘ゲーム標準の「全体フレーム-持続終了フレーム=硬直」という単純計算が使えない。
  正しい算出方法が未確定なので、当面はサンドブラスト等の飛び道具技は`recovery`/`hitstun`/`blockstun`を
  `null`のままにしている。
- **多段技(1入力で複数ヒットする技)**: `hits`配列で表現できる設計にした(旧保留事項は解消)。
  ただしルークの実データには`hits.length > 1`の技は無く、ターゲットコンボ(ダブルインパクト等)は
  すべて`derivesFrom`/`derivesInto`で繋いだ別々の技として表現している。
