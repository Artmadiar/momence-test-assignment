import { IExchangeRate } from '../../types';

interface ExchangeRateFormProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export default function ExchangeRateForm(props: ExchangeRateFormProps) {
  return (
    <div>
      Exchange Rate Form
    </div>
  );
}
