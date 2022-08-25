import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { postActions } from '../reducers/postReducer';

import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoadPostsResponse, LoadPostsBody } from '../types';

import { apiLoadPosts } from '../api';

function* loadPosts(action: PayloadAction<LoadPostsBody>) {
  try {
    const { data }: AxiosResponse<LoadPostsResponse> = yield call(
      apiLoadPosts,
      action.payload,
    );

    yield put(postActions.loadPostsSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError'
        ? e.response.data.data.msg
        : '서버에러입니다.';

    yield put(
      postActions.loadPostsFailure({ status: { ok: false }, data: { msg } }),
    );
  }
}

function* watchLoadPosts() {
  yield takeLatest(postActions.loadPostsRequest, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts)]);
}
