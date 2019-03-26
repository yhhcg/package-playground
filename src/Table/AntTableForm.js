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

let globalChangedRowKey = '';

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
    const rowKey = nextProps['data-row-key'];
    if (globalChangedRowKey === '' || globalChangedRowKey === rowKey) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <tr {...this.props } flag="ibus" />
    )
  }
}

/**
 * Optimize table cell.
 */
class TableCell extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value === this.props.value) {
      return false;
    }
    return true;
  }

  render() {
    const { column, form, index, onChange } = this.props;
    return (
      <FormItem>
        {
          form.getFieldDecorator(`data[${index}].${column.dataIndex}`, {
            rules: [{
              required: true,
              message: '必填',
            }],
          })(
            <Input
              onChange={onChange}
            />
          )
        }
      </FormItem>
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
    } = this.props;

    globalChangedRowKey = changedRowKey;

    const dataSource = data.map((row, index) => {
      const columnElements = columns.map((column) => {
        return {
          [column.dataIndex]: (
            <TableCell
              column={column}
              form={form}
              index={index}
              onChange={this.handleChange(column.dataIndex, index)}
              value={row[column.dataIndex]}
            />
          ),
        };
      }).reduce((accumulator, columnElement) => {
        return {
          ...accumulator,
          ...columnElement,
        };
      }, {});

      return {
        key: row.key,
        ...columnElements,
      };
    });

    return (
      <div>
        <Table
          columns={columns}
          components={{ body: { row: OptimizedRow }}}
          dataSource={dataSource}
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
