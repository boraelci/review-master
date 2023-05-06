import React, { useEffect, useState } from 'react';

/*
import {
  HistoricalView,
  HistoricalDataProvider,
  CategoricalView,
  CategoricalDataProvider,
  ChartWrapper,
} from 'review-master';*/
import { API_GATEWAY_ENDPOINT } from './Config';
import { AnalysisPage, HistoricalDataModel } from 'review-master';

/*
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
};*/

const product_id = 'bff45201-5d50-47e1-a191-464713897cd6';

const App = () => {
  const [positiveData, setPositiveData] = useState<
    { date: string; count: number }[]
  >([]);
  const [negativeData, setNegativeData] = useState<
    { date: string; count: number }[]
  >([]);

  useEffect(() => {
    fetch(`${API_GATEWAY_ENDPOINT}/analyses/${product_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.body.historical_data);
        // Store the data in the states
        setPositiveData(data.body.historical_data.positive);
        setNegativeData(data.body.historical_data.negative);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let historicalDataModel = new HistoricalDataModel({
    positiveData,
    negativeData,
  });

  // Pass the data to the HistoricalView component
  return <AnalysisPage historicalDataModel={historicalDataModel} />;
};

export default App;
