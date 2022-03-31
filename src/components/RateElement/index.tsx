import { IExchangeRate } from '../../types';

interface RateElementProps {
  rate: IExchangeRate;
}

export default function RateElement({ rate }: RateElementProps) {
  return (
    <li>
      {rate.code} - {rate.rate}
    </li>
  );
}
