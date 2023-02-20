import "./App.css";
import { CategoricalView, HistoricalView } from "./views";

function App() {
  return (
    <>
      <HistoricalView title="Historical View for Monthly # of Positive and Negative Reviews" />
      <br></br>
      <br></br>
      <CategoricalView title="Categorical View for # of Positive and Negative Reviews" />
    </>
  );
}

export default App;
