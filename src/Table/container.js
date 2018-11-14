/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';

import {sync} from './actions';
import Component from './AntTable';

const {
  changeData,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
    columns: [{
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
    }],
    data: state.table.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (payload) => {
      dispatch(changeData(payload));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
