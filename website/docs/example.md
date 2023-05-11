---
id: example
title: Example
---

Visit http://review-master.s3-website-us-east-1.amazonaws.com or click the image below for the interactive example app.

[![Example](/img/example-app.png)](http://review-master.s3-website-us-east-1.amazonaws.com)

This application uses the following sample data stored as analysisResponse.json:

```json
{
  "analysis": [
    {
      "reviewId": "1",
      "date": "April 30, 2023",
      "stars": "4.5",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Value for Money",
        "Sound Quality",
        "Comfort and Fit",
        "Connectivity and Compatibility"
      ],
      "negativeCategories": ["Battery Life"]
    },
    {
      "reviewId": "2",
      "date": "April 30, 2023",
      "stars": "3",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Connectivity and Compatibility",
        "Comfort and Fit"
      ],
      "negativeCategories": ["Value for Money", "Sound Quality", "Battery Life"]
    },
    {
      "reviewId": "3",
      "date": "April 30, 2023",
      "stars": "5",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Sound Quality",
        "Comfort and Fit",
        "Connectivity and Compatibility"
      ],
      "negativeCategories": ["Value for Money", "Battery Life"]
    },
    {
      "reviewId": "4",
      "date": "April 29, 2023",
      "stars": "2",
      "generalSentiment": "Negative",
      "positiveCategories": ["Comfort and Fit"],
      "negativeCategories": [
        "Value for Money",
        "Sound Quality",
        "Battery Life",
        "Connectivity and Compatibility"
      ]
    },
    {
      "reviewId": "5",
      "date": "April 28, 2023",
      "stars": "4",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Value for Money",
        "Comfort and Fit",
        "Connectivity and Compatibility"
      ],
      "negativeCategories": ["Sound Quality", "Battery Life"]
    },
    {
      "reviewId": "6",
      "date": "April 27, 2023",
      "stars": "1",
      "generalSentiment": "Negative",
      "positiveCategories": [],
      "negativeCategories": [
        "Value for Money",
        "Sound Quality",
        "Comfort and Fit",
        "Battery Life",
        "Connectivity and Compatibility"
      ]
    },
    {
      "reviewId": "7",
      "date": "April 27, 2023",
      "stars": "4",
      "generalSentiment": "Positive",
      "positiveCategories": ["Sound Quality", "Comfort and Fit"],
      "negativeCategories": [
        "Value for Money",
        "Battery Life",
        "Connectivity and Compatibility"
      ]
    },
    {
      "reviewId": "8",
      "date": "April 26, 2023",
      "stars": "3",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Value for Money",
        "Comfort and Fit",
        "Battery Life"
      ],
      "negativeCategories": ["Sound Quality", "Connectivity and Compatibility"]
    },
    {
      "reviewId": "9",
      "date": "April 26, 2023",
      "stars": "5",
      "generalSentiment": "Positive",
      "positiveCategories": [
        "Value for Money",
        "Sound Quality",
        "Comfort and Fit",
        "Battery Life",
        "Connectivity and Compatibility"
      ],
      "negativeCategories": []
    },
    {
      "reviewId": "10",
      "date": "April 26, 2023",
      "stars": "2",
      "generalSentiment": "Negative",
      "positiveCategories": [],
      "negativeCategories": [
        "Value for Money",
        "Sound Quality",
        "Comfort and Fit",
        "Battery Life",
        "Connectivity and Compatibility"
      ]
    }
  ]
}
```

For a quick start, check out the [Usage](usage.md) for this example app's App.tsx. You can find its entire source code in our [GitHub repo](https://github.com/boraelci/review-master/tree/main/example).
