/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import AntTableForm from './AntTableForm';
import Table from './Table';

@hot(module)
class InjectForm extends Component {
  render() {
    return (
      <AntTableForm {...this.props}>
        <Table />
      </AntTableForm>
    );
  }
}

export default InjectForm;
