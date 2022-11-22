import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeReq,
  LoadAllNoticeRes,
  LoadMainNoticesRes,
  LoadNoticeReq,
  LoadNoticeSucRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";

import {
  createNotice,
  deleteNotice,
  loadAllNotice,
  loadMainNotices,
  loadNotice,
  updateNotice,
} from "../api/noticeApi";
import { noticeActions } from "../reducers/noticeReducer";

// 전체 공지사항 로딩
function* loadAllNoticeApi(action: PayloadAction<LoadAllNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadAllNoticeRes> = yield call(
      loadAllNotice,
      action.payload
    );

    yield put(noticeActions.loadAllNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadAllNoticeFail({
        isSuc: false,
        msg: e.message,
      })
    );
  }
}

function* watchloadAllNotice() {
  yield takeLatest(noticeActions.loadAllNoticeReq, loadAllNoticeApi);
}

// 메인 공지사항 로딩
function* loadMainNoticeApi() {
  try {
    const { data }: AxiosResponse<LoadMainNoticesRes> = yield call(
      loadMainNotices
    );

    yield put(noticeActions.loadMainNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadMainNoticeFail({
        isSuc: false,
        msg: e.message,
      })
    );
  }
}

function* watchloadMainNotice() {
  yield takeLatest(noticeActions.loadMainNoticeReq, loadMainNoticeApi);
}

// 공지사항 작성
function* createNoticeApi(action: PayloadAction<CreateNoticeReq>) {
  try {
    const { data }: AxiosResponse<CreateNoticeRes> = yield call(
      createNotice,
      action.payload
    );

    yield put(noticeActions.createNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.createNoticeFail({
        isSuc: false,
        msg: e.message,
      })
    );
  }
}

function* watchcreateNotice() {
  yield takeLatest(noticeActions.createNoticeReq, createNoticeApi);
}

// 공지사항 상세
function* loadNoticeApi(action: PayloadAction<LoadNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadNoticeSucRes> = yield call(
      loadNotice,
      action.payload
    );

    yield put(noticeActions.loadNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadNoticeFail({
        isSuc: false,
        msg: e.message,
      })
    );
  }
}

function* watchloadNotice() {
  yield takeLatest(noticeActions.loadNoticeReq, loadNoticeApi);
}

// 공지사항 수정
function* updateNoticeApi(action: PayloadAction<UpdateNoticeReq>) {
  try {
    const { data }: AxiosResponse<UpdateNoticeRes> = yield call(
      updateNotice,
      action.payload
    );

    yield put(noticeActions.updateNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.updateNoticeFail({
        isSuc: false,
      })
    );
  }
}

function* watchupdateNotice() {
  yield takeLatest(noticeActions.updateNoticeReq, updateNoticeApi);
}

// 공지사항 삭제
function* deleteNoticeApi(action: PayloadAction<DeleteNoticeReq>) {
  try {
    const { data }: AxiosResponse<DeleteNoticeRes> = yield call(
      deleteNotice,
      action.payload
    );

    yield put(noticeActions.deleteNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.deleteNoticeFail({
        isSuc: false,
      })
    );
  }
}

function* watchdeleteNotice() {
  yield takeLatest(noticeActions.deleteNoticeReq, deleteNoticeApi);
}

export default function* noticeSaga() {
  yield all([
    fork(watchloadAllNotice),
    fork(watchloadMainNotice),
    fork(watchcreateNotice),
    fork(watchloadNotice),
    fork(watchupdateNotice),
    fork(watchdeleteNotice),
  ]);
}
