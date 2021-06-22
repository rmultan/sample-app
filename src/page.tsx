import { FC } from 'react';
import styled from 'styled-components';

type PageProps = {
  className?: string;
};

const PageRoot = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: white;
`;

export const Page: FC<PageProps> = ({ children, className }) => {
  return <PageRoot className={className}>{children}</PageRoot>;
};
