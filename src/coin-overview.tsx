import { FC } from 'react';
import styled from 'styled-components';
import { Coin } from './coin';

type CoinOverviewProps = {
  coin: Coin;
};

const CoinOverviewRoot = styled.div`
  background: #7fffd4;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  flex-wrap: wrap;
  overflow: hidden;
`;

const CoinRow = styled.div`
  padding: 8px;
  font-size: 12px;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

export const CoinOverview: FC<CoinOverviewProps> = ({ coin }) => {
  return (
    <CoinOverviewRoot>
      {Object.entries(coin).map(([key, value]) => (
        <CoinRow key={key}>
          <span>{key.toUpperCase().replace('_', ' ')}: </span>
          <span>{value}</span>
        </CoinRow>
      ))}
    </CoinOverviewRoot>
  );
};
