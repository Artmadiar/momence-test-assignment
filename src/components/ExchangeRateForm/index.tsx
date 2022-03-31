import { useState } from 'react';
import { IExchangeRate } from '../../types';
import { Container, Form, Section, Input, Button, Result } from './styled';

interface ExchangeRateFormProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export default function ExchangeRateForm({ rates }: ExchangeRateFormProps) {
  const [currencyCode, setCurrencyCode] = useState('');
  const [sourceAmount, setSourceAmout] = useState(0);
  const [result, setResult] = useState('');

  /**
   * Calculate conversion to the given currency
   */
  function calculateTargetAmount() {
    if (!rates || !currencyCode) {
      return setResult('');
    }

    const rate = rates.find((r) => r.code === currencyCode);
    const amount = rate ? Math.ceil(sourceAmount * rate.amount / rate.rate) : 0;

    setResult(`${amount} ${currencyCode}`);
  }

  return (
    <Container>
      <Form onSubmit={(e) => { e.preventDefault(); calculateTargetAmount(); }}>
        <Section>
          <Input value={sourceAmount} onChange={(e) => setSourceAmout(Number.parseInt(e.target.value, 10) || 0)} />

          <span> CZK in </span>

          <Input list="currencyList" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
          <datalist id="currencyList">
            {rates && rates.map((rate, i) => <option key={i} value={rate.code} />)}
          </datalist>

          <Button type="submit" >Calculate</Button>
        </Section>
        <div>
          {<Result>{result}</Result>}
        </div>
      </Form>
    </Container>
  );
}
