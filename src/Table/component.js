import React from 'react';
import {object} from 'prop-types';
import {withStyles} from '@material-ui/core';
import {hot} from 'react-hot-loader';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
});

/**
 * Table
 */
@hot(module)
@withStyles(styles)
class Table extends React.Component {
  static propTypes = {
    classes: object.isRequired,
  };

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * @return {Element}
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}></div>
    );
  }
}

export default Table;
