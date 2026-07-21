# damage-calc

SF6の全キャラ共通のコンボダメージ計算エンジン。技名・キャラクター固有の値は一切持たない、
計算ロジックのみのJSライブラリ。技データは [move-db](../move-db/README.md) 側で持つ想定。

- `calculateCombo(moves)` に技の配列を渡すと、各技の補正%・ダメージ・累計ダメージを返す
- 型定義・計算ロジックは [damage-calc.js](damage-calc.js) のJSDocコメントを参照
- テストは `node --test` で実行

## 補正の仕組み(概要)

- 1段目の補正は常に100%
- 2段目以降は、直前の技の `starterScaling`(直前が1段目のとき)または `comboScaling`
  (直前が2段目以降のとき)を引き、さらに自技の `immediateScaling` を引く
- そこに乗算補正(ドライブラッシュ・モダン操作・ジャストパリー等)を掛け、小数点以下切り捨て
- `minGuarantee` があれば、それを下回らないよう底上げ
- 最終ダメージ(`baseDamage × finalScaling / 100`)も小数点以下切り捨て。四捨五入ではない
  (実測コンボとの突き合わせで確認済み。詳細は `damage-calc.test.js` のコメント参照)

## 乗算補正の持続系について

`driveRush` / `justParry` / `kimberlySA3` は「発生した技以降ずっとかかる」持続系だが、
自動伝播はしない。効果が続く技すべての `MoveInput` に、呼び出し側でフラグを立てて渡すこと。
`modern` は単発(その技のみ)。

カウンターヒット/パニッシュカウンターは`Multipliers`に含めない。基本的に基礎ダメージの×1.2だが
技によって例外があるため、呼び出し側でその技専用の`baseDamage`を計算して渡すこと。

## 保留事項

多段技(1入力で複数ヒットする技)は現状のインターフェースでは表現できない。詳細は
[move-db/README.md](../move-db/README.md#保留事項) を参照。
