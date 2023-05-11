---
id: "HistoricalViewer"
title: "Class: HistoricalViewer"
sidebar_label: "HistoricalViewer"
sidebar_position: 0
custom_edit_url: null
---

HistoricalViewer class is responsible for visualizing review analyses data
over a specific period of time (day, week, or month). It aggregates the data,
converts it to the format required by ChartJS, and provides the necessary
options for rendering the chart.

**`Example`**

```ts
const analysisModel = new AnalysisModel(jsonData);
const historicalViewer = new HistoricalViewer(analysisModel, 'month');
const { options, data } = historicalViewer.getOptionsAndData();
// Render the chart using ChartJS with provided options and data
```

## Constructors

### constructor

• **new HistoricalViewer**(`analysisModel`, `timeOption`)

Constructs a HistoricalViewer instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `analysisModel` | [`AnalysisModel`](AnalysisModel.md) | An instance of AnalysisModel containing review analyses data. |
| `timeOption` | `TimeOption` | The period of time for aggregating data ('day', 'week', or 'month'). |

#### Defined in

[components/HistoricalViewer.tsx:59](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L59)

## Properties

### analysisModel

• **analysisModel**: [`AnalysisModel`](AnalysisModel.md)

#### Defined in

[components/HistoricalViewer.tsx:50](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L50)

___

### timeOption

• **timeOption**: `TimeOption`

#### Defined in

[components/HistoricalViewer.tsx:51](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L51)

## Methods

### aggregateData

▸ **aggregateData**(): `ChartData`

Aggregates the review analyses data based on the timeOption.

#### Returns

`ChartData`

An object containing labels and positive/negative review counts.

#### Defined in

[components/HistoricalViewer.tsx:102](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L102)

___

### convertToChartJSData

▸ **convertToChartJSData**(`chartData`): `ChartJSData`

Converts aggregated ChartData to the format required by ChartJS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chartData` | `ChartData` | The aggregated data to be converted. |

#### Returns

`ChartJSData`

The formatted data for rendering a ChartJS chart.

#### Defined in

[components/HistoricalViewer.tsx:171](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L171)

___

### getDateKey

▸ **getDateKey**(`dateString`): `string`

Generates a unique date key based on the timeOption. This can be 'day', 'week', or 'month'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateString` | `string` | The date string to generate a key for. |

#### Returns

`string`

A unique date key for the specified dateString.

#### Defined in

[components/HistoricalViewer.tsx:140](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L140)

___

### getOptionsAndData

▸ **getOptionsAndData**(): `Object`

Returns the options and data needed for rendering a ChartJS chart.

#### Returns

`Object`

An object containing chart options and data formatted for ChartJS.

| Name | Type |
| :------ | :------ |
| `data` | `ChartJSData` |
| `options` | `any` |

#### Defined in

[components/HistoricalViewer.tsx:69](https://github.com/boraelci/review-master/blob/c571097/src/components/HistoricalViewer.tsx#L69)
