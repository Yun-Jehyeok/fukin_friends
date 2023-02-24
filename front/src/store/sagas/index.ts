import { all, fork } from "redux-saga/effects";
import albumSaga from "./albumSaga";

import CommentSaga from "./commentSaga";
import feedSaga from "./feedSaga";
import noticeSaga from "./noticeSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(noticeSaga),
    fork(CommentSaga),
    fork(feedSaga),
    fork(albumSaga),
  ]);
}
