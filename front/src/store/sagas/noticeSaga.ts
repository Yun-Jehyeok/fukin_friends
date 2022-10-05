import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { AxiosResponse } from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeRes,
  LoadNoticeReq,
  LoadNoticeSuccessRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";

import {
  createNotice,
  deleteNotice,
  loadAllNotice,
  loadNotice,
  updateNotice,
} from "../api/noticeApi";
import { noticeActions } from "../reducers/noticeReducer";

// 전체 공지사항 로딩
function* loadAllNoticeApi() {
  try {
    const { data }: AxiosResponse<LoadAllNoticeRes> = yield call(loadAllNotice);

    yield put(noticeActions.loadAllNoticeSuccess(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadAllNoticeFailure({
        isSuccess: false,
        msg: e.message,
      })
    );
  }
}

function* watchloadAllNotice() {
  yield takeLatest(noticeActions.loadAllNoticeRequest, loadAllNoticeApi);
}

// 공지사항 작성
function* createNoticeApi(action: PayloadAction<CreateNoticeReq>) {
  try {
    const { data }: AxiosResponse<CreateNoticeRes> = yield call(
      createNotice,
      action.payload
    );

    yield put(noticeActions.createNoticeSuccess(data));
  } catch (e: any) {
    yield put(
      noticeActions.createNoticeFailure({
        isSuccess: false,
        msg: e.message,
      })
    );
  }
}

function* watchcreateNotice() {
  yield takeLatest(noticeActions.createNoticeRequest, createNoticeApi);
}

// 공지사항 상세
function* loadNoticeApi(action: PayloadAction<LoadNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadNoticeSuccessRes> = yield call(
      loadNotice,
      action.payload
    );

    yield put(noticeActions.loadNoticeSuccess(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadNoticeFailure({
        isSuccess: false,
        msg: e.message,
      })
    );
  }
}

function* watchloadNotice() {
  yield takeLatest(noticeActions.loadNoticeRequest, loadNoticeApi);
}

// 공지사항 수정
function* updateNoticeApi(action: PayloadAction<UpdateNoticeReq>) {
  try {
    const { data }: AxiosResponse<UpdateNoticeRes> = yield call(
      updateNotice,
      action.payload
    );

    yield put(noticeActions.updateNoticeSuccess(data));
  } catch (e: any) {
    yield put(
      noticeActions.updateNoticeFailure({
        isSuccess: false,
      })
    );
  }
}

function* watchupdateNotice() {
  yield takeLatest(noticeActions.updateNoticeRequest, updateNoticeApi);
}

// 공지사항 삭제
function* deleteNoticeApi(action: PayloadAction<DeleteNoticeReq>) {
  try {
    const { data }: AxiosResponse<DeleteNoticeRes> = yield call(
      deleteNotice,
      action.payload
    );

    yield put(noticeActions.deleteNoticeSuccess(data));
  } catch (e: any) {
    yield put(
      noticeActions.deleteNoticeFailure({
        isSuccess: false,
      })
    );
  }
}

function* watchdeleteNotice() {
  yield takeLatest(noticeActions.deleteNoticeRequest, deleteNoticeApi);
}

export default function* noticeSaga() {
  yield all([
    fork(watchloadAllNotice),
    fork(watchcreateNotice),
    fork(watchloadNotice),
    fork(watchupdateNotice),
    fork(watchdeleteNotice),
  ]);
}
