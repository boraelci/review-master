---
id: "StarsStatisticalModel"
title: "Class: StarsStatisticalModel"
sidebar_label: "StarsStatisticalModel"
sidebar_position: 0
custom_edit_url: null
---

A class representing the statistical data of the star ratings of reviews.

## Constructors

### constructor

• **new StarsStatisticalModel**(`mean`, `median`, `standardDeviation`, `lowerQuartile`, `upperQuartile`, `interquartileRange`)

Creates a new StarsStatisticalModel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mean` | `number` | The mean (average) of the star ratings. |
| `median` | `number` | The median (middle value) of the star ratings. |
| `standardDeviation` | `number` | The standard deviation of the star ratings. |
| `lowerQuartile` | `number` | The lower quartile (Q1) of the star ratings. |
| `upperQuartile` | `number` | The upper quartile (Q3) of the star ratings. |
| `interquartileRange` | `number` | The interquartile range (IQR) of the star ratings. |

#### Defined in

[components/StarsStatisticalModel.tsx:22](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L22)

## Properties

### interquartileRange

• **interquartileRange**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:10](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L10)

___

### lowerQuartile

• **lowerQuartile**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:8](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L8)

___

### mean

• **mean**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:5](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L5)

___

### median

• **median**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:6](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L6)

___

### standardDeviation

• **standardDeviation**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:7](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L7)

___

### upperQuartile

• **upperQuartile**: `number`

#### Defined in

[components/StarsStatisticalModel.tsx:9](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L9)

## Methods

### toJSONString

▸ **toJSONString**(): `string`

Converts the StarsStatisticalModel instance to a JSON string.

#### Returns

`string`

A JSON string representing the instance.

#### Defined in

[components/StarsStatisticalModel.tsx:43](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L43)

___

### fromJSONString

▸ `Static` **fromJSONString**(`jsonString`): [`StarsStatisticalModel`](StarsStatisticalModel.md)

Creates a new StarsStatisticalModel instance from a JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonString` | `string` | A JSON string representing a StarsStatisticalModel instance. |

#### Returns

[`StarsStatisticalModel`](StarsStatisticalModel.md)

A new StarsStatisticalModel instance.

#### Defined in

[components/StarsStatisticalModel.tsx:53](https://github.com/boraelci/review-master/blob/c571097/src/components/StarsStatisticalModel.tsx#L53)
