---
id: "CategoricalViewer"
title: "Class: CategoricalViewer"
sidebar_label: "CategoricalViewer"
sidebar_position: 0
custom_edit_url: null
---

CategoricalViewer is a class for visualizing categorical review analysis data.
It processes the analysis data and formats it for use with Chart.js.

## Constructors

### constructor

• **new CategoricalViewer**(`analysisModel`)

Creates a new CategoricalViewer instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `analysisModel` | [`AnalysisModel`](AnalysisModel.md) | The analysis model containing review data. |

#### Defined in

[components/CategoricalViewer.tsx:42](https://github.com/boraelci/review-master/blob/2367247/src/components/CategoricalViewer.tsx#L42)

## Properties

### analysisModel

• **analysisModel**: [`AnalysisModel`](AnalysisModel.md)

#### Defined in

[components/CategoricalViewer.tsx:36](https://github.com/boraelci/review-master/blob/2367247/src/components/CategoricalViewer.tsx#L36)

## Methods

### aggregateData

▸ **aggregateData**(): `CategoryData`

Aggregates positive and negative category counts from the analysis model.

#### Returns

`CategoryData`

- The aggregated category data.

#### Defined in

[components/CategoricalViewer.tsx:79](https://github.com/boraelci/review-master/blob/2367247/src/components/CategoricalViewer.tsx#L79)

___

### convertToChartJSData

▸ **convertToChartJSData**(`categoryData`): `ChartJSData`

Converts the aggregated category data into the format required by Chart.js.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `categoryData` | `CategoryData` | The aggregated category data. |

#### Returns

`ChartJSData`

- The formatted data for Chart.js.

#### Defined in

[components/CategoricalViewer.tsx:112](https://github.com/boraelci/review-master/blob/2367247/src/components/CategoricalViewer.tsx#L112)

___

### getOptionsAndData

▸ **getOptionsAndData**(): `Object`

Returns the Chart.js options and formatted data.

#### Returns

`Object`

- The options and data for Chart.js.

| Name | Type |
| :------ | :------ |
| `data` | `ChartJSData` |
| `options` | `any` |

#### Defined in

[components/CategoricalViewer.tsx:50](https://github.com/boraelci/review-master/blob/2367247/src/components/CategoricalViewer.tsx#L50)
