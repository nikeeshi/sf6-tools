export type AttackProperty =
  "上" | "中" | "下" | "投" | "弾" | "空弾" | "アーマーブレイク";
export type HitOutcome = "hit" | "whiff" | "block";
export type HitStrength = "normal" | "counter" | "punishCounter";
export type InvincibleProperty = "対空" | "打撃" | "投" | "弾";

export interface FrameRange {
  from: number;
  to: number; // inclusive
}

// 1つの攻撃判定。発生+持続をまとめて範囲で表現。多段技はこれが複数並ぶ想定
export interface Hit {
  range: FrameRange;
  baseDamage: number;
  properties: AttackProperty[]; // 「上・弾」のように複数付くことがある。
}

export interface DerivesInto {
  input: string; // 派生に必要な入力
  window?: FrameRange; // 派生可能なタイミング
  moveId: string;
}
export interface Scaling {
  starterScaling: number; // 始動補正
  comboScaling: number; // コンボ補正
  immediateScaling: number; // 即時補正
  minGuarantee: number; // 最低保証
  SA3CancelImmediateScaling: number; // 必殺技キャンセル時のみ即時補正
}
export interface Move {
  id: string; // "キャラ.技slug" の一意キー
  name: string;
  category: string; // 通常技/特殊技/必殺技/SA/共通システム
  notation: string; // 入力表記。派生技の入力は最も一般的な派生元のnotationに加えて派生入力を付与したもの。
  condition: string | null; // nullは常時使用可能な技。空中: 空中で使用可能な技。その他は派生元と条件を書く。
  derivesFrom?: string | null; // 派生元のid(子側)

  hitCount?: number;
  totalDamage?: number;
  startUp?: number;
  active?: number;
  recoveryTotal: number; // 全体フレーム
  advantageOnBlock: number;
  advantageOnHit: number;
  overAllProperties: AttackProperty; // フレーム表記載の属性。

  hits: Hit[]; // 単発技も要素数1として持つ。ダメージが出ない技は空配列
  scaling?: Scaling; // 攻撃がない技は書かない。一つの技に複数の補正がある場合がでてきたらスキーマを修正する。

  // 技自体の硬直。hit/whiff/blockで変わる技だけ埋める
  recovery: {
    hit: number;
    block: number;
    whiff: number;
  } | null;

  // 相手の地上ヒット時の硬直。
  hitstun:
    | {
        normal: number;
        counter?: number;
        punishCounter?: number;
      }
    | "D"
    | null;

  blockstun: number | null;
  cancelableBy?: string | null; // SP/SA/SA2/SA3
  cancelWindow?: FrameRange | null;
  cancelRushWindow?: FrameRange | null; // cancelWindowと違う場合non-null

  derivesInto: DerivesInto[]; // 派生先の一覧(親側)

  invincibleFrames:
    (FrameRange & { properties: InvincibleProperty[] })[] | null; // 無敵
  airborneFrames: FrameRange[] | null; // 空中
  superArmorFrames: (FrameRange & { counts: number })[] | null; // アーマー
  absorbFrames: (FrameRange & { properties: InvincibleProperty[] })[] | null; // 当て身
  notes: string[]; // 構造化していない情報(無敵時間・強制ジャグル等)の自由記述
}

export interface CharacterMoveDb {
  character: string;
  moves: Move[];
}
