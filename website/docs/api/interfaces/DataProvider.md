---
id: 'DataProvider'
title: 'Interface: DataProvider'
sidebar_label: 'DataProvider'
sidebar_position: 0
custom_edit_url: null
---

The DataProvider interface defines the required methods for a data provider
that retrieves data and corresponding labels.

## Implemented by

- [`CategoricalDataProvider`](../classes/CategoricalDataProvider.md)
- [`HistoricalDataProvider`](../classes/HistoricalDataProvider.md)

## Methods

### getData

▸ **getData**(): `any`

Retrieves data from the provider.

#### Returns

`any`

Data from the provider.

#### Defined in

[providers/DataProvider.tsx:11](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/DataProvider.tsx#L11)

---

### getLabels

▸ **getLabels**(): `string`[]

Retrieves an array of labels corresponding to the data.

#### Returns

`string`[]

An array of labels.

#### Defined in

[providers/DataProvider.tsx:18](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/DataProvider.tsx#L18)
