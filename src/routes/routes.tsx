import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import Init from '../examples/ts/components/init';
import store from '../store';

// const initComponent = (): JSX.Element => (<Init myProp1='MyProp1 value add in router' />);

/**
 * Returns the routes for rending components
 */
const routes = (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Provider { ...{ store } }>
    <Router history={ createBrowserHistory() }>
      {/* Using a custos property component
        <Route path='/' component={ initComponent } />
      */}
      <Route path='/' component={ Init } />
    </Router>
  </Provider>
);

export default routes;