/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';

@hot(module)
class OptimizedCell extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.value === this.props.value) {
      return false;
    }
    return true;
  }
  render() {
    const {value, ...others} = this.props;

    return (
      <td {...others} flag="optimizedCell" />
    );
  }
}

export default OptimizedCell;
