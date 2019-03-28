/* eslint-disable require-jsdoc */
import React from 'react';
import {
  Redirect,
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

    this.MaterialTable = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'table', // Reducer name
          require('./Table/reducer').default // Reducer function
        );

        return import('./Table/MaterialTable');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.OptimizedAntdTableForm = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'table', // Reducer name
          require('./Table/reducer').default // Reducer function
        );

        return import('./Table/OptimizedAntdTableForm');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.AntdTableForm = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'table', // Reducer name
          require('./Table/reducer').default // Reducer function
        );

        return import('./Table/AntdTableForm');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/optimizedAntdTableForm" />} />
        <Route exact path="/optimizedAntdTableForm" component={this.OptimizedAntdTableForm} />
        <Route exact path="/antdTableForm" component={this.AntdTableForm} />
        <Route exact path="/materialTable" component={this.MaterialTable} />
      </Switch>
    );
  }
}

export default Router;
