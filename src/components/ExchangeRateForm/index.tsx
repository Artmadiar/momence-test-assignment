import { useState } from 'react';
import { IExchangeRate } from '../../types';

interface ExchangeRateFormProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export default function ExchangeRateForm({ rates }: ExchangeRateFormProps) {
  const [currencyCode, setCurrencyCode] = useState('');
  const [sourceAmount, setSourceAmout] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  function calculateTargetAmount() {
    if (!rates || !currencyCode) {
      return setTargetAmount(0);
    }

    const rate = rates.find((r) => r.code === currencyCode);
    const amount = rate ? Math.ceil(sourceAmount * rate.amount / rate.rate) : 0;

    setTargetAmount(amount);
  }

  return (
    <div>
      <input value={sourceAmount} onChange={(e) => setSourceAmout(Number.parseInt(e.target.value, 10) || 0)} />
      <span> CZK in </span>
      <input list="currencyList" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
      <datalist id="currencyList">
        {rates && rates.map((rate, i) => <option key={i} value={rate.code} />)}
      </datalist>

      <button onClick={(e) => calculateTargetAmount()} >Calculate</button>

      {<p>{targetAmount !== 0 ? `${targetAmount} ${currencyCode}` : '-'}</p>}
    </div>
  );
}
