import * as React from 'react';

import { ChartWrapper } from './components';
import { CategoricalDataProvider, HistoricalDataProvider } from './providers';
import { CategoricalView, HistoricalView } from './views';

export function Historical() {
  return (
    <HistoricalView
      title="Historical View for Monthly # of Positive and Negative Reviews"
      provider={new HistoricalDataProvider()}
      chartWrapper={new ChartWrapper()}
    />
  );
}

export function Categorical() {
  return (
    <CategoricalView
      title="Categorical View for # of Positive and Negative Reviews"
      provider={new CategoricalDataProvider()}
      chartWrapper={new ChartWrapper()}
    />
  );
}
