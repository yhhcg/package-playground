/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';
import {
  change,
  initialize,
} from 'redux-form';

import {sync} from './actions';
import Component from './AntTable';

const {
  changeData,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.table.data,
    initialValues: state.table.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initial: (payload) => {
      dispatch(initialize('ReduxFormAnt', { ...payload }));
    },
    onChange: (payload) => {
      const {
        fieldName,
        value,
      } = payload;
      dispatch(changeData(payload));
      // dispatch(change('ReduxFormAnt', fieldName, value));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

export default Container;
