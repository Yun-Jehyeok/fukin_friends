import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { AxiosResponse } from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginUserReq, LoginUserRes, PAReq, PARes, RegisterUserReq, RegisterUserRes } from '../types/user';

import { loginUser, registerUser, sendPhoneAuth } from '../api/userApi';
import { userActions } from '../reducers/userReducer';

// 회원가입
function* registerUserApi(action: PayloadAction<RegisterUserReq>) {
  try {
    const { data }: AxiosResponse<RegisterUserRes> = yield call(
      registerUser,
      action.payload,
    );

    yield put(userActions.registerUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError'
        ? e.response.data.msg
        : '서버에러입니다.';

    yield put(
      userActions.registerUserFailure({ status: { ok: false }, data: { msg } }),
    );
  }
}

function* watchRegisterUser() {
  yield takeLatest(userActions.registerUserRequest, registerUserApi);
}

// 로그인
function* loginUserApi(action: PayloadAction<LoginUserReq>) {
  try {
    const { data }: AxiosResponse<LoginUserRes> = yield call(
      loginUser,
      action.payload,
    );

    yield put(userActions.loginUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === 'AxiosError'
        ? e.response.data.msg
        : '서버에러입니다.';

    yield put(
      userActions.loginUserFailure({ status: { ok: false }, data: { msg } }),
    );
  }
}

function* watchLoginUser() {
  yield takeLatest(userActions.loginUserRequest, loginUserApi);
}

// 휴대폰 인증
function* paApi(action: PayloadAction<PAReq>) {
  try {
    const { data }: AxiosResponse<PARes> = yield call(
      sendPhoneAuth,
      action.payload,
    );

    yield put(userActions.userPASuccess(data));
  } catch (e: any) {
    yield put(
      userActions.userPAFailure({ success: false }),
    );
  }
}

function* watchPA() {
  yield takeLatest(userActions.userPARequest, paApi);
}

export default function* userSaga() {
  yield all([fork(watchRegisterUser), fork(watchLoginUser), fork(watchPA)]);
}
