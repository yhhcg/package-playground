import React, { Component } from 'react';
import {
  array,
  func,
} from 'prop-types';
import {
  Table,
  Input,
} from 'antd';
// import {
//   TextField,
// } from '@material-ui/core';
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

    console.time('cs');
    
    onChange({
      columnKey,
      rowIndex,
      value: event.target.value,
    });
    // cs: 435.06689453125ms
    setTimeout(() => {
      console.timeEnd('cs');
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
            <Input
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
