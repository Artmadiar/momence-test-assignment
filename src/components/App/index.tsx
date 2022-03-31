import './App.css';
import ExchangeRateForm from '../ExchangeRateForm';
import RateList from '../RateList';

function App() {
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
