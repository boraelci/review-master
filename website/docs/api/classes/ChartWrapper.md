---
id: "ChartWrapper"
title: "Class: ChartWrapper"
sidebar_label: "ChartWrapper"
sidebar_position: 0
custom_edit_url: null
---

This class provides a wrapper around Chart.js and React-Chartjs-2 components,
allowing for easy rendering of radar and line charts with given options and data.

## Constructors

### constructor

• **new ChartWrapper**()

## Methods

### line

▸ **line**(`options`, `data`): `Element`

Renders a Line chart with the given options and data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Configuration options for the line chart. |
| `data` | `any` | The data to be displayed in the line chart. |

#### Returns

`Element`

A Line chart component with the specified options and data.

#### Defined in

[components/ChartWrapper.tsx:50](https://github.com/boraelci/review-master/blob/bfa07c8/src/components/ChartWrapper.tsx#L50)

___

### radar

▸ **radar**(`options`, `data`): `Element`

Renders a Radar chart with the given options and data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Configuration options for the radar chart. |
| `data` | `any` | The data to be displayed in the radar chart. |

#### Returns

`Element`

A Radar chart component with the specified options and data.

#### Defined in

[components/ChartWrapper.tsx:29](https://github.com/boraelci/review-master/blob/bfa07c8/src/components/ChartWrapper.tsx#L29)
