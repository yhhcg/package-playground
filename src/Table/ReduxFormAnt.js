import React, {Component} from 'react';
import {
  array,
  func,
} from 'prop-types';
import {
  Form,
  Input,
  Table,
} from 'antd';
import {
  Field,
  reduxForm,
} from 'redux-form';

const FormItem = Form.Item;

/* eslint-disable  arrow-parens,react/display-name*/
const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};

const AInput = makeField(Input);

/**
 * Compare the table performance of antd and material-ui
 */
class ReduxFormAnt extends Component {
  static propTypes = {
    columns: array.isRequired,
    data: array.isRequired,
    onChange: func,
  };

  /**
   * @param  {string} columnKey
   * @param  {number} rowIndex
   * @param  {string} fieldName
   * @param  {Object} event
   */
  handleChange = (columnKey, rowIndex, fieldName, event) => {
    const {
      onChange,
    } = this.props;

    console.time('cs');

    onChange({
      columnKey,
      rowIndex,
      value: event.target.value,
      fieldName,
    });
    // cs: 70.3330078125ms
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
      return columns.map((column, columnIndex) => {
        return {
          [column.dataIndex]: (
            <Field
              name={`${index}-${columnIndex}`}
              component={AInput}
              onChange={(event) => this.handleChange(column.dataIndex, index, `${index}-${columnIndex}`, event)}
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
      <Form>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'ReduxFormAnt',
})(ReduxFormAnt);
