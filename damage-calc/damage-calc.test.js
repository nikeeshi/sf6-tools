import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateCombo } from './damage-calc.js';

// スプレッドシートのサンプルコンボ(強P強PTC(PC) > CR屈強P > 中スピン前半 > 強化ハーベスト > 中ライノ > SA3)
// の実測値と一致することを確認する回帰テスト。
test('スプレッドシートのサンプルコンボと一致する', () => {
  const moves = [
    { name: '強P強PTC(PC)', baseDamage: 1760, starterScaling: 20, comboScaling: 10 },
    { name: 'CR屈強P', baseDamage: 800, comboScaling: 10, multipliers: { driveRush: true } },
    { name: '中スピン前半', baseDamage: 600, comboScaling: 10, multipliers: { driveRush: true } },
    { name: '強化ハーベスト', baseDamage: 1300, comboScaling: 10, multipliers: { driveRush: true } },
    { name: '中ライノ', baseDamage: 1200, comboScaling: 20, multipliers: { driveRush: true } },
    {
      name: 'SA3',
      baseDamage: 4000,
      comboScaling: 10,
      immediateScaling: 10,
      minGuarantee: 50,
      multipliers: { driveRush: true },
    },
  ];

  const result = calculateCombo(moves);

  const expected = [
    { scalingBase: 100, finalScaling: 100, damage: 1760, totalDamage: 1760 },
    { scalingBase: 80, finalScaling: 68, damage: 544, totalDamage: 2304 },
    { scalingBase: 70, finalScaling: 59, damage: 354, totalDamage: 2658 },
    { scalingBase: 60, finalScaling: 51, damage: 663, totalDamage: 3321 },
    { scalingBase: 50, finalScaling: 42, damage: 504, totalDamage: 3825 },
    { scalingBase: 20, finalScaling: 50, damage: 2000, totalDamage: 5825 },
  ];

  assert.equal(result.steps.length, expected.length);
  result.steps.forEach((step, i) => {
    assert.equal(step.scalingBase, expected[i].scalingBase, `steps[${i}].scalingBase`);
    assert.equal(step.finalScaling, expected[i].finalScaling, `steps[${i}].finalScaling`);
    assert.equal(step.damage, expected[i].damage, `steps[${i}].damage`);
    assert.equal(step.totalDamage, expected[i].totalDamage, `steps[${i}].totalDamage`);
  });
  assert.equal(result.totalDamage, 5825);
});

test('最低保証は乗算補正後の値がそれを下回るときだけ底上げする', () => {
  const moves = [
    { name: 'starter', baseDamage: 1000 },
    { name: 'guaranteed', baseDamage: 1000, minGuarantee: 30, multipliers: { modern: true } },
  ];
  const result = calculateCombo(moves);
  // scalingBase=100, ×80%(modern)=80 は minGuarantee(30)を上回るのでそのまま
  assert.equal(result.steps[1].finalScaling, 80);
});

test('単発の乗算補正は次の技には引き継がれない', () => {
  const moves = [
    { name: 'a', baseDamage: 1000, comboScaling: 0 },
    { name: 'b(modern)', baseDamage: 1000, multipliers: { modern: true } },
    { name: 'c', baseDamage: 1000 },
  ];
  const result = calculateCombo(moves);
  assert.equal(result.steps[1].multiplierPct, 80);
  assert.equal(result.steps[2].multiplierPct, 100);
});

test('持続系の乗算補正は呼び出し側がフラグを立て続けた技にだけかかる', () => {
  const moves = [
    { name: 'a', baseDamage: 1000, comboScaling: 0, multipliers: { driveRush: true } },
    { name: 'b', baseDamage: 1000, comboScaling: 0, multipliers: { driveRush: true } },
    { name: 'c(フラグ切れ)', baseDamage: 1000 },
  ];
  const result = calculateCombo(moves);
  assert.equal(result.steps[0].multiplierPct, 85);
  assert.equal(result.steps[1].multiplierPct, 85);
  assert.equal(result.steps[2].multiplierPct, 100);
});

