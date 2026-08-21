// 型とか書けるかやってみてる試しのファイル。イングリッドの技だけ列挙してみた。コンボはTSの型の限界で厳密な型を定義するのはむずかしそうということがわかった。
const Strengths = ["弱", "中", "強"] as const;
const Stances = ["5", "2", "J"] as const;
const Buttons = ["P", "K"] as const;
const ingridMoves = {
  normals: Stances.flatMap((stance) =>
    Strengths.flatMap((strength) =>
      Buttons.map((button) => `${stance}${strength}${button}` as const),
    ),
  ),
  uniques: ["6中P", "6強P", "5中P", "4中K", "4強P"],
  tcs: ["中P>中K", "4中K>強P", "4強P>強P", "J強K>J強K"],
  specials: [
    "弱サンシュート",
    "中サンシュート",
    "強サンシュート",
    "OD弱サンシュート",
    "OD中サンシュート",
    "OD強サンシュート",
    "弱サンフレア",
    "サンフレア(Lv1)",
    "サンフレア(Lv2)",
    "サンフレア(Lv3)",
    "ODサンフレア(Lv1)",
    "ODサンフレア(Lv2)",
    "ODサンフレア(Lv3)",
    "弱ソーラーフレア",
    "ソーラーフレア(Lv1)",
    "ソーラーフレア(Lv2)",
    "ソーラーフレア(Lv3)",
    "ODソーラーフレア(Lv1)",
    "ODソーラーフレア(Lv2)",
    "ODソーラーフレア(Lv3)",
    "弱サンライズ",
    "中サンライズ",
    "強サンライズ",
    "ODサンライズ",
    "サンヴェール",
    "ODサンヴェール",
    "サンバニッシュ(後方)",
    "サンバニッシュ(上方)",
    "サンバニッシュ(前方)",
  ],
  SAs: [
    "SA1(Lv1)",
    "SA1(Lv2)",
    "SA1(Lv3)",
    "SA2(Lv1)",
    "SA2(Lv2)",
    "SA2(Lv3)",
    "SA3",
    "CA",
  ],
} as const;
type NormalMove = `${(typeof ingridMoves.normals)[number]}`;
type UniqueMove = `${(typeof ingridMoves.uniques)[number]}`;
type TCMove = `${(typeof ingridMoves.tcs)[number]}`;
type SpecialMove = `${(typeof ingridMoves.specials)[number]}`;
type SAMove = `${(typeof ingridMoves.SAs)[number]}`;
