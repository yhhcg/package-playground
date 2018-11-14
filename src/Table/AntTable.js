import React, { Component } from 'react';
import {
  array,
  func,
} from 'prop-types';
import {
  Table,
} from 'antd';
import {
  TextField,
} from '@material-ui/core';
/**
 * Compare the table performance of antd and material-ui
 */
class AntTable extends Component {
  static propTypes = {
    columns: array.isRequired,
    data: array.isRequired,
    onChange: func,
  };

  /**
   * @param  {string} columnKey
   * @param  {number} rowIndex
   * @param  {Object} event
   */
  handleChange = (columnKey, rowIndex, event) => {
    const {
      onChange,
    } = this.props;

    onChange({
      columnKey,
      rowIndex,
      value: event.target.value,
    });
  }

  /**
   * @return {Element}
   */
  render() {
    const {
      columns,
      data,
    } = this.props;

    const dataSource = data.map((row, index) => {
      return columns.map((column) => {
        return {
          [column.dataIndex]: (
            <TextField
              onChange={(event) => this.handleChange(column.dataIndex, index, event)}
              value={row[`${column.dataIndex}`]}
            />
          ),
        };
      })
      .reduce((accumulator, current) => {
        return {
          ...accumulator,
          ...current,
        };
      }, {key: index});
    });

    return (
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </div>
    );
  }
}

export default AntTable;
