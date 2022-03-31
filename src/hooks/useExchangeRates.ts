import { useQuery, UseQueryResult } from 'react-query';
import { IExchangeRate } from '../types';

/**
 * Server can't respond JSON
 * So, we parse the raw text
 */
function parseResponse(text: string): IExchangeRate[] {
  const rows = text.split('\n');

  // remove unnecessary header and table header
  rows.shift();
  rows.shift();

  // remove unnecessary last empty string
  rows.shift();

  const rates: IExchangeRate[] = rows.map((row: string) => {
    // parse row: země|měna|množství|kód|kurz
    const parsedRow = row.split('|');

    return {
      country: parsedRow[0],
      currency: parsedRow[1],
      amount: Number.parseInt(parsedRow[2], 10),
      code: parsedRow[3],
      rate: Number.parseInt(parsedRow[4], 10),
    };
  });

  return rates;
}

export default function useExchangeRates(): UseQueryResult<IExchangeRate[]> {
  return useQuery('exchangeRates', () =>
    fetch('/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt')
      .then((res) => res.text())
      .then((text) => parseResponse(text))
  );
}
