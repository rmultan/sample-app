import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Card } from './card';
import { Coin } from './coin';
import { CoinOverview } from './coin-overview';
import { Dropdown } from './dropdown';
import { Page } from './page';

const listUrl = 'https://api.coinlore.net/api/tickers/?start=0&limit=10';

export const MainPage = () => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [coin, setCoin] = useState<Coin | null>(null);
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
          data: Coin[];
        };
        setOptions(json.data.map(x => ({ label: x.name, value: x.id })));
      } catch (error) {
        console.error(error);
      }
    }

    getCoins();
  }, []);

  useEffect(() => {
    async function getCoin() {
      try {
        const response = await fetch(
          `https://api.coinlore.net/api/ticker/?id=${currentlySelected}`
        );
        const data = (await response.json()) as [Coin];
        setCoin(data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    if (currentlySelected) {
      getCoin();
    }
  }, [currentlySelected]);

  return (
    <Page>
      <Card>
        <Dropdown
          options={options}
          value={currentlySelected}
          onChange={handleChange}
        />
        {coin && <CoinOverview coin={coin} />}
      </Card>
    </Page>
  );
};
