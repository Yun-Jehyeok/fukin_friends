import { all, fork } from 'redux-saga/effects';

import userSaga from './userSaga';
import groupSaga from './groupSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(groupSaga)]);
}
