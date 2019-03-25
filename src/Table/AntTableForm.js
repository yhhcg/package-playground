/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import {
  array,
  func,
} from 'prop-types';
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

class AntTableForm1 extends Component {
  render() {
    const {
      children,
      form,
      ...others,
    } = this.props;

    return React.cloneElement(children, {
      form1: form,
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
      if (index % 2 === 0) {
        columns.forEach((column) => {
          fields[`data[${index}].${column.dataIndex}`] = Form.createFormField({
            value: row[column.dataIndex],
          });
        });
      }
    });

    console.log(fields)

    return {
      ...fields,
    };
  },
})(AntTableForm1);


class AntTableForm2 extends Component {
  render() {
    const {
      children,
      form,
      ...others,
    } = this.props;

    return React.cloneElement(children, {
      form2: form,
      ...others,
    });
  }
}

const Form2 = Form.create({
  mapPropsToFields(props) {
    const fields = {};
    const {
      data,
    } = props;

    data.forEach((row, index) => {
      if (index % 2 === 1) {
        columns.forEach((column) => {
          fields[`data[${index}].${column.dataIndex}`] = Form.createFormField({
            value: row[column.dataIndex],
          });
        });
      }
    });
    console.log(fields)

    return {
      ...fields,
    };
  },
})(AntTableForm2);

class MergeForm extends Component {
  render() {
    return (
      <Form1 {...this.props}>
        <Form2>
          <FormDemo />
        </Form2>
      </Form1>
    );
  }
}

class FormDemo extends Component {
  handleChange = (columnKey, rowIndex, event) => {
    const {
      onChange,
    } = this.props;

    const value = event.target.value;
    
    setTimeout(() => {
      onChange({
        columnKey,
        rowIndex,
        value,
      });
    }, 50);
  }

  render() {
    const {
      data,
      form1,
      form2,
    } = this.props;

    console.log(this.props);

    const dataSource = data.map((row, index) => {
      let form = index === 0 ? form1 : form2;
      return columns.map((column) => {
        return {
          [column.dataIndex]: (
              <FormItem>
              {
                form.getFieldDecorator(`data[${index}].${column.dataIndex}`, {
                  rules: [{
                    required: true,
                    message: '必填',
                  }],
                })(
                  <Input
                    onChange={(event) => this.handleChange(column.dataIndex, index, event)}
                    // value={row[`${column.dataIndex}`]}
                  />
                )
              }
            </FormItem>
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

export default MergeForm;
