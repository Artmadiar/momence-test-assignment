import { IExchangeRate } from '../../types';
import RateElement from '../RateElement';


interface RateListProps {
  rates?: IExchangeRate[];
}

export default function RateList({ rates }: RateListProps) {
  return (
    <div>
      Rate List
      <ul>
        {rates && rates.map((rate) => <RateElement rate={rate} />)}
      </ul>
    </div>
  );
}
