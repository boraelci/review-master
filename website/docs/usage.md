---
id: usage
title: Usage
---

After installing the `review-master`, you can start using its components in your React application:

```typescript
import React from 'react';

import {
  HistoricalView,
  HistoricalDataProvider,
  CategoricalView,
  CategoricalDataProvider,
  ChartWrapper,
} from 'review-master';

const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          fontSize: '2rem',
          color: '#333',
        }}
      >
        Review Analysis Dashboard
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div style={{ width: '45%' }}>
          <HistoricalView
            title="Historical View for Monthly # of Positive and Negative Reviews"
            provider={new HistoricalDataProvider()}
            chartWrapper={new ChartWrapper()}
          />
        </div>
        <div style={{ width: '40%' }}>
          <CategoricalView
            title="Categorical View for # of Positive and Negative Reviews"
            provider={new CategoricalDataProvider()}
            chartWrapper={new ChartWrapper()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
```
