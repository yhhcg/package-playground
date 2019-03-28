/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import AntdTableForm from './AntdTableForm';
import Table from './Table';

@hot(module)
class InjectForm extends Component {
  render() {
    return (
      <AntdTableForm {...this.props}>
        <Table />
      </AntdTableForm>
    );
  }
}

export default InjectForm;
