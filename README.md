# Review Master

[![Build Status](https://github.com/boraelci/review-master/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/boraelci/review-master/actions?query=workflow%3A%22Build+Status%22)
[![codecov](https://codecov.io/gh/boraelci/review-master/branch/main/graph/badge.svg)](https://codecov.io/gh/boraelci/review-master)

A library to visualize business intelligence derived from sentiment analysis on product reviews

![MIT License](https://img.shields.io/github/license/boraelci/review-master) ![issues](https://img.shields.io/github/issues/boraelci/review-master)

I am actively using the [Project Board](https://github.com/users/boraelci/projects/2/views/1) and [Pull Requests](https://github.com/boraelci/review-master/pulls?q=is%3Apr+is%3Aclosed) for new features and bugs. Please check them out to better understand the development of this project.

## Overview

Let's imagine a pair of headphones, listed on an e-commerce website, that has thousands of customer reviews associated with it. The seller can read through all of them but it would be time-consuming. When sentiment analysis is performed on these reviews, the results would show what percentage of the customers think the product is cheap/expensive, durable/short-lived, or high-quality/low-quality and more. This library allows visualizing the business intelligence derived from these results with features such as a historical view of sentiment change.

## Tests

Unit integration tests can be found at [`./src/tests`](./src/tests) since this is the directory convention required by create-react-app with jest. The coverage report can be accessed at [`./coverage/lcov-report/index.html`](./coverage/lcov-report/index.html)

## Scripts

This project uses the TypeScript dialect of JavaScript. It has the following commands:

### `npm install`

Install dependencies

### `npm start`

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Run the test suite and show coverage information. A report is generated at [`./coverage/lcov-report/index.html`](./coverage/lcov-report/index.html)

### `npm run lint`

Run static analysis with `eslint`

### `npm run prettier`

Autoformat the code with `prettier`

### `npm run build`

Build the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:release`

Compile the typescript into javascript (release build)

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
