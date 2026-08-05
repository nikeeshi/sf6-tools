import type { CharacterMoveDb } from "../../schema.ts";

// このファイルは tools/tsv-to-ts.ts で raw-frame-tsv/yasmine.tsv から機械生成した
// 一次データ(moves/ 配下に置く)。TODO を手作業パスで潰していく。

export const yasmine = {
  character: "ヤスミン",
  moves: [
    {
      id: "yasmine.__2", // TODO idを付与
      name: "立ち弱P（マガアン・ナ・パグラスラス）",
      category: "通常技",
      notation: "5弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 5,
      active: 3,
      advantageOnBlock: -1,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 7 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["連打キャンセル対応", "空振り時硬直1F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__3", // TODO idを付与
      name: "立ち弱K（マババング・シパ）",
      category: "通常技",
      notation: "5弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 5,
      active: 2,
      advantageOnBlock: -4,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 12 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__4", // TODO idを付与
      name: "立ち中P（パバリック・バリック ・ナ・パグラスラス）",
      category: "通常技",
      notation: "5中P",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 6,
      active: 12,
      advantageOnBlock: -3,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 18 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1600,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: [],
    },
    {
      id: "yasmine.__5", // TODO idを付与
      name: "立ち中K（タギリラング・シパ）",
      category: "通常技",
      notation: "5中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 10,
      active: 3,
      advantageOnBlock: -4,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      recovery: { hit: 19 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -6000,
        sAGain: 700,
      },
      notes: [],
    },
    {
      // TODO hits: 多段(3ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__6", // TODO idを付与
      name: "立ち強P（トリップレング・パグラスラス）",
      category: "通常技",
      notation: "5強P",
      condition: null,
      hitCount: 3, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 9,
      active: 20,
      advantageOnBlock: -3,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 15 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: [],
    },
    {
      id: "yasmine.__7", // TODO idを付与
      name: "立ち強K（トゥマタロン・ナ・シパ）",
      category: "通常技",
      notation: "5強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 14,
      active: 3,
      advantageOnBlock: -4,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      scaling: { starterScaling: 30 },
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["パニッシュカウンター時きりもみダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__8", // TODO idを付与
      name: "しゃがみ弱P（マビリサング・パグラスラス）",
      category: "通常技",
      notation: "2弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 4,
      active: 3,
      advantageOnBlock: -1,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 8 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["連打キャンセル対応"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__9", // TODO idを付与
      name: "しゃがみ弱K（マガアン・ナ・シパ）",
      category: "通常技",
      notation: "2弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 200,
      startUp: 5,
      active: 3,
      advantageOnBlock: -2,
      advantageOnHit: 2,
      overAllProperties: ["下"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 10 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 250,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["連打キャンセル対応"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__10", // TODO idを付与
      name: "しゃがみ中P（カルモット）",
      category: "通常技",
      notation: "2中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 6,
      active: 3,
      advantageOnBlock: 0,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: ["空振り時硬直2F増加", "ガード時硬直2F減少"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__11", // TODO idを付与
      name: "しゃがみ中K（パンドゥログ・ナン・ルロッド）",
      category: "通常技",
      notation: "2中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 8,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: -1,
      overAllProperties: ["下"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 19 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2000,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "yasmine.__12", // TODO idを付与
      name: "しゃがみ強P（マミミツィン）",
      category: "通常技",
      notation: "2強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 8,
      active: 6,
      advantageOnBlock: -11,
      advantageOnHit: 2,
      overAllProperties: ["上"],
      recovery: { hit: 23 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["強制立ち効果"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__13", // TODO idを付与
      name: "しゃがみ強K（グンティング・ナ・パバサ）",
      category: "通常技",
      notation: "2強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 10,
      active: 3,
      advantageOnBlock: -10,
      advantageOnHit: "D",
      overAllProperties: ["下"],
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -10000,
        sAGain: 1000,
      },
      notes: ["パニッシュカウンター時ダウン時間増加、ハードノックダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__14", // TODO idを付与
      name: "ジャンプ弱P（マガアン・ナ・パンヒンパパウィド・パグラスラス）",
      category: "通常技",
      notation: "j.弱P",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 4,
      active: 5,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "yasmine.__15", // TODO idを付与
      name: "ジャンプ弱K（パンヒンパパウィド・ナ・シパ・ガミット・アング・トゥホッド）",
      category: "通常技",
      notation: "j.弱K",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 4,
      active: 6,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1500,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: ["めくり性能"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__16", // TODO idを付与
      name: "ジャンプ中P（パビログ・ナ・パグラスラス）",
      category: "通常技",
      notation: "j.中P",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 7,
      active: 4,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: ["空中ヒット時吹き飛びダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__17", // TODO idを付与
      name: "ジャンプ中K（パンヒンパパウィド・ナ・シパ・サ・ハラップ）",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: ["めくり性能"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__18", // TODO idを付与
      name: "ジャンプ強P（ナママロング・マガ・パクパク）",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: ["空中カウンター/パニッシュカウンター時叩きつけダウン"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__19", // TODO idを付与
      name: "ジャンプ強K（パンヒンパパウィド・ナ・マラカス・ナ・シパ）",
      category: "通常技",
      notation: "j.強K",
      condition: "ジャンプ中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 10,
      active: 7,
      landingRecovery: 3,
      overAllProperties: ["中"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: [],
    },
    {
      id: "yasmine.__20", // TODO idを付与
      name: "ヒワン・パババ",
      category: "特殊技",
      notation: "6中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 22,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: 3,
      overAllProperties: ["中"],
      recovery: { hit: 18 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 500,
      },
      notes: [],
    },
    {
      id: "yasmine.__21", // TODO idを付与
      name: "ワリス・ナ・パバグサ",
      category: "特殊技",
      notation: "4強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 22,
      active: 2,
      advantageOnBlock: -6,
      advantageOnHit: "D",
      overAllProperties: ["下"],
      scaling: { starterScaling: 20 },
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 3000,
        dReductionOnBlock: -6000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["空振り時硬直3F増加", "パニッシュカウンター時吹き飛び時間延長"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__22", // TODO idを付与
      name: "キドラット・ナ・ヒワ",
      category: "特殊技",
      notation: "5弱P⇒弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 8,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 16 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 500,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -4000,
        sAGain: 700,
      },
      notes: ["ガード時硬直2F増加"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__23", // TODO idを付与
      name: "タッロング・ヒワ",
      category: "特殊技",
      notation: "5中P⇒中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 12,
      active: 2,
      advantageOnBlock: -13,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { comboScaling: 20 },
      recovery: { hit: 27 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "C",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 400,
        dReductionOnBlock: -1000,
        dReductionOnPunishCounter: -2000,
        sAGain: 300,
      },
      notes: [],
    },
    {
      id: "yasmine.__24", // TODO idを付与
      name: "スノスノッド・ナ・シパ（1段目）",
      category: "特殊技",
      notation: "5中K⇒中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 13,
      active: 2,
      advantageOnBlock: -13,
      advantageOnHit: -13,
      overAllProperties: ["上"],
      recovery: { hit: 33 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 400,
      },
      notes: [],
    },
    {
      id: "yasmine.__25", // TODO idを付与
      name: "スノスノッド・ナ・シパ（2段目）",
      category: "特殊技",
      notation: "5中K⇒中K⇒強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 16,
      active: 3,
      advantageOnBlock: -9,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 28 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -4000,
        sAGain: 500,
      },
      notes: [
        "ヒット時硬直5F減少",
        "ヒット時リニャ・ン・リワナグにキャンセル可能",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__26", // TODO idを付与
      name: "コンビナション・パムパバッグサ",
      category: "特殊技",
      notation: "2中K⇒強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 500,
      startUp: 8,
      active: 2,
      advantageOnBlock: -10,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 25 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -4000,
        sAGain: 400,
      },
      notes: ["ヒット時リニャ・ン・リワナグにキャンセル可能"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__27", // TODO idを付与
      name: "弱 ダロイ・ン・トゥビグ",
      category: "必殺技",
      notation: "236弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 12,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      // TODO 相談: ヒット硬直差「ー」を数値化できず
      // TODO hits: 多段(3ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__28", // TODO idを付与
      name: "弱 アロン（1段目）",
      category: "必殺技",
      notation: "236弱P⇒6P",
      condition: null,
      hitCount: 3, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 13,
      active: 21,
      advantageOnBlock: -12,
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1800,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 300,
      },
      notes: [
        "通常版はヒット時にアロン（2段目）に派生",
        "バヤニ・モード中はヒット/ガード時にアロン（2段目）に派生し、バヤニ・モードを終了する",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 相談: ガード硬直差「ー」を数値化できず
      id: "yasmine.__29", // TODO idを付与
      name: "弱 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 16,
      active: 3,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1200,
        dReductionOnPunishCounter: -5000,
        sAGain: 300,
      },
      notes: ["バヤニ・モードに移行する"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__30", // TODO idを付与
      name: "[強化版]弱 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 16,
      active: 3,
      advantageOnBlock: -1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1700,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -5000,
        sAGain: 300,
      },
      notes: ["ナカタゴン・ラカス中はヒット時に相手Dゲージを1000減少"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__31", // TODO idを付与
      name: "中 ダロイ・ン・トゥビグ",
      category: "必殺技",
      notation: "236中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 16,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: 1,
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: [],
    },
    {
      // TODO 相談: ヒット硬直差「ー」を数値化できず
      // TODO hits: 多段(3ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__32", // TODO idを付与
      name: "中 アロン（1段目）",
      category: "必殺技",
      notation: "236中P⇒6P",
      condition: null,
      hitCount: 3, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 13,
      active: 21,
      advantageOnBlock: -12,
      overAllProperties: ["上"],
      hits: [],
      scaling: { comboScaling: 20 },
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1800,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 300,
      },
      notes: [
        "通常版はヒット時にアロン（2段目）に派生",
        "バヤニ・モード中はヒット/ガード時にアロン（2段目）に派生し、バヤニ・モードを終了する",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 相談: ガード硬直差「ー」を数値化できず
      id: "yasmine.__33", // TODO idを付与
      name: "中 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 22,
      active: 3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1200,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: ["バヤニ・モードに移行する"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__34", // TODO idを付与
      name: "[強化版]中 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 22,
      active: 3,
      advantageOnBlock: -2,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1700,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: ["ナカタゴン・ラカス中はヒット時に相手Dゲージを1000減少"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__35", // TODO idを付与
      name: "強 ダロイ・ン・トゥビグ",
      category: "必殺技",
      notation: "236強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 21,
      active: 3,
      advantageOnBlock: -6,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1500,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: [],
    },
    {
      // TODO 相談: ヒット硬直差「ー」を数値化できず
      // TODO hits: 多段(3ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__36", // TODO idを付与
      name: "強 アロン（1段目）",
      category: "必殺技",
      notation: "236強P⇒6P",
      condition: null,
      hitCount: 3, // TODO 実機確認まだ
      totalDamage: 150,
      startUp: 13,
      active: 21,
      advantageOnBlock: -12,
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1800,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 300,
      },
      notes: [
        "通常版はヒット時にアロン（2段目）に派生",
        "バヤニ・モード中はヒット/ガード時にアロン（2段目）に派生し、バヤニ・モードを終了する",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 相談: ガード硬直差「ー」を数値化できず
      id: "yasmine.__37", // TODO idを付与
      name: "強 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 450,
      startUp: 22,
      active: 3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1200,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: ["バヤニ・モードに移行する"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__38", // TODO idを付与
      name: "[強化版]強 アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 550,
      startUp: 22,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 26 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1700,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -5000,
        sAGain: 250,
      },
      notes: [
        "ガード時硬直3F減少",
        "ナカタゴン・ラカス中はヒット時に相手Dゲージを1000減少",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__39", // TODO idを付与
      name: "OD ダロイ・ン・トゥビグ",
      category: "必殺技",
      notation: "236PP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 400,
      startUp: 12,
      active: 3,
      advantageOnBlock: -3,
      advantageOnHit: -2,
      overAllProperties: ["上"],
      recovery: { hit: 22 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 400,
      },
      notes: [],
    },
    {
      // TODO 相談: ヒット硬直差「ー」を数値化できず
      // TODO hits: 多段(3ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__40", // TODO idを付与
      name: "OD アロン（1段目）",
      category: "必殺技",
      notation: "236PP⇒6P",
      condition: null,
      hitCount: 3, // TODO 実機確認まだ
      totalDamage: 300,
      startUp: 13,
      active: 21,
      advantageOnBlock: -12,
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -5000,
        sAGain: 200,
      },
      notes: [
        "通常版はヒット時にアロン（2段目）に派生",
        "バヤニ・モード中はヒット/ガード時にアロン（2段目）に派生し、ガード時はバヤニ・モードを終了する",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 相談: ガード硬直差「ー」を数値化できず
      id: "yasmine.__41", // TODO idを付与
      name: "OD アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1100,
      startUp: 56,
      active: 1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 58 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: { dGainOnHit: 0, dReductionOnPunishCounter: -5000, sAGain: 800 },
      notes: ["バヤニ・モードに移行する"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__42", // TODO idを付与
      name: "[強化版]OD アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1500,
      startUp: 56,
      active: 1,
      advantageOnBlock: -1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 58 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -5000,
        sAGain: 800,
      },
      notes: [],
    },
    {
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__43", // TODO idを付与
      name: "[ナカタゴン・ラカス中][強化版]OD アロン（2段目）",
      category: "必殺技",
      notation: "-",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1900,
      startUp: 47,
      advantageOnBlock: -1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: { hit: 59 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -500,
        dReductionOnPunishCounter: -5000,
        sAGain: 0,
      },
      notes: ["ハードノックダウン", "ヒット時に相手Dゲージを5000減少"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__44", // TODO idを付与
      name: "弱 タリム・ン・ハンギン",
      category: "必殺技",
      notation: "214弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 35,
      overAllProperties: ["上"],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__45", // TODO idを付与
      name: "中 タリム・ン・ハンギン",
      category: "必殺技",
      notation: "214中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1100,
      startUp: 21,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { starterScaling: 40 },
      recovery: { hit: 24 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 4000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1200,
      },
      notes: [
        "ガード時硬直3F減少",
        "アーマーヒット時硬直1F増加",
        "2段目以降はヒット時のみ派生",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__46", // TODO idを付与
      name: "強 タリム・ン・ハンギン",
      category: "必殺技",
      notation: "214強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 30,
      active: 2,
      advantageOnBlock: 1,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 17 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 4000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1400,
      },
      notes: ["2段目以降はヒット時のみ派生"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__47", // TODO idを付与
      name: "OD タリム・ン・ハンギン",
      category: "必殺技",
      notation: "214PP",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 18,
      active: 15,
      advantageOnBlock: -12,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 14 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: ["2段目以降はヒット時のみ派生"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__48", // TODO idを付与
      name: "弱 ムカ・ン・ランギット",
      category: "必殺技",
      notation: "236弱K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 59,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [
        "23F-44Fまで、ウラン(OD版を含む)、クロッグ(OD版を含む)に派生可能",
        "14F以降、空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__49", // TODO idを付与
      name: "中 ムカ・ン・ランギット",
      category: "必殺技",
      notation: "236中K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 59,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [
        "23F-41Fまで、ウラン(OD版を含む)、クロッグ(OD版を含む)に派生可能",
        "14F以降、空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__50", // TODO idを付与
      name: "強 ムカ・ン・ランギット",
      category: "必殺技",
      notation: "236強K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 59,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [
        "23F-42Fまで、ウラン(OD版を含む)、クロッグ(OD版を含む)に派生可能",
        "14F以降、空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__51", // TODO idを付与
      name: "OD ムカ・ン・ランギット",
      category: "必殺技",
      notation: "236KK",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 59,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [
        "18F-45Fまで、ODウラン、ODクロッグに派生可能",
        "14F以降、空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__52", // TODO idを付与
      name: "ウラン",
      category: "必殺技",
      notation: "P",
      condition: "ムカ・ン・ランギット中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 17,
      active: 4,
      landingRecovery: 12,
      advantageOnBlock: -4,
      advantageOnHit: 3,
      overAllProperties: ["上"],
      scaling: { starterScaling: 30 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: ["めくり性能", "ヒット・ガードさせた高度によって硬直差が変化"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__53", // TODO idを付与
      name: "OD ウラン",
      category: "必殺技",
      notation: "PP/ （ODムカ・ン・ランギット中に）P",
      condition: "ムカ・ン・ランギット中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 800,
      startUp: 17,
      active: 4,
      landingRecovery: 12,
      advantageOnBlock: -2,
      advantageOnHit: 5,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: ["めくり性能", "ヒット・ガードさせた高度によって硬直差が変化"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__54", // TODO idを付与
      name: "クロッグ",
      category: "必殺技",
      notation: "K",
      condition: "ムカ・ン・ランギット中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 17,
      landingRecovery: 12,
      advantageOnBlock: -3,
      advantageOnHit: 4,
      overAllProperties: ["上"],
      scaling: { starterScaling: 30 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: ["ヒット・ガードさせた高度によって硬直差が変化"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__55", // TODO idを付与
      name: "OD クロッグ",
      category: "必殺技",
      notation: "KK/ （ODムカ・ン・ランギット中に）K",
      condition: "ムカ・ン・ランギット中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 700,
      startUp: 17,
      landingRecovery: 12,
      advantageOnBlock: 1,
      advantageOnHit: 7,
      overAllProperties: ["上"],
      scaling: { starterScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -5000,
        sAGain: 600,
      },
      notes: ["ヒット・ガードさせた高度によって硬直差が変化"], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「27+着地後12」を機械変換できず(要手動分解)
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__56", // TODO idを付与
      name: "弱 リパ・ン・アギラ",
      category: "必殺技",
      notation: "623弱K",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1000,
      startUp: 5,
      active: 10,
      advantageOnBlock: -29,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: [
        "3段目以降はヒット時のみ派生",
        "1-14F 空中判定の打撃・空弾属性に対して無敵",
        "7-41F 空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「27+着地後12」を機械変換できず(要手動分解)
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__57", // TODO idを付与
      name: "中 リパ・ン・アギラ",
      category: "必殺技",
      notation: "623中K",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1200,
      startUp: 6,
      active: 10,
      advantageOnBlock: -29,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 2000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1200,
      },
      notes: [
        "3段目以降はヒット時のみ派生",
        "1-9F 空中判定の打撃・空弾属性に対して無敵",
        "8-42F 空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「27+着地後12」を機械変換できず(要手動分解)
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__58", // TODO idを付与
      name: "強 リパ・ン・アギラ",
      category: "必殺技",
      notation: "623強K",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1300,
      startUp: 7,
      active: 10,
      advantageOnBlock: -32,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 4000,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: -5000,
        sAGain: 1000,
      },
      notes: [
        "3段目以降はヒット時のみ派生",
        "1-10F 空中判定の打撃・空弾属性に対して無敵",
        "9-43F 空中判定",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      // TODO 保留: 硬直「27+着地後19」を機械変換できず(要手動分解)
      // TODO hits: 多段(2ヒット)。段ごとのダメージ・属性を手動で
      id: "yasmine.__59", // TODO idを付与
      name: "OD リパ・ン・アギラ",
      category: "必殺技",
      notation: "623KK",
      condition: null,
      hitCount: 2, // TODO 実機確認まだ
      totalDamage: 1600,
      startUp: 6,
      active: 10,
      advantageOnBlock: -40,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      hits: [],
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -4000,
        dReductionOnPunishCounter: 0,
        sAGain: 1000,
      },
      notes: ["3段目以降はヒット時のみ派生", "1-9F 完全無敵", "8-42F 空中判定"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__60", // TODO idを付与
      name: "弱 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22弱P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -4,
      advantageOnHit: 1,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "yasmine.__61", // TODO idを付与
      name: "中 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -4,
      advantageOnHit: 1,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "yasmine.__62", // TODO idを付与
      name: "強 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 600,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -4,
      advantageOnHit: 1,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA3",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 1000,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -4000,
        sAGain: 600,
      },
      notes: [],
    },
    {
      id: "yasmine.__63", // TODO idを付与
      name: "OD 弱 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22弱P中P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -2,
      advantageOnHit: 2,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7500,
        dReductionOnPunishCounter: -6000,
        sAGain: 900,
      },
      notes: [],
    },
    {
      id: "yasmine.__64", // TODO idを付与
      name: "OD 中 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22弱P強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -2,
      advantageOnHit: 2,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7500,
        dReductionOnPunishCounter: -6000,
        sAGain: 900,
      },
      notes: [],
    },
    {
      id: "yasmine.__65", // TODO idを付与
      name: "OD 強 パンギル・サ・リクラン",
      category: "必殺技",
      notation: "22中P強P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 900,
      startUp: 25,
      totalFrame: 50,
      advantageOnBlock: -2,
      advantageOnHit: 2,
      overAllProperties: ["上", "弾"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      cancelableBy: "SA2",
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7500,
        dReductionOnPunishCounter: -6000,
        sAGain: 900,
      },
      notes: [],
    },
    {
      id: "yasmine.__66", // TODO idを付与
      name: "リニャ・ン・リワナグ",
      category: "必殺技",
      notation: "4KK",
      condition: "ナカタゴン・ラカス中に",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 1100,
      startUp: 22,
      active: 2,
      advantageOnBlock: -3,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { starterScaling: 20, comboScaling: 20 },
      recovery: { hit: 20 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 4000,
        dReductionOnBlock: -3000,
        dReductionOnPunishCounter: -8000,
        sAGain: 1000,
      },
      notes: ["初段ヒット/近距離で空振り時/位置が入れ替わった場合2段目に派生"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__67", // TODO idを付与
      name: "SA1 ヒワン・ン・カラヒタン",
      category: "SA",
      notation: "236236K",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 2000,
      startUp: 7,
      active: 6,
      advantageOnBlock: -34,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      recovery: { hit: 50 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -2500,
        dReductionOnPunishCounter: -5000,
        sAGain: 0,
      },
      notes: [
        "1-9F 打撃・投げに対して無敵",
        "カウンター/パニッシュカウンターで数値が変動しない",
        "最低保障ダメージ30％",
        "ヒット時バヤニ・モードに移行する",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__68", // TODO idを付与
      name: "SA2 ナカタゴン・ラカス",
      category: "SA",
      notation: "214214P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 0,
      totalFrame: 10,
      overAllProperties: null,
      recovery: null,
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [
        "SA2タイマー1500",
        "発動中、常にバヤニ・モード状態",
        "発動中、リニャ・ン・リワナグが発動可能",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__69", // TODO idを付与
      name: "SA3 パムムカドカッド・ン・サンパギータ",
      category: "SA",
      notation: "236236P",
      condition: null,
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 4000,
      startUp: 10,
      active: 3,
      advantageOnBlock: -48,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { SA3CancelImmediateScaling: 10 },
      recovery: { hit: 70 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -7500,
        dReductionOnPunishCounter: -15000,
        sAGain: 0,
      },
      notes: [
        "1-12F 完全無敵",
        "最低保障ダメージ50％",
        "カウンター/パニッシュカウンターで数値が変動しない",
        "※必殺技キャンセル時のみ適用",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__70", // TODO idを付与
      name: "CA パムムカドカッド・ン・サンパギータ",
      category: "SA",
      notation: "236236P",
      condition: "体力25%以下で",
      hitCount: 1, // TODO 実機確認まだ
      totalDamage: 4500,
      startUp: 10,
      active: 3,
      advantageOnBlock: -45,
      advantageOnHit: "D",
      overAllProperties: ["上"],
      scaling: { SA3CancelImmediateScaling: 10 },
      recovery: { hit: 70 }, // TODO 多段技なら要再調査
      hitstun: null, // TODO 実機確認
      blockstun: null, // TODO 実機確認
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -10000,
        dReductionOnPunishCounter: -20000,
        sAGain: 0,
      },
      notes: [
        "1-12F 完全無敵",
        "最低保障ダメージ50％",
        "カウンター/パニッシュカウンターで数値が変動しない",
        "※必殺技キャンセル時のみ適用",
      ], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__71", // TODO idを付与
      name: "ピギル・ウロ",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
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
      id: "yasmine.__72", // TODO idを付与
      name: "ヒラ・カマイ",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
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
      id: "yasmine.__73", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__74", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: ["1-15F 投げ無敵"], // TODO 備考を構造化情報へ整理
    },
    {
      id: "yasmine.__75", // TODO idを付与
      name: "ドライブインパクト（ダゴック・サ・カタワン）",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: -5000,
        dReductionOnPunishCounter: -15000,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__76", // TODO idを付与
      name: "[ガード時]ドライブリバーサル（ドレング・パロ・ガミット・アング・パーラッド）",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__77", // TODO idを付与
      name: "[起き上がり時]ドライブリバーサル（ドレング・パロ・ガミット・アング・パーラッド）",
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__78", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__79", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {},
      notes: [],
    },
    {
      id: "yasmine.__80", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {},
      notes: [],
    },
    {
      id: "yasmine.__81", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
      guage: {
        dGainOnHit: 0,
        dReductionOnBlock: 0,
        dReductionOnPunishCounter: 0,
        sAGain: 0,
      },
      notes: [],
    },
    {
      id: "yasmine.__82", // TODO idを付与
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
      derivesInto: [], // TODO 派生先
      invincibleFrames: null, // TODO 備考から抽出
      airborneFrames: null, // TODO 備考から抽出
      superArmorFrames: null, // TODO 備考から抽出
      absorbFrames: null, // TODO 備考から抽出
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
