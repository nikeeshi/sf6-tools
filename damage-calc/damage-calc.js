/**
 * SF6 汎用コンボダメージ計算エンジン。
 *
 * 技データ(ダメージ・補正値)は呼び出し側が用意する。このファイルはキャラクター名や
 * 個別の技名を一切知らない、計算ロジックのみのライブラリ。
 *
 * @typedef {Object} Multipliers
 * @property {boolean} [driveRush]   持続: 発生技以降ずっと ×85%
 * @property {boolean} [modern]      単発: その技のみ ×80%
 * @property {boolean} [justParry]   持続: 発生技(コンボ始動)以降ずっと ×50%
 * @property {boolean} [wallSplat]   持続: 発生技以降ずっと ×80%
 * @property {number}  [sake]        ジェイミー専用。呼び出し側で計算済みの乗算値(%)をそのまま渡す
 * @property {boolean} [kimberlySA3] 持続: 発生技以降ずっと ×111%
 *
 * 持続系(driveRush / justParry / kimberlySA3)は自動伝播しない。効果が続く技すべての
 * MoveInput に、呼び出し側でフラグを立てて渡すこと。
 *
 * @typedef {Object} MoveInput コンボ中の1技分の入力データ
 * @property {string} name              技名(表示用。計算には使わない)
 * @property {number} baseDamage        素のダメージ。カウンターヒット/パニッシュカウンターは
 *   基本的に通常時の×1.2だが技によって例外があるため、呼び出し側でその技専用の値を計算して渡す
 *   (Multipliersの乗算補正には含めない)
 * @property {number} [starterScaling]  始動補正。この技がコンボ1段目のときのみ、次の技へ渡す減衰値
 * @property {number} [comboScaling]    コンボ補正。この技が2段目以降のときのみ、次の技へ渡す減衰値
 * @property {number} [immediateScaling] 即時補正。この技自身の補正に即座にかかる追加減衰値
 * @property {number} [minGuarantee]    最低保証。この技の最終補正(%)がこれを下回らない下限
 * @property {Multipliers} [multipliers] この技にかかる乗算補正のフラグ・値
 *
 * @typedef {Object} StepResult コンボ中の1技分の計算結果
 * @property {string} name          入力と同じ技名
 * @property {number} baseDamage    入力と同じ素のダメージ
 * @property {number} scalingBase   乗算前の素の補正(%)
 * @property {number} multiplierPct 適用された乗算補正の合計(%)。無指定なら100
 * @property {number} finalScaling  最低保証・乗算後の最終補正(%)。小数点以下切り捨て
 * @property {number} damage        この技の補正後ダメージ。小数点以下切り捨て
 * @property {number} totalDamage   この技までの累計ダメージ
 *
 * @typedef {Object} ComboResult コンボ全体の計算結果
 * @property {StepResult[]} steps 各技の計算結果を、入力順に並べたもの
 * @property {number} totalDamage コンボ全体の合計ダメージ(steps最後のtotalDamageと同じ)
 */

/**
 * 1技分の乗算補正をすべて掛け合わせ、合計の乗算値(%)を求める。
 *
 * @param {Multipliers} [multipliers] その技にかかる乗算補正のフラグ・値。未指定なら補正なし扱い
 * @returns {number} 乗算補正の合計(%)。無指定なら100
 */
function multiplierPercent(multipliers) {
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
 * @param {MoveInput[]} moves コンボを構成する技の配列。入力順=ヒット順
 * @returns {ComboResult} 各技の計算結果と、コンボ全体の合計ダメージ
 */
function calculateCombo(moves) {
  /** @type {StepResult[]} */
  const steps = [];
  let scalingBase = 100;
  let totalDamage = 0;

  moves.forEach((move, i) => {
    if (i > 0) {
      const prev = moves[i - 1];
      const reduction = i - 1 === 0 ? (prev.starterScaling ?? 0) : (prev.comboScaling ?? 0);
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

export { calculateCombo, multiplierPercent };
