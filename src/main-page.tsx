import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Card } from './card';
import { Dropdown } from './dropdown';
import { Page } from './page';

const listUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=5';

export const MainPage = () => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );

  const [currentlySelected, setCurrentlySelected] =
    useState<string | null>(null);

  const handleChange = useCallback(
    (val: string) => setCurrentlySelected(val),
    []
  );

  useEffect(() => {
    async function getCoins() {
      try {
        const response = await fetch(listUrl);
        const json = (await response.json()) as {
          data: {
            id: string;
            symbol: string;
            name: string;
          }[];
        };
        setOptions(json.data.map(x => ({ label: x.name, value: x.id })));
      } catch (error) {
        console.error(error);
      }
    }

    getCoins();
  }, []);

  return (
    <Page>
      <Card>
        <Dropdown
          options={options}
          value={currentlySelected}
          onChange={handleChange}
        />
      </Card>
    </Page>
  );
};
