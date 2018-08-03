/* eslint-disable require-jsdoc */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {object} from 'prop-types';
import lodable from 'react-loadable';

// Dynamically load reducer
import injectAsyncReducer from './injectAsyncReducer';

/**
 * Router with lazy loaded pages
 */
class Router extends React.Component {
  static contextTypes = {
    store: object,
  };

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <Switch>
      </Switch>
    );
  }
}

export default Router;
