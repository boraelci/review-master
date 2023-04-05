---
id: "index"
title: "review-master"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [CategoricalDataProvider](classes/CategoricalDataProvider.md)
- [ChartWrapper](classes/ChartWrapper.md)
- [HistoricalDataProvider](classes/HistoricalDataProvider.md)

## Interfaces

- [DataProvider](interfaces/DataProvider.md)

## Functions

### CategoricalView

▸ **CategoricalView**(`props`): `Element`

This function renders a CategoricalView component with the given
title, provider, and chartWrapper. It displays a radar chart with
positive and negative category counts provided by the given CategoricalDataProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `CategoricalViewProps` | The properties for the CategoricalView component. |

#### Returns

`Element`

A radar chart displaying the categorical data.

#### Defined in

[views/CategoricalView.tsx:21](https://github.com/boraelci/review-master/blob/bfa07c8/src/views/CategoricalView.tsx#L21)

___

### HistoricalView

▸ **HistoricalView**(`props`): `Element`

This function renders a HistoricalView component with the given
title, provider, and chartWrapper. It displays a line chart with
positive and negative review counts over time provided by the given HistoricalDataProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `HistoricalViewProps` | The properties for the HistoricalView component. |

#### Returns

`Element`

A line chart displaying the historical review data.

#### Defined in

[views/HistoricalView.tsx:21](https://github.com/boraelci/review-master/blob/bfa07c8/src/views/HistoricalView.tsx#L21)
