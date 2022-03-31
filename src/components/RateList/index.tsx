import { IExchangeRate } from '../../types';
import RateElement from '../RateElement';
import { Container, List } from './styled';

interface RateListProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export default function RateList({ rates }: RateListProps) {
  return (
    <Container>
      <List>
        {rates && rates.map((rate, i) => <RateElement key={i} rate={rate} />)}
      </List>
    </Container>
  );
}
