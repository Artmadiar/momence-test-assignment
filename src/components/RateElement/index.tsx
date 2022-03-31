import { IExchangeRate } from '../../types';
import { Item, Left, Right } from './styled';

interface RateElementProps {
  rate: IExchangeRate;
}

export default function RateElement({ rate }: RateElementProps) {
  return (
    <Item>
      <Left>{rate.amount} {rate.code}</Left> - <Right>{rate.rate} CZK</Right>
    </Item>
  );
}
