/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import {
  Form,
  Table as AntdTable,
  Input,
} from 'antd';
import OptimizedCell from './OptimizedCell';
import OptimizedRow from './OptimizedRow';
const {
  Item: FormItem,
} = Form;

@hot(module)
class Table extends Component {
  static propTypes = {
    data: PropTypes.array,
    form: PropTypes.object,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.prevData = [];
  }

  handleChange = (columnKey, rowIndex) => (event) => {
    const {
      onChange,
    } = this.props;

    const value = event.target.value;

    onChange({
      columnKey,
      rowIndex,
      value,
    });
  }

  /* Record table data. */
  componentDidMount() {
    this.prevData = this.props.data;
  }

  /**
   * Update prevData to newest data once the dom updated.
   * It wille be shallow compare each row data on table onRow prop. 
   * @param {Object} prevProps
   */
  componentDidUpdate(prevProps) {
    this.prevData = this.props.data;
  }

  render() {
    const {
      data,
      form,
    } = this.props;

    const columns = [{
      dataIndex: 'busShift',
      title: '班次',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].busShift`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('busShift', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'firstLeaveAt',
      title: 'A站',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].firstLeaveAt`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('firstLeaveAt', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'outBoundDrivingDuration',
      title: '单程',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].outBoundDrivingDuration`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('outBoundDrivingDuration', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'outBoundStayDuration',
      title: '停站',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].outBoundStayDuration`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('outBoundStayDuration', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'outBoundRemark',
      title: '备注',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].outBoundRemark`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('outBoundRemark', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'lastLeaveAt',
      title: 'B站',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].lastLeaveAt`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('lastLeaveAt', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'inBoundDrivingDuration',
      title: '单程',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].inBoundDrivingDuration`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('inBoundDrivingDuration', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'inBoundStayDuration',
      title: '停站',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].inBoundStayDuration`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('inBoundStayDuration', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'inBoundRemark',
      title: '备注',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].inBoundRemark`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('inBoundRemark', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }, {
      dataIndex: 'actions',
      title: '操作',
      render: (text, record, index) => {
        return {
          children: (
            <FormItem>
              {
                form.getFieldDecorator(`data[${index}].actions`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={this.handleChange('actions', index)}
                  />
                )
              }
            </FormItem>
          ),
          props: {
            value: text,
          },
        };
      },
    }];

    return (
      <div>
        <AntdTable
          columns={columns}
          components={{
            body: {
              cell: OptimizedCell,
              row: OptimizedRow,
            },
          }}
          dataSource={data}
          onRow={(record, index) => {
            return {
              /* Shallow compare each row data to judge whether to rerender the OptimizedRow component. */
              shouldUpdate: this.prevData.length !== 0 && this.prevData[index] !== data[index],
            };
          }}
          pagination={false}
        />
      </div>
    );
  }
}

export default Table;
