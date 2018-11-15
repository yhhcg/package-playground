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
  FieldArray,
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

    data: array.isRequired,
    onChange: func,
  };

  componentDidMount() {
    this.props.initial({
      scheduleList: this.props.data,
    });
  }

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

    const TableField = (props) => {
      const {
        fields,
      } = props;

      const dataSource = fields.map((field, index) => {
        return columns.map((column, columnIndex) => {
          return {
            [column.dataIndex]: (
              <Field
                name={`${field}.${column.dataIndex}`}
                component={AInput}
                // onChange={(event) => this.handleChange(column.dataIndex, index, `${index}-${columnIndex}`, event)}
                value={data[index][`${column.dataIndex}`]}
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
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      );
    };

    return (
      <Form>
        <FieldArray
          component={TableField}
          name="scheduleList"
        />
      </Form>
    );
  }
}

export default reduxForm({
  enableReinitialize: true,
  form: 'ReduxFormAnt',
})(ReduxFormAnt);
