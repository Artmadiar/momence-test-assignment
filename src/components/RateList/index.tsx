import { IExchangeRate } from '../../types';
import RateElement from '../RateElement';


interface RateListProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export default function RateList({ rates }: RateListProps) {
  return (
    <div>
      Rate List
      <ul>
        {rates && rates.map((rate, i) => <RateElement key={i} rate={rate} />)}
      </ul>
    </div>
  );
}
