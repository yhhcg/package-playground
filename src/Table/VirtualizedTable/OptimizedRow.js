/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

@hot(module)
class OptimizedRow extends Component {
  static propTypes = {
    shouldUpdate: PropTypes.bool,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.shouldUpdate;
  }

  render() {
    const {shouldUpdate, ...others} = this.props;

    return (
      <tr {...others } flag="optimizedRow" />
    );
  }
}

export default OptimizedRow;
