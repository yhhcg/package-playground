/* eslint-disable require-jsdoc */
import {all} from 'redux-saga/effects';

import table from './Table/saga';

export default function* rootSaga() {
  yield all([
    table(),
  ]);
}