// 実測コンボによる検証。素のダメージは ultimateframedata.com の実測フレームデータ(独立ソース)から:
//   st.MK 540 / cr.HP 720 / cr.MP 500 / st.MP 540
// 移動技(236LK>LP, 236MK。攻撃判定なし)はダメージ/補正の実測値が存在しないため対象から除外。
// 1段目のMKはカウンターヒットで着弾しているとのことで、基礎ダメージ自体が×1.2になる
// (Multipliersの乗算補正ではなくbaseDamage側で反映。540×1.2=648)。
// 6段目のHPは「MP>HP」というターゲットコンボ固有の技で、単発のst.HP(630)とは別物のため、
// 独立ソースが無く実測コンボの値から逆算(358)。7段目のMKは236MKからのスライディング派生で
// 同様に独立ソースが無いため逆算(720。720*0.29=208.8→切り捨てで208と一致する範囲{718,719,720}のうち採用)。
test('キンバリー実測コンボ: MK(CH)>CR>2HP 236LK>LP 2MP 2MP MP>HP 236MK>MK', () => {
  const moves = [
    { name: 'MK(カウンターヒット, 540×1.2)', baseDamage: 648, starterScaling: 15 },
    { name: '2HP', baseDamage: 720, comboScaling: 10, multipliers: { driveRush: true } },
    { name: '2MP', baseDamage: 500, comboScaling: 10, multipliers: { driveRush: true } },
    { name: '2MP', baseDamage: 500, comboScaling: 10, multipliers: { driveRush: true } },
    { name: 'MP', baseDamage: 540, comboScaling: 10, multipliers: { driveRush: true } },
    { name: 'HP(MP>HPのターゲットコンボ固有値)', baseDamage: 358, comboScaling: 10, multipliers: { driveRush: true } },
    { name: 'MK(はやがけスライディング派生)', baseDamage: 720, multipliers: { driveRush: true } },
  ];

  const result = calculateCombo(moves);
  const expectedFinalScaling = [100, 72, 63, 55, 46, 38, 29];
  const expectedDamage = [648, 518, 315, 275, 248, 136, 208];

  result.steps.forEach((step, i) => {
    assert.equal(step.finalScaling, expectedFinalScaling[i], `steps[${i}].finalScaling`);
    assert.equal(step.damage, expectedDamage[i], `steps[${i}].damage`);
  });
  assert.equal(result.totalDamage, 2348);
});

// ジェイミー(酔い0)。素のダメージは ultimateframedata.com の実測フレームデータ(独立ソース)から。
// 同サイトの表示値は酔い0の実効値なので、素の値は 表示値÷0.9 で算出:
//   cr.LK 180→200 / st.LK 270→300 / cr.LP 225→250 / cr.HP 810→900
//   623HK(3ヒット, DP版強K) 450,360,450 → 500,400,500
// 酔いレベル0~4で乗算補正90%~110%が線形に入る、かつコンボ中ずっと酔い0なので
// sake:90 を持続系(全技)としてかける。623HKは多段技の内部構造が未対応のため、
// 3ヒット分の素のダメージ合計(500+400+500=1400)を単一の技として扱う。
// なお「37%」で貰ったメモは、素のダメージを実データに置き換えて逆算すると38%でないと
// 3ヒットとも綺麗に割り切れない(190,152,190と exact 一致)ため、38%の書き間違いとして扱っている。要確認。
test('ジェイミー実測コンボ: 酔い0 2LK>LK>CR>2LP 2HP>623HK', () => {
  const moves = [
    { name: '2LK', baseDamage: 200, starterScaling: 20, multipliers: { sake: 90 } },
    { name: 'LK', baseDamage: 300, comboScaling: 10, multipliers: { sake: 90 } },
    { name: '2LP', baseDamage: 250, comboScaling: 10, multipliers: { sake: 90, driveRush: true } },
    { name: '2HP', baseDamage: 900, comboScaling: 10, multipliers: { sake: 90, driveRush: true } },
    { name: '623HK(3ヒット合算)', baseDamage: 1400, multipliers: { sake: 90, driveRush: true } },
  ];

  const result = calculateCombo(moves);
  const expectedFinalScaling = [90, 72, 53, 45, 38];
  const expectedDamage = [180, 216, 132, 405, 532];

  result.steps.forEach((step, i) => {
    assert.equal(step.finalScaling, expectedFinalScaling[i], `steps[${i}].finalScaling`);
    assert.equal(step.damage, expectedDamage[i], `steps[${i}].damage`);
  });
  assert.equal(result.totalDamage, 1465);
});

// 端数処理の回帰テスト: 実データ突き合わせで発覚した「四捨五入ではなく切り捨て」を固定する。
// baseDamage=250, finalScaling=53% → 132.5 のちょうど境界値で、四捨五入なら133になってしまうが
// 実測は132だったため Math.floor が正しい。
test('補正後ダメージの端数は切り捨て(四捨五入ではない)', () => {
  // scalingBase=100, justParry(50%)→floor(50)=50 だが、minGuaranteeで53%まで底上げして境界値を作る。
  const result = calculateCombo([{ name: 'x', baseDamage: 250, minGuarantee: 53, multipliers: { justParry: true } }]);
  assert.equal(result.steps[0].finalScaling, 53);
  assert.equal(result.steps[0].damage, 132);
});
