/* eslint-disable require-jsdoc */
import {connect} from 'react-redux';
import {sync} from '../actions';
import Component from './component';

const {
  changeData,
} = sync;

const mapStateToProps = (state, ownProps) => {
  return {
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
