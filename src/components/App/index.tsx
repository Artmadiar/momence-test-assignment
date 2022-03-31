import './App.css';
import useExchangeRates from '../../hooks/useExchangeRates';
import ExchangeRateForm from '../ExchangeRateForm';
import RateList from '../RateList';

function App() {
  const { isFetching, data, isError } = useExchangeRates();


  if (isError) {
    return (
      <div>
        Sorry, unknown fetch error occurred...
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <ExchangeRateForm rates={data} isFetching={isFetching} />
        <RateList rates={data} isFetching={isFetching} />
      </header>
    </div>
  );
}

export default App;
