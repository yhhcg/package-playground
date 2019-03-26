/* eslint-disable require-jsdoc */
import {sync} from './actions';

const {
  CHANGE_DATA,
} = sync;

const initialState = {
  data: new Array(200).fill(0).map((row, index) => {
    return {
      key: index,
    };
  }),
  changedRowKey: '',
};

function changeData(state, action) {
  const {
    columnKey,
    rowIndex,
    value,
  } = action.payload;

  const rowKey = state[rowIndex].key;

  return {
    changedRowKey: rowKey,
    data: [
      ...state.slice(0, rowIndex),
      {
        ...state[rowIndex],
        [columnKey]: value,
      },
      ...state.slice(rowIndex + 1),
    ],
  };
}

export default function Reducer(state=initialState, action) {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        ...changeData(state.data, action),
      };
    default:
      return state;
  }
}
