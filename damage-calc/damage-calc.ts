/**
 * SF6 汎用コンボダメージ計算エンジン。
 *
 * 技データ(ダメージ・補正値)は呼び出し側が用意する。このファイルはキャラクター名や
 * 個別の技名を一切知らない、計算ロジックのみのライブラリ。
 */

/**
 * 1技にかかる乗算補正のフラグ・値。
 *
 * 持続系(driveRush / justParry / kimberlySA3)は自動伝播しない。効果が続く技すべての
 * MoveInput に、呼び出し側でフラグを立てて渡すこと。
 */
export interface Multipliers {
  /** 持続: 発生技以降ずっと ×85% */
  driveRush?: boolean;
  /** 単発: その技のみ ×80% */
  modern?: boolean;
  /** 持続: 発生技(コンボ始動)以降ずっと ×50% */
  justParry?: boolean;
  /** 持続: 発生技以降ずっと ×80%。ガードで壁に張り付いた場合のみで、ヒットで張り付いたときはかからない */
  wallSplat?: boolean;
  /** ジェイミー専用。呼び出し側で計算済みの乗算値(%)をそのまま渡す */
  sake?: number;
  /** 持続: 発生技以降ずっと ×111% */
  kimberlySA3?: boolean;
}

/** コンボ中の1技分の入力データ */
export interface MoveInput {
  /** 技名(表示用。計算には使わない) */
  name: string;
  /**
   * 素のダメージ。カウンターヒット/パニッシュカウンターは基本的に通常時の×1.2だが
   * 技によって例外があるため、呼び出し側でその技専用の値を計算して渡す
   * (Multipliersの乗算補正には含めない)
   */
  baseDamage: number;
  /** 始動補正。この技がコンボ1段目のときのみ、次の技へ渡す減衰値 */
  starterScaling?: number;
  /** コンボ補正。この技が2段目以降のときのみ、次の技へ渡す減衰値 */
  comboScaling?: number;
  /** 即時補正。この技自身の補正に即座にかかる追加減衰値 */
  immediateScaling?: number;
  /** 最低保証。この技の最終補正(%)がこれを下回らない下限 */
  minGuarantee?: number;
  /** この技にかかる乗算補正のフラグ・値 */
  multipliers?: Multipliers;
}

/** コンボ中の1技分の計算結果 */
export interface StepResult {
  /** 入力と同じ技名 */
  name: string;
  /** 入力と同じ素のダメージ */
  baseDamage: number;
  /** 乗算前の素の補正(%) */
  scalingBase: number;
  /** 適用された乗算補正の合計(%)。無指定なら100 */
  multiplierPct: number;
  /** 最低保証・乗算後の最終補正(%)。小数点以下切り捨て */
  finalScaling: number;
  /** この技の補正後ダメージ。小数点以下切り捨て */
  damage: number;
  /** この技までの累計ダメージ */
  totalDamage: number;
}

/** コンボ全体の計算結果 */
export interface ComboResult {
  /** 各技の計算結果を、入力順に並べたもの */
  steps: StepResult[];
  /** コンボ全体の合計ダメージ(steps最後のtotalDamageと同じ) */
  totalDamage: number;
}

/**
 * 1技分の乗算補正をすべて掛け合わせ、合計の乗算値(%)を求める。
 *
 * @param multipliers その技にかかる乗算補正のフラグ・値。未指定なら補正なし扱い
 * @returns 乗算補正の合計(%)。無指定なら100
 */
export function multiplierPercent(multipliers?: Multipliers): number {
  if (!multipliers) return 100;
  let pct = 100;
  if (multipliers.driveRush) pct *= 0.85;
  if (multipliers.modern) pct *= 0.8;
  if (multipliers.justParry) pct *= 0.5;
  if (multipliers.wallSplat) pct *= 0.8;
  if (multipliers.sake != null) pct *= multipliers.sake / 100;
  if (multipliers.kimberlySA3) pct *= 1.11;
  return pct;
}

/**
 * コンボ全体の補正・ダメージを、技を1段ずつ順番に処理して計算する。
 * 2段目以降は直前の技の始動補正/コンボ補正・自技の即時補正で素の補正を減衰させ、
 * 乗算補正と最低保証を適用してから、最終ダメージと累計ダメージを求める。
 *
 * @param moves コンボを構成する技の配列。入力順=ヒット順
 * @returns 各技の計算結果と、コンボ全体の合計ダメージ
 */
export function calculateCombo(moves: MoveInput[]): ComboResult {
  const steps: StepResult[] = [];
  let scalingBase = 100;
  let totalDamage = 0;

  moves.forEach((move, i) => {
    if (i > 0) {
      const prev = moves[i - 1];
      const reduction =
        i - 1 === 0 ? (prev.starterScaling ?? 0) : (prev.comboScaling ?? 0);
      scalingBase -= reduction;
    }
    scalingBase -= move.immediateScaling ?? 0;

    const multiplierPct = multiplierPercent(move.multipliers);
    let finalScaling = Math.floor(scalingBase * (multiplierPct / 100));
    if (move.minGuarantee != null) {
      finalScaling = Math.max(finalScaling, move.minGuarantee);
    }

    const damage = Math.floor(move.baseDamage * (finalScaling / 100));
    totalDamage += damage;

    steps.push({
      name: move.name,
      baseDamage: move.baseDamage,
      scalingBase,
      multiplierPct,
      finalScaling,
      damage,
      totalDamage,
    });
  });

  return { steps, totalDamage };
}
