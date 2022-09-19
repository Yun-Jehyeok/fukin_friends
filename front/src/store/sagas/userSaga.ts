import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import type { AxiosResponse } from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  ChangePWReq,
  ChangePWRes,
  LoadUserReq,
  LoadUserRes,
  LoginUserReq,
  LoginUserRes,
  LogoutUserReq,
  PAReq,
  PARes,
  RegisterUserReq,
  RegisterUserRes,
  SearchUserReq,
  SearchUserRes,
  SendEmailReq,
  SendEmailRes,
} from "../types/user";

import {
  changePWUser,
  loadUser,
  loginUser,
  registerUser,
  searchUser,
  sendEmail,
  sendPhoneAuth,
} from "../api/userApi";
import { userActions } from "../reducers/userReducer";

// 회원가입
function* registerUserApi(action: PayloadAction<RegisterUserReq>) {
  try {
    const { data }: AxiosResponse<RegisterUserRes> = yield call(
      registerUser,
      action.payload
    );

    yield put(userActions.registerUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === "AxiosError" ? e.response.data.msg : "서버에러입니다.";

    yield put(
      userActions.registerUserFailure({ status: { ok: false }, data: { msg } })
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
      action.payload
    );

    yield put(userActions.loginUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === "AxiosError" ? e.response.data.msg : "서버에러입니다.";

    yield put(
      userActions.loginUserFailure({ status: { ok: false }, data: { msg } })
    );
  }
}

function* watchLoginUser() {
  yield takeLatest(userActions.loginUserRequest, loginUserApi);
}

// 비밀번호 변경
function* changePWApi(action: PayloadAction<ChangePWReq>) {
  try {
    const { data }: AxiosResponse<ChangePWRes> = yield call(
      changePWUser,
      action.payload
    );

    yield put(userActions.changePWSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === "AxiosError" ? e.response.data.msg : "서버에러입니다.";

    yield put(
      userActions.changePWFailure({ status: { ok: false }, data: { msg } })
    );
  }
}

function* watchChangePW() {
  yield takeLatest(userActions.changePWRequest, changePWApi);
}

// 유저 인증
function* loadUserApi(action: PayloadAction<LoadUserReq>) {
  try {
    const { data }: AxiosResponse<LoadUserRes> = yield call(
      loadUser,
      action.payload
    );

    yield put(userActions.loadUserSuccess(data));
  } catch (e: any) {
    const msg =
      e?.name === "AxiosError" ? e.response.data.msg : "서버에러입니다.";

    yield put(
      userActions.loadUserFailure({ status: { ok: false }, data: { msg } })
    );
  }
}

function* watchloadUser() {
  yield takeLatest(userActions.loadUserRequest, loadUserApi);
}

// 유저 검색
function* searchUserApi(action: PayloadAction<SearchUserReq>) {
  try {
    const { data }: AxiosResponse<SearchUserRes> = yield call(
      searchUser,
      action.payload
    );

    yield put(userActions.userSearchSuccess(data));
  } catch (e: any) {
    yield put(userActions.userSearchFailure());
  }
}

function* watchSearchUser() {
  yield takeLatest(userActions.userSearchRequest, searchUserApi);
}

// 로그아웃
function* logoutApi(action: PayloadAction<LogoutUserReq>) {
  try {
    if (action.payload) {
      localStorage.removeItem("token");

      yield put(userActions.logoutSuccess());
    } else {
      yield put(userActions.logoutFailure());
    }
  } catch (e: any) {
    yield put(userActions.logoutFailure());
  }
}

function* watchLogout() {
  yield takeLatest(userActions.logoutRequest, logoutApi);
}

// 휴대폰 인증
function* paApi(action: PayloadAction<PAReq>) {
  try {
    const { data }: AxiosResponse<PARes> = yield call(
      sendPhoneAuth,
      action.payload
    );

    yield put(userActions.userPASuccess(data));
  } catch (e: any) {
    yield put(userActions.userPAFailure({ success: false }));
  }
}

function* watchPA() {
  yield takeLatest(userActions.userPARequest, paApi);
}

// 이메일 보내기
function* sendEmailApi(action: PayloadAction<SendEmailReq>) {
  try {
    const { data }: AxiosResponse<SendEmailRes> = yield call(
      sendEmail,
      action.payload
    );

    yield put(userActions.sendEmailSuccess(data));
  } catch (e: any) {
    yield put(userActions.sendEmailFailure({ isSuccess: false }));
  }
}

function* watchSendEmail() {
  yield takeLatest(userActions.sendEmailRequest, sendEmailApi);
}

export default function* userSaga() {
  yield all([
    fork(watchRegisterUser),
    fork(watchLoginUser),
    fork(watchChangePW),
    fork(watchPA),
    fork(watchloadUser),
    fork(watchLogout),
    fork(watchSearchUser),
    fork(watchSendEmail),
  ]);
}
