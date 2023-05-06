import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HistoricalView } from '../views';
import { ChartWrapper } from '../components';
import { HistoricalDataModel } from '../models';

interface AnalysisPageProps {
  historicalDataModel: HistoricalDataModel;
}

export function AnalysisPage(props: AnalysisPageProps) {
  const { product_id } = useParams();
  console.log(product_id);

  let chartWrapper = new ChartWrapper();
  return (
    <div style={{ width: '85%' }}>
      {props.historicalDataModel ? (
        <HistoricalView
          chartWrapper={chartWrapper}
          historicalDataModel={props.historicalDataModel}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
