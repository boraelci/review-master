---
id: "index"
title: "review-master"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [AnalysisModel](classes/AnalysisModel.md)
- [CategoricalViewer](classes/CategoricalViewer.md)
- [HistoricalViewer](classes/HistoricalViewer.md)
- [StarsStatisticalModel](classes/StarsStatisticalModel.md)
- [StarsViewer](classes/StarsViewer.md)

## Type Aliases

### Review

Ƭ **Review**: `Object`

Review interface defining the structure of a single review analysis.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `date` | `string` |
| `generalSentiment` | `string` |
| `negativeCategories` | `string`[] |
| `positiveCategories` | `string`[] |
| `reviewId` | `string` |
| `stars` | `string` |

#### Defined in

[components/AnalysisModel.tsx:6](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L6)

## Variables

### negativeBackgroundColor

• `Const` **negativeBackgroundColor**: `string`

#### Defined in

[components/ColorPalette.ts:8](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L8)

___

### negativeBorderColor

• `Const` **negativeBorderColor**: `string`

#### Defined in

[components/ColorPalette.ts:7](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L7)

___

### negativeColor

• `Const` **negativeColor**: ``"255, 99, 132"``

#### Defined in

[components/ColorPalette.ts:6](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L6)

___

### positiveBackgroundColor

• `Const` **positiveBackgroundColor**: `string`

#### Defined in

[components/ColorPalette.ts:4](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L4)

___

### positiveBorderColor

• `Const` **positiveBorderColor**: `string`

#### Defined in

[components/ColorPalette.ts:3](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L3)

___

### positiveColor

• `Const` **positiveColor**: ``"53, 162, 235"``

#### Defined in

[components/ColorPalette.ts:1](https://github.com/boraelci/review-master/blob/2367247/src/components/ColorPalette.ts#L1)

## Functions

### formatDate

▸ **formatDate**(`dateObj`): `string`

Format a Date object into a string in the format MM/DD/YYYY.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateObj` | `Date` | The Date object to be formatted. |

#### Returns

`string`

The formatted date string.

#### Defined in

[components/DateUtils.ts:7](https://github.com/boraelci/review-master/blob/2367247/src/components/DateUtils.ts#L7)
