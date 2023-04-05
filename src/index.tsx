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

export function sienna() {
  return (
    <CategoricalView
      title="Categorical View for # of Positive and Negative Reviews"
      provider={new CategoricalDataProvider()}
      chartWrapper={new ChartWrapper()}
    />
  );
}

export class Testing1 {
  constructor() {
    console.log('Testing1');
  }

  /**
   * This function does that
   */
  public bora() {}
}
