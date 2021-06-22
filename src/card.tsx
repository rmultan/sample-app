import { FC } from 'react';
import styled from 'styled-components';

type CardProps = {
  className?: string;
};

const CardRoot = styled.div`
  border-radius: 8px;
  background-color: white;
  width: 400px;
  height: 400px;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  color: black;
  padding: 16px;
`;

export const Card: FC<CardProps> = ({ children, className }) => {
  return <CardRoot className={className}>{children}</CardRoot>;
};
