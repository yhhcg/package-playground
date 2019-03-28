/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hot} from 'react-hot-loader';
import {Form} from 'antd';

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
@hot(module)
class AntTableForm extends Component {
  static propTypes = {
    children: PropTypes.node,
    form: PropTypes.object,
  };

  render() {
    const {
      children,
      form,
      ...others
    } = this.props;

    return React.cloneElement(children, {
      form,
      ...others,
    });
  }
}

export default Form.create({
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
