---
id: 'CategoricalDataProvider'
title: 'Class: CategoricalDataProvider'
sidebar_label: 'CategoricalDataProvider'
sidebar_position: 0
custom_edit_url: null
---

This class implements the DataProvider interface and provides methods
for getting categorical data and labels.

## Implements

- [`DataProvider`](../interfaces/DataProvider.md)

## Constructors

### constructor

• **new CategoricalDataProvider**()

## Methods

### getData

▸ **getData**(): `CategoricalDataModel`

This method returns a new CategoricalDataModel instance with the
given positive and negative category counts.

#### Returns

`CategoricalDataModel`

A new CategoricalDataModel instance.

#### Implementation of

[DataProvider](../interfaces/DataProvider.md).[getData](../interfaces/DataProvider.md#getdata)

#### Defined in

[providers/CategoricalDataProvider.tsx:15](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/CategoricalDataProvider.tsx#L15)

---

### getLabels

▸ **getLabels**(): `string`[]

This method returns an array of category labels.

#### Returns

`string`[]

An array of category labels.

#### Implementation of

[DataProvider](../interfaces/DataProvider.md).[getLabels](../interfaces/DataProvider.md#getlabels)

#### Defined in

[providers/CategoricalDataProvider.tsx:43](https://github.com/boraelci/review-master/blob/bfa07c8/src/providers/CategoricalDataProvider.tsx#L43)
