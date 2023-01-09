import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import type {
  CreateNoticeReq,
  DeleteNoticeReq,
  LoadAllNoticeReq,
  LoadAllNoticeRes,
  LoadImportantNoticesRes,
  LoadMainNoticesRes,
  LoadNoticeReq,
  LoadNoticeSucRes,
  SearchNoticeReq,
  SearchNoticeRes,
  UpdateNoticeReq,
} from "../types/notice";

import {
  createNotice,
  deleteNotice,
  loadAllNotice,
  loadImportantNotices,
  loadMainNotices,
  loadNotice,
  searchNotice,
  updateNotice,
} from "../api/noticeApi";
import { noticeActions } from "../reducers/noticeReducer";
import { BaseRes } from "../types";

function* loadAllNoticeApi(action: PayloadAction<LoadAllNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadAllNoticeRes> = yield call(
      loadAllNotice,
      action.payload.page
    );

    yield put(noticeActions.loadAllNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadAllNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadAllNotice() {
  yield takeLatest(noticeActions.loadAllNoticeReq, loadAllNoticeApi);
}

function* loadMainNoticeApi() {
  try {
    const { data }: AxiosResponse<LoadMainNoticesRes> = yield call(
      loadMainNotices
    );

    yield put(noticeActions.loadMainNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadMainNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadMainNotice() {
  yield takeLatest(noticeActions.loadMainNoticeReq, loadMainNoticeApi);
}

function* loadImportantNoticeApi() {
  try {
    const { data }: AxiosResponse<LoadImportantNoticesRes> = yield call(
      loadImportantNotices
    );

    yield put(noticeActions.loadImportantNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadImportantNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadImportantNotice() {
  yield takeLatest(
    noticeActions.loadImportantNoticeReq,
    loadImportantNoticeApi
  );
}

function* searchNoticeApi(action: PayloadAction<SearchNoticeReq>) {
  try {
    const { data }: AxiosResponse<SearchNoticeRes> = yield call(
      searchNotice,
      action.payload
    );

    yield put(noticeActions.searchNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.searchNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchSearchNotice() {
  yield takeLatest(noticeActions.searchNoticeReq, searchNoticeApi);
}

function* createNoticeApi(action: PayloadAction<CreateNoticeReq>) {
  try {
    const { data }: AxiosResponse<BaseRes> = yield call(
      createNotice,
      action.payload
    );

    yield put(noticeActions.createNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.createNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchcreateNotice() {
  yield takeLatest(noticeActions.createNoticeReq, createNoticeApi);
}

function* loadNoticeApi(action: PayloadAction<LoadNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadNoticeSucRes> = yield call(
      loadNotice,
      action.payload.noticeId
    );

    yield put(noticeActions.loadNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.loadNoticeFail({
        success: false,
        msg: e.message,
      })
    );
  }
}
function* watchloadNotice() {
  yield takeLatest(noticeActions.loadNoticeReq, loadNoticeApi);
}

function* updateNoticeApi(action: PayloadAction<UpdateNoticeReq>) {
  try {
    const { data }: AxiosResponse<BaseRes> = yield call(
      updateNotice,
      action.payload
    );

    yield put(noticeActions.updateNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.updateNoticeFail({
        success: false,
      })
    );
  }
}
function* watchupdateNotice() {
  yield takeLatest(noticeActions.updateNoticeReq, updateNoticeApi);
}

function* deleteNoticeApi(action: PayloadAction<DeleteNoticeReq>) {
  try {
    const { data }: AxiosResponse<BaseRes> = yield call(
      deleteNotice,
      action.payload
    );

    yield put(noticeActions.deleteNoticeSuc(data));
  } catch (e: any) {
    yield put(
      noticeActions.deleteNoticeFail({
        success: false,
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
    fork(watchloadImportantNotice),
    fork(watchSearchNotice),
    fork(watchcreateNotice),
    fork(watchloadNotice),
    fork(watchupdateNotice),
    fork(watchdeleteNotice),
  ]);
}
