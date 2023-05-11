---
id: "AnalysisModel"
title: "Class: AnalysisModel"
sidebar_label: "AnalysisModel"
sidebar_position: 0
custom_edit_url: null
---

AnalysisModel class for handling and validating review analyses.
Loads JSON data and provides access to the formatted review analysis data.

## Constructors

### constructor

• **new AnalysisModel**(`jsonData`)

Initialize the AnalysisModel with JSON data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonData` | `string` \| `object` | JSON data in either string or object format. |

#### Defined in

[components/AnalysisModel.tsx:27](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L27)

## Properties

### reviews

• **reviews**: [`Review`](../#review)[] = `[]`

#### Defined in

[components/AnalysisModel.tsx:20](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L20)

## Accessors

### analysis

• `get` **analysis**(): [`Review`](../#review)[]

Get the formatted review analysis data.

#### Returns

[`Review`](../#review)[]

An array of formatted review analyses.

#### Defined in

[components/AnalysisModel.tsx:122](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L122)

## Methods

### getDate

▸ **getDate**(`dateString`): `string`

Convert a date string into a formatted date string in MM/DD/YYYY format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateString` | `string` | The date string to convert. |

#### Returns

`string`

The formatted date string.

#### Defined in

[components/AnalysisModel.tsx:96](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L96)

___

### loadJson

▸ **loadJson**(`jsonData`): `void`

Load and parse JSON data, validate and format the review analyses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonData` | `string` \| `object` | JSON data in either string or object format. |

#### Returns

`void`

#### Defined in

[components/AnalysisModel.tsx:36](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L36)

___

### sortByDate

▸ **sortByDate**(): `void`

Sort the review analyses by date.

#### Returns

`void`

#### Defined in

[components/AnalysisModel.tsx:109](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L109)

___

### validateReviewAnalysis

▸ **validateReviewAnalysis**(`item`): `void`

Validate that a review analysis has all the required properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`Review`](../#review) | The review analysis item to validate. |

#### Returns

`void`

#### Defined in

[components/AnalysisModel.tsx:71](https://github.com/boraelci/review-master/blob/2367247/src/components/AnalysisModel.tsx#L71)
