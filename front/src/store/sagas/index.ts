import { all, fork } from "redux-saga/effects";

import CommentSaga from "./commentSaga";
import noticeSaga from "./noticeSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(noticeSaga), fork(CommentSaga)]);
}
