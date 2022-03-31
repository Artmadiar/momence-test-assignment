import './App.css';
import useExchangeRates from '../../hooks/useExchangeRates';
import ExchangeRateForm from '../ExchangeRateForm';
import RateList from '../RateList';

function App() {
  const { isFetching, data, isError, error } = useExchangeRates();

  console.log({
    isFetching, data, isError, error,
  });

  return (
    <div className="App">
      <header className="App-header">
        <ExchangeRateForm />
        <RateList />
      </header>
    </div>
  );
}

export default App;
