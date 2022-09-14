import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
    CreateNoticeReq,
    CreateNoticeRes,
    LoadAllNoticeReq,
    LoadAllNoticeRes
} from '../types/notice';

import {
    createNotice,
    loadAllNotice
} from '../api/noticeApi';
import { noticeActions } from '../reducers/noticeReducer';

// 전체 공지사항 로딩
function* loadAllNoticeApi(action: PayloadAction<LoadAllNoticeReq>) {
  try {
    const { data }: AxiosResponse<LoadAllNoticeRes> = yield call(
        loadAllNotice,
        action.payload,
    );

    yield put(noticeActions.loadAllNoticeSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError' ? e.response.data.msg : '서버에러입니다.';

    yield put(
      noticeActions.loadAllNoticeFailure({ status: { ok: false }, data: { msg } }),
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
      action.payload,
    );

    yield put(noticeActions.createNoticeSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError' ? e.response.data.msg : '서버에러입니다.';

    yield put(
      noticeActions.createNoticeFailure({ status: { ok: false }, data: { msg } }),
    );
  }
}

function* watchcreateNotice() {
  yield takeLatest(noticeActions.createNoticeRequest, createNoticeApi);
}

export default function* noticeSaga() {
  yield all([
    fork(watchloadAllNotice),
    fork(watchcreateNotice)
  ]);
}
