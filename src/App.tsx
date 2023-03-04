import './App.css';
import { ChartWrapper } from './components';
import { CategoricalDataProvider, HistoricalDataProvider } from './providers';
import { CategoricalView, HistoricalView } from './views';

function App() {
  return (
    <>
      <HistoricalView
        title="Historical View for Monthly # of Positive and Negative Reviews"
        provider={new HistoricalDataProvider()}
        chartWrapper={new ChartWrapper()}
      />
      <br></br>
      <br></br>
      <CategoricalView
        title="Categorical View for # of Positive and Negative Reviews"
        provider={new CategoricalDataProvider()}
        chartWrapper={new ChartWrapper()}
      />
    </>
  );
}

export default App;
