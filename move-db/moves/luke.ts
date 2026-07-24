import type { CharacterMoveDb } from "../schema.ts";

// このファイルは tools/tsv-to-ts.ts で raw-frame-tsv/luke.tsv から機械生成した
// 一次データ。TODO を手作業パスで潰していく。

export const luke = {
  character: "ルーク",
  moves: [
    {
      id: "luke.5LP",
      name: "立ち弱P（ファーストスティンガー）",
      category: "通常技",
      notation: "5弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 7,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 11 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [{ input: "中P", moveId: "luke.5LP>MP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["※空振り時硬直3F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.5LK",
      name: "立ち弱K（レッグハント）",
      category: "通常技",
      notation: "5弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 5,
      active: 2,
      advantageOnBlock: -2,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 12 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "luke.5MP",
      name: "立ち中P（トリガーフィスト）",
      category: "通常技",
      notation: "5中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 9,
      active: 4,
      advantageOnBlock: -3,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA",
      derivesInto: [{ input: "中P", moveId: "luke.5MP>MP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: [],
    },
    {
      id: "luke.5MK",
      name: "立ち中K（アンブッシュスピア）",
      category: "通常技",
      notation: "5中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 8,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -6000,
        sAGain: 700,
      },
      notes: ["※空振り時硬直3F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.5HP",
      name: "立ち強P（クラッシャー）",
      category: "通常技",
      notation: "5強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 10,
      active: 3,
      advantageOnBlock: -5,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 23 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["※ガード時硬直1F減少"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.5HK",
      name: "立ち強K（キャノンボール）",
      category: "通常技",
      notation: "5強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 10,
      active: 7,
      advantageOnBlock: -5,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 4000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -10000,
        sAGain: 1000,
      },
      notes: [
        "空中ヒット時吹き飛びダウン",
        "パニッシュカウンター時吹き飛びダウン",
        "8-15F足元無敵",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.2LP",
      name: "しゃがみ弱P（ファストジャブ）",
      category: "通常技",
      notation: "2弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 4,
      active: 2,
      advantageOnBlock: -2,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 10 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["連打キャンセル対応"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.2LK",
      name: "しゃがみ弱K（アンクルスナイプ）",
      category: "通常技",
      notation: "2弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 200,
      startUp: 5,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: 0,
      overAllProperties: ["下"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 11 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["連打キャンセル対応"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.2MP",
      name: "しゃがみ中P（スラッグショット）",
      category: "通常技",
      notation: "2中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 6,
      active: 2,
      advantageOnBlock: 1,
      advantageOnHit: 5,
      overAllProperties: ["上"],
      scaling: { starterScaling: 15 },
      recovery: { hit: 14 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: ["※空振り時硬直3F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.2MK",
      name: "しゃがみ中K（カーフスカッシュ）",
      category: "通常技",
      notation: "2中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 8,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: -2,
      overAllProperties: ["下"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 19 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [{ input: "2HP", moveId: "luke.2MK>2HP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2000,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.2HP",
      name: "しゃがみ強P（アンチエアランチャー）",
      category: "通常技",
      notation: "2強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 7,
      active: 5,
      advantageOnBlock: -13,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      scaling: { comboScaling: 15 },
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["強制立ち効果", "キャンセルは持続の1F目まで"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.2HK",
      name: "しゃがみ強K（トレンチブレイク）",
      category: "通常技",
      notation: "2強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 10,
      active: 3,
      advantageOnBlock: -9,
      advantageOnHit: "D",
      overAllProperties: ["下"],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -10000,
        sAGain: 1000,
      },
      notes: ["パニッシュカウンター時ダウン時間増加、ハードノックダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.jLP",
      name: "ジャンプ弱P（ワンバレット）",
      category: "通常技",
      notation: "j.弱P",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 5,
      active: 9,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "luke.jLK",
      name: "ジャンプ弱K（デルタニー）",
      category: "通常技",
      notation: "j.弱K",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 6,
      active: 6,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["めくり性能"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.jMP",
      name: "ジャンプ中P（エア・インターセプター）",
      category: "通常技",
      notation: "j.中P",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 9,
      active: 4,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: ["空中ヒット時吹き飛びダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.jMK",
      name: "ジャンプ中K（バーチカルテイル）",
      category: "通常技",
      notation: "j.中K",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 7,
      active: 6,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: ["めくり性能"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.jHP",
      name: "ジャンプ強P（ガンメタルハンマー）",
      category: "通常技",
      notation: "j.強P",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 9,
      active: 6,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: ["空中カウンター/パニッシュカウンター時叩きつけダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.jHK",
      name: "ジャンプ強K（ヘブンリーストライク）",
      category: "通常技",
      notation: "j.強K",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 10,
      active: 6,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: [],
    },
    {
      id: "luke.6MP",
      name: "ローハイド",
      category: "特殊技",
      notation: "6中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 21,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: 2,
      overAllProperties: ["中"],
      recovery: { hit: 21 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 500,
      },
      notes: ["空中ヒット時叩きつけダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.4HP",
      name: "サプレッサー",
      category: "特殊技",
      notation: "4強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 16,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -10000,
        sAGain: 1000,
      },
      notes: [],
    },
    {
      id: "luke.4HK",
      name: "アウトローキック",
      category: "特殊技",
      notation: "4強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 12,
      active: 4,
      advantageOnBlock: -3,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -10000,
        sAGain: 1000,
      },
      notes: ["パニッシュカウンター時+17F", "空中ヒット時吹き飛びダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.6HP",
      name: "ダブルインパクト（1段目）",
      category: "特殊技",
      notation: "6強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 16,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      recovery: { hit: 15 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [{ input: "強P", moveId: "luke.6HP>HP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -7000,
        sAGain: 500,
      },
      notes: ["※空振り時硬直4F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.6HP>HP",
      name: "ダブルインパクト（2段目）",
      category: "特殊技",
      notation: "6強P⇒強P",
      condition: null,
      derivesFrom: "luke.6HP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 11,
      active: 2,
      advantageOnBlock: -19,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { comboScaling: 20 },
      recovery: { hit: 34 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2000,
        dReductionOnPunishCounter: -7000,
        sAGain: 500,
      },
      notes: [
        "ダブルインパクト（1段目）がパニッシュカウンター時に派生し、地上ヒットした場合は地上やられ(コンボ補正が20%⇒10%に変化)",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.5LP>MP",
      name: "トリプルインパクト（2段目）",
      category: "特殊技",
      notation: "5弱P⇒中P",
      condition: null,
      derivesFrom: "luke.5LP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 8,
      active: 4,
      advantageOnBlock: -9,
      advantageOnHit: -2,
      overAllProperties: ["上"],
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [{ input: "強P", moveId: "luke.5LP>MP>HP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -4000,
        sAGain: 400,
      },
      notes: [],
    },
    {
      id: "luke.5LP>MP>HP",
      name: "トリプルインパクト（3段目）",
      category: "特殊技",
      notation: "5弱P⇒中P⇒強P",
      condition: null,
      derivesFrom: "luke.5LP>MP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 10,
      active: 3,
      advantageOnBlock: -14,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 27 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -4000,
        sAGain: 400,
      },
      notes: [],
    },
    {
      id: "luke.5MP>MP",
      name: "スナップバックコンボ（2段目）",
      category: "特殊技",
      notation: "5中P⇒中P",
      condition: null,
      derivesFrom: "luke.5MP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 12,
      active: 2,
      advantageOnBlock: -8,
      advantageOnHit: 0,
      overAllProperties: ["上"],
      recovery: { hit: 23 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA",
      derivesInto: [{ input: "中P", moveId: "luke.5MP>MP>MP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 400,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -4000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "luke.2MK>2HP",
      name: "ノーズブレイカー",
      category: "特殊技",
      notation: "2中K⇒2強P",
      condition: null,
      derivesFrom: "luke.2MK",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 9,
      active: 3,
      advantageOnBlock: -8,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.5MP>MP>MP",
      name: "スナップバックコンボ（3段目）",
      category: "特殊技",
      notation: "5中P⇒中P⇒中P",
      condition: null,
      derivesFrom: "luke.5MP>MP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 11,
      active: 2,
      advantageOnBlock: -14,
      advantageOnHit: -6,
      overAllProperties: ["上"],
      recovery: { hit: 29 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [{ input: "中P", moveId: "luke.5MP>MP>MP>MP" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -4000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "luke.5MP>MP>MP>MP",
      name: "スナップバックコンボ（4段目）",
      category: "特殊技",
      notation: "5中P⇒中P⇒中P⇒中P",
      condition: null,
      derivesFrom: "luke.5MP>MP>MP",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 11,
      active: 2,
      advantageOnBlock: -12,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 27 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: [],
    },
    {
      id: "luke.LSandBlast",
      name: "弱 サンドブラスト",
      category: "必殺技",
      notation: "236弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 14,
      active: 5,
      totalFrame: 47,
      advantageOnBlock: -8,
      advantageOnHit: -3,
      overAllProperties: ["上", "弾"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -2000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.MSandBlast",
      name: "中 サンドブラスト",
      category: "必殺技",
      notation: "236中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 17,
      active: 7,
      totalFrame: 47,
      advantageOnBlock: -5,
      advantageOnHit: 0,
      overAllProperties: ["上", "弾"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -2000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.HSandBlast",
      name: "強 サンドブラスト",
      category: "必殺技",
      notation: "236強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 20,
      active: 10,
      totalFrame: 47,
      advantageOnBlock: -2,
      advantageOnHit: 3,
      overAllProperties: ["上", "弾"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -2000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.ODSandBlast",
      name: "OD サンドブラスト",
      category: "必殺技",
      notation: "236PP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 16,
      totalFrame: 40,
      advantageOnBlock: -2,
      advantageOnHit: "D",
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [{ input: "PP", moveId: "luke.fatalShot" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "luke.fatalShot",
      name: "フェイタルショット",
      category: "必殺技",
      notation: "PP",
      condition: "ODサンドブラスト後に",
      derivesFrom: "luke.ODSandBlast",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 8,
      totalFrame: 50,
      advantageOnBlock: -21,
      advantageOnHit: "D",
      overAllProperties: ["上", "弾"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -7000,
        sAGain: 1000,
      },
      notes: ["発動時にドライブゲージを10000消費"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.LFlashKnuckle",
      name: "弱 フラッシュナックル",
      category: "必殺技",
      notation: "214弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 13,
      active: 3,
      advantageOnBlock: -12,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 27 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 500,
      },
      notes: [
        "18F以上ボタンホールドすると性能変化",
        "18-20Fの間に離すとジャスト版が発生",
        "ヒット時のみ、40F目に必殺技、SAキャンセル可能",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.LFlashKnuckleCharged",
      name: "弱 フラッシュナックル（ホールド）",
      category: "必殺技",
      notation: "214弱Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 26,
      active: 4,
      advantageOnBlock: -8,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2250,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -6000,
        sAGain: 600,
      },
      notes: ["飛び道具相殺判定あり（1回）", "2段目にコンボ補正がかかる"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.LFlashKnucklePerfect",
      name: "弱 フラッシュナックル（ジャスト）",
      category: "必殺技",
      notation: "214弱Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 26,
      active: 4,
      advantageOnBlock: -8,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2250,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -6000,
        sAGain: 700,
      },
      notes: ["飛び道具相殺判定あり（1回）", "2段目にコンボ補正がかかる"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.MFlashKnuckle",
      name: "中 フラッシュナックル",
      category: "必殺技",
      notation: "214中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 19,
      active: 3,
      advantageOnBlock: -8,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      recovery: { hit: 27 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -7000,
        sAGain: 700,
      },
      notes: [
        "18F以上ボタンホールドすると性能変化",
        "18-20Fの間に離すとジャスト版が発生",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.MFlashKnuckleCharged",
      name: "中 フラッシュナックル（ホールド）",
      category: "必殺技",
      notation: "214中Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 29,
      active: 4,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 800,
      },
      notes: ["飛び道具相殺判定あり（1回）", "2段目にコンボ補正がかかる"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.MFlashKnucklePerfect",
      name: "中 フラッシュナックル（ジャスト）",
      category: "必殺技",
      notation: "214中Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1100,
      startUp: 29,
      active: 4,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 900,
      },
      notes: ["飛び道具相殺判定あり（1回）"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.HFlashKnuckle",
      name: "強 フラッシュナックル",
      category: "必殺技",
      notation: "214強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 22,
      active: 3,
      advantageOnBlock: -4,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 21 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2500,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 800,
      },
      notes: [
        "18F以上ボタンホールドすると性能変化",
        "18-20Fの間に離すとジャスト版が発生",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.HFlashKnuckleCharged",
      name: "強 フラッシュナックル（ホールド）",
      category: "必殺技",
      notation: "214強Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1300,
      startUp: 33,
      active: 4,
      advantageOnBlock: 4,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -7000,
        dReductionOnPunishCounter: -9000,
        sAGain: 1100,
      },
      notes: ["飛び道具相殺判定あり（1回）"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.HFlashKnucklePerfect",
      name: "強 フラッシュナックル（ジャスト）",
      category: "必殺技",
      notation: "214強Pホールド",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1600,
      startUp: 33,
      active: 4,
      advantageOnBlock: 4,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -7000,
        dReductionOnPunishCounter: -9000,
        sAGain: 1200,
      },
      notes: ["飛び道具相殺判定あり（1回）"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.ODFlashKnuckle",
      name: "OD フラッシュナックル",
      category: "必殺技",
      notation: "214PP",
      condition: null,
      hitCount: 2, // 補正が進まないため1技として扱う(旧ODFlashKnuckle2を統合)
      totalDamage: 800, // 2ヒット合計(400+400)
      startUp: 15,
      active: 1,
      advantageOnBlock: -22,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 39 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [{ input: "PP", moveId: "luke.DDT" }],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -4000, // 2段目はヒット時のみなのでガードは1段目分
        dReductionOnPunishCounter: -6000, // 2ヒット分(-3000 x2)
        sAGain: 850, // 2ヒット合計(500+350)
      },
      notes: [
        "2ヒット技。補正が進まないため1技として扱う",
        "2段目はヒット時のみ発生: 発生33(持続33-36)/硬直16/ヒット硬直差D/ダメージ400",
        "初段ヒット時のみDDTへ派生可",
      ],
    },
    {
      id: "luke.DDT",
      name: "DDT",
      category: "必殺技",
      notation: "PP",
      condition: "ODフラッシュナックル後に",
      derivesFrom: "luke.ODFlashKnuckle",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 2500,
      startUp: 1,
      active: 1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 3000,
      },
      notes: ["発動時にドライブゲージを10000消費"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.aerialFlashKnuckle",
      name: "エアフラッシュナックル",
      category: "必殺技",
      notation: "j.214P",
      condition: "垂直 or 前ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 14,
      active: 5,
      landingRecovery: 13,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 800,
      },
      notes: ["※高空で空振り時硬直7F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.aerialFlashKnuckleCharged",
      name: "エアフラッシュナックル（ホールド）",
      category: "必殺技",
      notation: "j.214Pホールド",
      condition: "垂直 or 前ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 23,
      active: 6,
      landingRecovery: 15,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -7000,
        dReductionOnPunishCounter: -9000,
        sAGain: 800,
      },
      notes: [],
    },
    {
      id: "luke.ODAerialFlashKnuckle",
      name: "OD エアフラッシュナックル",
      category: "必殺技",
      notation: "j.214PP",
      condition: "垂直 or 前ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1300,
      startUp: 14,
      active: 6,
      landingRecovery: 15,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7000,
        dReductionOnPunishCounter: -5000,
        sAGain: 800,
      },
      notes: [],
    },
    {
      id: "luke.avenger",
      name: "アベンジャー",
      category: "必殺技",
      notation: "236K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 45,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [
        { input: "P", window: { from: 13, to: 31 }, moveId: "luke.noChaser" },
        { input: "K", window: { from: 13, to: 31 }, moveId: "luke.impaler" },
      ],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: ["13-31F 専用技に派生可"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.ODAvenger",
      name: "OD アベンジャー",
      category: "必殺技",
      notation: "236KK",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 45,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [
        { input: "P", window: { from: 12, to: 31 }, moveId: "luke.ODNoChaser" },
        { input: "K", window: { from: 12, to: 31 }, moveId: "luke.ODImpaler" },
      ],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: [{ from: 3, to: 35, counts: 1 }],
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: ["3-35F アーマー判定（1回）", "12-31F 専用技に派生可"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.noChaser",
      name: "ノーチェイサー",
      category: "必殺技",
      notation: "P",
      condition: "アベンジャー中に",
      derivesFrom: "luke.avenger",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 12,
      active: 10,
      advantageOnBlock: -6,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: [],
    },
    {
      id: "luke.ODNoChaser",
      name: "OD ノーチェイサー",
      category: "必殺技",
      notation: "P",
      condition: "ODアベンジャー中に",
      derivesFrom: "luke.ODAvenger",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1300,
      startUp: 12,
      active: 10,
      advantageOnBlock: -6,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { starterScaling: 50 },
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1250,
      },
      notes: [],
    },
    {
      id: "luke.impaler",
      name: "インパラー",
      category: "必殺技",
      notation: "K",
      condition: "アベンジャー中に",
      derivesFrom: "luke.avenger",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 13,
      active: 1,
      advantageOnBlock: -8,
      advantageOnHit: "D",
      overAllProperties: ["中"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2200,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1200,
      },
      notes: ["空振り時硬直5F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.ODImpaler",
      name: "OD インパラー",
      category: "必殺技",
      notation: "K",
      condition: "ODアベンジャー中に",
      derivesFrom: "luke.ODAvenger",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 13,
      active: 1,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["中"],
      scaling: { starterScaling: 50 },
      recovery: { hit: 19 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1250,
      },
      notes: [],
    },
    {
      // TODO 保留: 硬直「22+着地後12」を機械変換できず(要手動分解)
      id: "luke.LRisingUppercut",
      name: "弱 ライジングアッパー",
      category: "必殺技",
      notation: "623弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 5,
      active: 10,
      advantageOnBlock: -27,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: [{ from: 1, to: 14, properties: ["対空"] }],
      airborneFrames: [{ from: 8, to: 36 }],
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 800,
      },
      notes: [
        "1-14F 空中判定の打撃・空弾属性に対して無敵",
        "8-36F 空中判定",
        "※持続の3F目以降は個別ダメージ（800）",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「24+着地後12」を機械変換できず(要手動分解)
      id: "luke.MRisingUppercut",
      name: "中 ライジングアッパー",
      category: "必殺技",
      notation: "623中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 6,
      active: 10,
      advantageOnBlock: -29,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: [{ from: 1, to: 8, properties: ["対空"] }],
      airborneFrames: [{ from: 9, to: 39 }],
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 800,
      },
      notes: [
        "1-8F 空中判定の打撃・空弾属性に対して無敵",
        "9-39F 空中判定",
        "※持続の3F目以降は個別ダメージ（800）",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「25+着地後15」を機械変換できず(要手動分解)
      id: "luke.HRisingUppercut",
      name: "強 ライジングアッパー",
      category: "必殺技",
      notation: "623強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 9,
      active: 10,
      advantageOnBlock: -33,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [],
      invincibleFrames: [{ from: 1, to: 9, properties: ["対空"] }],
      airborneFrames: [{ from: 11, to: 43 }],
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 800,
      },
      notes: [
        "1-9F 空中判定の打撃・空弾属性に対して無敵",
        "11-43F 空中判定",
        "※持続の2F目以降は個別ダメージ（800）",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「35+着地後15」を機械変換できず(要手動分解)
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "luke.ODRisingUppercut",
      name: "OD ライジングアッパー",
      category: "必殺技",
      notation: "623PP",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1400,
      startUp: 6,
      active: 10,
      advantageOnBlock: -40,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [{ input: "PP", moveId: "luke.slamDunk" }],
      invincibleFrames: [
        { from: 1, to: 10, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: [{ from: 8, to: 50 }],
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -2000,
        dReductionOnPunishCounter: 0,
        sAGain: 1000,
      },
      notes: [
        "1-10F 完全無敵",
        "8-50F 空中判定",
        "ヒット時のみスラムダンクへ派生可",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「14+着地後16」を機械変換できず(要手動分解)
      id: "luke.slamDunk",
      name: "スラムダンク",
      category: "必殺技",
      notation: "PP",
      condition: "ODライジングアッパー後に",
      derivesFrom: "luke.ODRisingUppercut",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 16,
      active: 3,
      advantageOnHit: "D",
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: 0,
        sAGain: 700,
      },
      notes: ["発動時にドライブゲージを10000消費"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.vulcanBlast",
      name: "SA1 バルカンブラスト",
      category: "SA",
      notation: "236236P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 2000,
      startUp: 6,
      totalFrame: 108,
      advantageOnBlock: -29,
      advantageOnHit: "D",
      overAllProperties: ["上", "弾"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [{ from: 1, to: 6, properties: ["打撃", "投"] }],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 0,
      },
      notes: [
        "1-6F 打撃・投げに対して無敵",
        "最低保障ダメージ30％",
        "カウンター/パニッシュカウンターで数値が変動しない",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.eraser",
      name: "SA2 イレイザー",
      category: "SA",
      notation: "214214P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 2800,
      startUp: 5,
      active: 3,
      advantageOnBlock: -29,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 51 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [
        { from: 1, to: 7, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -10000,
        sAGain: 0,
      },
      notes: [
        "1-7F 完全無敵",
        "ヒット時2段目以降に派生",
        "最低保障ダメージ40％",
        "カウンター/パニッシュカウンターで数値が変動しない",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.paleRider",
      name: "SA3 ペイルライダー",
      category: "SA",
      notation: "236236K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 4000,
      startUp: 10,
      active: 4,
      advantageOnBlock: -42,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { SA3CancelImmediateScaling: 10 },
      recovery: { hit: 92 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [
        { from: 1, to: 13, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7500,
        dReductionOnPunishCounter: -15000,
        sAGain: 0,
      },
      notes: [
        "相手との距離に応じて発生が変化",
        "密着発動時",
        "発生10F 1-13F完全無敵",
        "最遠距離発動時",
        "発生27F 1-13F完全無敵",
        "最低保障ダメージ50％",
        "カウンター/パニッシュカウンターで数値が変動しない",
        "※必殺技キャンセル時のみ適用",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.paleRiderCA",
      name: "CA ペイルライダー",
      category: "SA",
      notation: "236236K",
      condition: "体力25%以下で",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 4500,
      startUp: 10,
      active: 4,
      advantageOnBlock: -42,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { SA3CancelImmediateScaling: 10 },
      recovery: { hit: 92 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [
        { from: 1, to: 13, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -10000,
        dReductionOnPunishCounter: -20000,
        sAGain: 0,
      },
      notes: [
        "相手との距離に応じて発生が変化",
        "密着発動時",
        "発生10F 1-13F完全無敵",
        "最遠距離発動時",
        "発生27F 1-13F完全無敵",
        "最低保障ダメージ50％",
        "カウンター/パニッシュカウンターで数値が変動しない",
        "※必殺技キャンセル時のみ適用",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.sweeper",
      name: "スウィーパー",
      category: "通常投げ",
      notation: "5 or 6弱P弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 5,
      active: 3,
      advantageOnHit: "D",
      overAllProperties: ["投"],
      scaling: { immediateScaling: 20 },
      recovery: { hit: 23 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: -10000,
        sAGain: 2000,
      },
      notes: [
        "パニッシュカウンター時以下の性能変化",
        "・ダメージ2040",
        "・SAゲージ4000増加",
        "・ハードノックダウン",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.scrapper",
      name: "スクラッパー",
      category: "通常投げ",
      notation: "4弱P弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 5,
      active: 3,
      advantageOnHit: "D",
      overAllProperties: ["投"],
      scaling: { immediateScaling: 20 },
      recovery: { hit: 23 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: -10000,
        sAGain: 2000,
      },
      notes: [
        "パニッシュカウンター時以下の性能変化",
        "・ダメージ2040",
        "・SAゲージ4000増加",
        "・ハードノックダウン",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.forwardDash",
      name: "前方ステップ",
      category: "共通システム",
      notation: "66",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 19,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.backDash",
      name: "後方ステップ",
      category: "共通システム",
      notation: "44",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 23,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [{ from: 1, to: 15, properties: ["投"] }],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: ["1-15F 投げ無敵"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "luke.driveImpact",
      name: "ドライブインパクト（マズルフラッシュ）",
      category: "共通システム",
      notation: "DI",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 26,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 35 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: [{ from: 1, to: 27, counts: 2 }],
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -15000,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.driveReversalGuard",
      name: "[ガード時]ドライブリバーサル（バッターリングラム）",
      category: "共通システム",
      notation: "6DI",
      condition: "ガード中 or ドライブパリィ成立中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 20,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [
        { from: 1, to: 22, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.driveReversalWakeup",
      name: "[起き上がり時]ドライブリバーサル（バッターリングラム）",
      category: "共通システム",
      notation: "6DI",
      condition: "起き上がり時に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 18,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: [
        { from: 1, to: 20, properties: ["対空", "打撃", "投", "弾"] },
      ],
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.driveParry",
      name: "ドライブパリィ",
      category: "共通システム",
      notation: "DP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      startUp: 1,
      overAllProperties: null,
      recovery: { hit: 33 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "※1",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.perfectParryStrike",
      name: "ジャストパリィ（打撃）",
      category: "共通システム",
      notation: "1DPか4DP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      startUp: 1,
      overAllProperties: null,
      scaling: { starterScaling: 50 },
      recovery: { hit: 1 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {},
      notes: ["硬直終了から5F完全無敵（パリィ継続時は無敵化しない）"],
    },
    {
      id: "luke.perfectParryProjectile",
      name: "ジャストパリィ（飛び道具）",
      category: "共通システム",
      notation: "DP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      startUp: 1,
      overAllProperties: null,
      scaling: { starterScaling: 50 },
      recovery: { hit: 10 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {},
      notes: [],
    },
    {
      id: "luke.parryDriveRush",
      name: "パリィドライブラッシュ",
      category: "共通システム",
      notation: "RR",
      condition: "ドライブパリィ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 45,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "※",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "luke.cancelDriveRush",
      name: "キャンセルドライブラッシュ",
      category: "共通システム",
      notation: "CR",
      condition: "必殺技キャンセル可能な攻撃ヒット中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 46,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "※",
      derivesInto: [],
      invincibleFrames: null,
      airborneFrames: null,
      superArmorFrames: null,
      absorbFrames: null,
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
  ],
} satisfies CharacterMoveDb;
