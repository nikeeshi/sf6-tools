# move-db

SF6全キャラの技データ(ダメージ・補正値・フレーム等)をJSONで持つデータベース。
[damage-calc](../damage-calc/README.md) が毎回技データを聞き直さずに済むようにするのが目的。

## 現状

スキーマとルールだけ決まっていて、データ投入はまだ。新しいチャットスレッドで続きから
作業できるように、決定事項をここに書き出している。

## スキーマ

```json
{
  "character": "エレナ",
  "moves": [
    {
      "id": "elena.cr_mp",
      "name": "屈中P",
      "category": "通常技",
      "notation": "2MP",
      "startup": { "value": 6, "confidence": 4, "source": "https://www.streetfighter.com/6/character/elena/frame" },
      "baseDamage": { "value": 800, "confidence": 5, "source": "実機計測 2026-07-21" },
      "starterScaling": { "value": 0, "confidence": 3, "source": "..." },
      "comboScaling": { "value": 10, "confidence": 3, "source": "..." },
      "minGuarantee": null
    }
  ]
}
```

- 数値を持つ項目は全て `{ value, confidence, source }` でラップする(項目ごとに信頼度をつける)
- `id` は `キャラ.技slug` の一意キー
- `baseDamage` / `starterScaling` / `comboScaling` / `immediateScaling` / `minGuarantee` は
  [damage-calc](../damage-calc/damage-calc.js) の `MoveInput` にそのまま渡せる形にする
- 値がない項目は `null`

## 信頼度スケール(仮、未確認)

| 値 | 意味 |
|---|---|
| 5 | ゲーム内実測 |
| 4 | 公式サイトのフレーム表 |
| 3 | コミュニティのフレームデータサイト/wiki |
| 2 | 動画等からの目算・推測 |
| 1 | 未確認・暫定値 |

5と4はユーザー指定。1〜3は提案時点で未確認なので、使う前に本人確認を取ること。

## 対象キャラ

全キャラ。データ量が多いのでキャラ単位で区切って進める想定。

## 保留事項

- **多段技(1入力で複数ヒットする技、例: キンバリー623HK)の扱い**:
  `damage-calc`の`MoveInput`は1技=1ダメージ=1補正%が前提で、多段技を素直に表現できない。
  `hits?: number[]`(内部の各ヒットの素のダメージ配列、補正%は技全体で共通1個)を追加する案が
  出ているが、設計を保留中。当面は合計値を単一の`baseDamage`として扱う運用で回避する。
