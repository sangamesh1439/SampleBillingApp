import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Header from './Header';
import Invoice from './components/Invoice';

export default () => (
  <App>
    <Header />
    <div className="row">
      <div className="col-sm-12">
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path="/invoice" component={Invoice} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </div>
    </div>
  </App>
);
