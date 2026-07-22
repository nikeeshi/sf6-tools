export type Confidence = 1 | 2 | 3 | 4 | 5;

export interface RatedValue<T> {
  value: T;
  confidence: Confidence;
  source: string;
}
export type Rated<T> = RatedValue<T> | null;

export type AttackLevel = "上段" | "中段" | "下段" | "投げ";
export type HitOutcome = "hit" | "whiff" | "block";
export type HitStrength = "normal" | "counter" | "punishCounter";

export interface FrameRange {
  from: number;
  to: number;
}

// 1つの攻撃判定。発生+持続をまとめて範囲で表現。多段技はこれが複数並ぶ想定
export interface Hit {
  range: Rated<FrameRange>;
  baseDamage: Rated<number>;
  attackLevel: Rated<AttackLevel>;
}

export interface DerivesInto {
  input: string; // 派生に必要な入力
  window: Rated<FrameRange>; // 派生可能なタイミング
  moveId: string;
}

export interface Move {
  id: string; // "キャラ.技slug" の一意キー
  name: string;
  category: string;
  notation: string;

  hits: Hit[]; // 単発技も要素数1として持つ。ダメージが出ない技は空配列

  starterScaling: Rated<number>;
  comboScaling: Rated<number>;
  immediateScaling: Rated<number>;
  minGuarantee: Rated<number>;

  // 技自体の硬直。hit/whiff/blockで変わる技だけ埋める
  recovery: {
    hit: Rated<number>;
    block: Rated<number>;
    whiff: Rated<number>;
  } | null;

  // 相手の地上ヒット時の硬直。normal/counter/punishCounterを独立値で持つ
  hitstun: {
    normal: Rated<number>;
    counter: Rated<number>;
    punishCounter: Rated<number>;
  } | null;

  blockstun: Rated<number> | null;

  cancelWindow: Rated<FrameRange> | null;
  cancelRushWindow: Rated<FrameRange> | null;

  derivesFrom: string | null; // 派生元のid(子側)
  derivesInto: DerivesInto[]; // 派生先の一覧(親側)

  notes: string[]; // 構造化してない属性(無敵時間・強制ジャグル等)の自由記述
}

export interface CharacterMoveDb {
  character: string;
  moves: Move[];
}
