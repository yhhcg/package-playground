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

    this.AntTable = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'table', // Reducer name
          require('./Table/reducer').default // Reducer function
        );

        return import('./Table/AntTable');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Refs = lodable({
      loader: () => {
        return import('./Refs');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.VirtualizedTable = lodable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'table', // Reducer name
          require('./Table/reducer').default // Reducer function
        );

        return import('./Table/VirtualizedTable');
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
        <Route exact path="/antTable" component={this.AntTable} />
        <Route exact path="/materialTable" component={this.MaterialTable} />
        <Route exact path="/virtualizedTable" component={this.VirtualizedTable} />
        <Route exact path="/refs" component={this.Refs} />
      </Switch>
    );
  }
}

export default Router;
