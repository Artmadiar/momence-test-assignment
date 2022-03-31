import { useQuery, UseQueryResult } from 'react-query';

export default function useExchangeRates(): UseQueryResult<string> {
  return useQuery('exchangeRates', () =>
    fetch('/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt')
      .then((res) => res.text())
      .then((data) => {
        console.log(data);

        return data;
      })
  );
}
