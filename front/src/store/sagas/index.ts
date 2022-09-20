import { all, fork } from "redux-saga/effects";

import userSaga from "./userSaga";
import noticeSaga from "./noticeSaga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(noticeSaga)]);
}
