import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RegisterUserReq, RegisterUserRes } from '../types/user';

import { registerUser } from '../api/userApi';
import { userActions } from '../reducers/userReducer';

function* registerUserApi(action: PayloadAction<RegisterUserRes>) {
  try {
    const { data }: AxiosResponse<RegisterUserReq> = yield call(
      registerUser,
      action.payload,
    );

    yield put(userActions.registerUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError'
        ? e.response.data.data.message
        : '서버에러입니다.';

    yield put(
      userActions.registerUserFailure({ status: { ok: false }, data: { msg } }),
    );
  }
}

function* watchRegisterUser() {
  yield takeLatest(userActions.registerUserRequest, registerUserApi);
}

export default function* userSaga() {
  yield all([fork(watchRegisterUser)]);
}
