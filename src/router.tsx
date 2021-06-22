import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from './main-page';
import { NotFoundPage } from './not-found-page';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" exact component={MainPage} />
        <Route path="/404" component={NotFoundPage} />

        <Redirect to="/main" from="/" exact />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
