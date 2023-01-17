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
import { BaseRes } from "../types";
import {
  CreateCommentReq,
  CreateCommentRes,
  DeleteCommentReq,
  DeleteCommentRes,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
} from "../types/comment";

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
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadAllComments() {
  yield takeLatest(commentActions.loadAllCommentsReq, loadAllCommentsApi);
}

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
        success: false,
      })
    );
  }
}
function* watchcreateComment() {
  yield takeLatest(commentActions.createCommentReq, createCommentApi);
}

function* updateCommentApi(action: PayloadAction<UpdateCommentReq>) {
  try {
    const { data }: AxiosResponse<BaseRes> = yield call(
      updateComment,
      action.payload
    );

    yield put(commentActions.updateCommentSuc(data));
  } catch (e: any) {
    yield put(
      commentActions.updateCommentFail({
        success: false,
      })
    );
  }
}
function* watchupdateComment() {
  yield takeLatest(commentActions.updateCommentReq, updateCommentApi);
}

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
        success: false,
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
