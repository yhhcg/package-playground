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
      data,
    } = this.props;

    const columns = [{
      dataIndex: 'busShift',
      title: '班次',
    }, {
      dataIndex: 'firstLeaveAt',
      title: 'A站',
    }, {
      dataIndex: 'outBoundDrivingDuration',
      title: '单程',
    }, {
      dataIndex: 'outBoundStayDuration',
      title: '停站',
    }, {
      dataIndex: 'outBoundRemark',
      title: '备注',
    }, {
      dataIndex: 'lastLeaveAt',
      title: 'B站',
    }, {
      dataIndex: 'inBoundDrivingDuration',
      title: '单程',
    }, {
      dataIndex: 'inBoundStayDuration',
      title: '停站',
    }, {
      dataIndex: 'inBoundRemark',
      title: '备注',
    }, {
      dataIndex: 'actions',
      title: '操作',
    }];

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
