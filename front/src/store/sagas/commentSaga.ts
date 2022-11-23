import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import {
  createComment,
  deleteComment,
  loadAllComments,
  updateComment,
} from "../api/commentApi";
import { commentActions } from "../reducers/commentReducer";
import {
  CreateCommentReq,
  CreateCommentRes,
  DeleteCommentReq,
  DeleteCommentRes,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
  UpdateCommentRes,
} from "../types/comment";

// 전체 댓글 로딩
function* loadAllCommentsApi(action: PayloadAction<LoadAllCommentsReq>) {
  try {
    const { data }: AxiosResponse<LoadAllCommentsSucRes> = yield call(
      loadAllComments,
      action.payload
    );

    yield put(commentActions.loadAllCommentsSuc(data));
  } catch (e: any) {
    yield put(
      commentActions.loadAllCommentsFail({
        isSuc: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadAllComments() {
  yield takeLatest(commentActions.loadAllCommentsReq, loadAllCommentsApi);
}

// 댓글 작성
function* createCommentApi(action: PayloadAction<CreateCommentReq>) {
  try {
    const { data }: AxiosResponse<CreateCommentRes> = yield call(
      createComment,
      action.payload
    );

    yield put(commentActions.createCommentSuc(data));
  } catch (e: any) {
    yield put(
      commentActions.createCommentFail({
        isSuc: false,
      })
    );
  }
}
function* watchcreateComment() {
  yield takeLatest(commentActions.createCommentReq, createCommentApi);
}

// 댓글 수정
function* updateCommentApi(action: PayloadAction<UpdateCommentReq>) {
  try {
    const { data }: AxiosResponse<UpdateCommentRes> = yield call(
      updateComment,
      action.payload
    );

    yield put(commentActions.updateCommentSuc(data));
  } catch (e: any) {
    yield put(
      commentActions.updateCommentFail({
        isSuc: false,
      })
    );
  }
}
function* watchupdateComment() {
  yield takeLatest(commentActions.updateCommentReq, updateCommentApi);
}

// 댓글 삭제
function* deleteCommentApi(action: PayloadAction<DeleteCommentReq>) {
  try {
    const { data }: AxiosResponse<DeleteCommentRes> = yield call(
      deleteComment,
      action.payload
    );

    yield put(commentActions.deleteCommentSuc(data));
  } catch (e: any) {
    yield put(
      commentActions.deleteCommentFail({
        isSuc: false,
      })
    );
  }
}
function* watchdeleteComment() {
  yield takeLatest(commentActions.deleteCommentReq, deleteCommentApi);
}

export default function* CommentSaga() {
  yield all([
    fork(watchloadAllComments),
    fork(watchcreateComment),
    fork(watchupdateComment),
    fork(watchdeleteComment),
  ]);
}
