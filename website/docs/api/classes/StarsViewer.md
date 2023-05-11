---
id: "StarsViewer"
title: "Class: StarsViewer"
sidebar_label: "StarsViewer"
sidebar_position: 0
custom_edit_url: null
---

A class for visualizing the review analysis data in a tabular format.

## Constructors

### constructor

• **new StarsViewer**(`analysisModel`)

Creates a new StarsViewer instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `analysisModel` | [`AnalysisModel`](AnalysisModel.md) | An instance of the AnalysisModel class containing review analysis data. |

#### Defined in

[components/StarsViewer.tsx:17](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L17)

## Properties

### analysisModel

• **analysisModel**: [`AnalysisModel`](AnalysisModel.md)

#### Defined in

[components/StarsViewer.tsx:9](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L9)

___

### starsStatisticalModel

• **starsStatisticalModel**: [`StarsStatisticalModel`](StarsStatisticalModel.md)

#### Defined in

[components/StarsViewer.tsx:10](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L10)

## Methods

### createTable

▸ **createTable**(): `Element`

Creates a table element for displaying the statistical data of the star ratings.

#### Returns

`Element`

A JSX.Element representing a table with statistical data.

#### Defined in

[components/StarsViewer.tsx:128](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L128)

___

### getData

▸ **getData**(): [`StarsStatisticalModel`](StarsStatisticalModel.md)

Retrieves the StarsStatisticalModel instance with calculated statistical data.

#### Returns

[`StarsStatisticalModel`](StarsStatisticalModel.md)

A StarsStatisticalModel instance.

#### Defined in

[components/StarsViewer.tsx:110](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L110)

___

### mean

▸ **mean**(): `number`

Calculates the mean (average) of the star ratings.

#### Returns

`number`

The mean of the star ratings.

#### Defined in

[components/StarsViewer.tsx:27](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L27)

___

### median

▸ **median**(): `number`

Calculates the median (middle value) of the star ratings.

#### Returns

`number`

The median of the star ratings.

#### Defined in

[components/StarsViewer.tsx:40](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L40)

___

### quartiles

▸ **quartiles**(): `Object`

Calculates the quartiles of the star ratings.

#### Returns

`Object`

An object containing the lower quartile (Q1), upper quartile (Q3),
and interquartile range (IQR) of the star ratings.

| Name | Type |
| :------ | :------ |
| `interquartileRange` | `number` |
| `lowerQuartile` | `number` |
| `upperQuartile` | `number` |

#### Defined in

[components/StarsViewer.tsx:74](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L74)

___

### standardDeviation

▸ **standardDeviation**(): `number`

Calculates the standard deviation of the star ratings.

#### Returns

`number`

The standard deviation of the star ratings.

#### Defined in

[components/StarsViewer.tsx:56](https://github.com/boraelci/review-master/blob/2367247/src/components/StarsViewer.tsx#L56)
