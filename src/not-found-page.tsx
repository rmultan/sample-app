import { Card } from './card';
import { Page } from './page';
import { ReactComponent as NotFoundIcon } from './not-found.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = styled(NotFoundIcon)`
  color: #7fffd4;
  height: 200px;
  width: 200px;
  margin-bottom: 16px;
`;

const CenteredCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  margin-top: 16px;
`;

export const NotFoundPage = () => {
  return (
    <Page>
      <CenteredCard>
        <NotFound />
        <Text>This page does not appear to exist...</Text>
        <StyledLink to="/main">Return home</StyledLink>
      </CenteredCard>
    </Page>
  );
};
