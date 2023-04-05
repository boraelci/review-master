---
id: "HistoricalDataProvider"
title: "Class: HistoricalDataProvider"
sidebar_label: "HistoricalDataProvider"
sidebar_position: 0
custom_edit_url: null
---

This class implements the DataProvider interface and provides methods
for getting historical data and labels.

## Implements

- [`DataProvider`](../interfaces/DataProvider.md)

## Constructors

### constructor

• **new HistoricalDataProvider**()

## Methods

### getData

▸ **getData**(): `HistoricalDataModel`

This method returns a new HistoricalDataModel instance with the
given positive and negative counts per month.

#### Returns

`HistoricalDataModel`

A new HistoricalDataModel instance.

#### Implementation of

[DataProvider](../interfaces/DataProvider.md).[getData](../interfaces/DataProvider.md#getdata)

#### Defined in

[providers/HistoricalDataProvider.tsx:15](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/HistoricalDataProvider.tsx#L15)

___

### getLabels

▸ **getLabels**(): `string`[]

This method returns an array of month labels.

#### Returns

`string`[]

An array of month labels.

#### Implementation of

[DataProvider](../interfaces/DataProvider.md).[getLabels](../interfaces/DataProvider.md#getlabels)

#### Defined in

[providers/HistoricalDataProvider.tsx:47](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/HistoricalDataProvider.tsx#L47)
