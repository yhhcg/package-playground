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

/**
 * AntTableForm
 */
class AntTableForm extends Component {
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
    // cs: 1845.031982421875ms
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
      form,
    } = this.props;

    const {
      getFieldDecorator,
    } = form;

    const dataSource = data.map((row, index) => {
      return columns.map((column) => {
        return {
          [column.dataIndex]: (
              <FormItem>
              {
                getFieldDecorator(`data[${index}].${column.dataIndex}`, {
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

export default Form.create({
  mapPropsToFields(props) {
    const fields = {};
    const {
      columns,
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
