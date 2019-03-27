/* eslint-disable require-jsdoc */
import React, { Component, PureComponent } from 'react';
import {
  array,
  func,
} from 'prop-types';
import { hot } from 'react-hot-loader';
import {
  Form,
  Table,
  Input,
} from 'antd';
const {
  Item: FormItem,
} = Form;
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

/**
 * Create form and inject form prop to children.
 */
class AntTableForm extends Component {
  render() {
    const {
      children,
      form,
      ...others,
    } = this.props;

    return React.cloneElement(children, {
      form,
      ...others,
    });
  }
}

const Form1 = Form.create({
  mapPropsToFields(props) {
    const fields = {};
    const {
      data,
    } = props;

    data.forEach((row, index) => {
      columns.forEach((column) => {
        fields[`data[${index}].${column.dataIndex}`] = Form.createFormField({
          value: row[column.dataIndex],
        });
      });
    });

    return {
      ...fields,
    };
  },
})(AntTableForm);

/**
 * Optimize row.
 */
class OptimizedRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps.shouldUpdate)
    return nextProps.shouldUpdate;
  }

  render() {
    console.log(this.props);
    const { shouldUpdate, ...others } = this.props;
    return (
      <tr {...others } flag="optimizedRow" />
    );
  }
}

class OptimizedCell extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value === this.props.value) {
      return false;
    }
    return true;
  }
  render() {
    const { value, ...others } = this.props;
    console.log(this.props);
    return (
      <td {...others} flag="optimizedCell" />
    );
  }
}

@hot(module)
class FormDemo extends Component {
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

  render() {
    const {
      changedRowKey,
      data,
      form,
      preData,
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
        <Table
          columns={columns}
          components={{ 
            body: {
              cell: OptimizedCell,
              row: OptimizedRow
            },
          }}
          dataSource={data}
          onRow={(record, index) => {
            return {
              shouldUpdate: preData.length !== 0 && preData[index] !== data[index],
            };
          }}
          pagination={false}
        />
      </div>
    );
  }
}

/**
 * Export page component.
 */
class MergeForm extends Component {
  render() {
    return (
      <Form1 {...this.props}>
        <FormDemo />
      </Form1>
    );
  }
}

export default MergeForm;
