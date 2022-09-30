import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { AxiosResponse } from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  LoadAllNoticeRes,
  LoadNoticeReq,
  LoadNoticeSuccessRes,
} from "../types/notice";

import { createNotice, loadAllNotice, loadNotice } from "../api/noticeApi";
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

export default function* noticeSaga() {
  yield all([
    fork(watchloadAllNotice),
    fork(watchcreateNotice),
    fork(watchloadNotice),
  ]);
}
