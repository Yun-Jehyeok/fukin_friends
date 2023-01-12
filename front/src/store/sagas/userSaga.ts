import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import type {
  ChangePWReq,
  ChangePWRes,
  GoogleReq,
  GoogleRes,
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
} from '../types/user';

import {
  changePWUser,
  googleLogin,
  loadUser,
  loginUser,
  registerUser,
  searchUser,
  sendEmail,
  sendPhoneAuth,
} from '../api/userApi';
import { userActions } from '../reducers/userReducer';
import { BaseRes } from '../types';

function* registerUserApi(action: PayloadAction<RegisterUserReq>) {
  try {
    const { data }: AxiosResponse<RegisterUserRes> = yield call(
      registerUser,
      action.payload,
    );

    yield put(userActions.registerUserSuc(data));
  } catch (e: any) {
    yield put(
      userActions.registerUserFail({
        success: false,
        msg: '서버에러입니다.',
      }),
    );
  }
}
function* watchRegisterUser() {
  yield takeLatest(userActions.registerUserReq, registerUserApi);
}

function* loginUserApi(action: PayloadAction<LoginUserReq>) {
  try {
    const { data }: AxiosResponse<LoginUserRes> = yield call(
      loginUser,
      action.payload,
    );

    console.log('data:::', data);

    yield put(userActions.loginUserSuc(data));
  } catch (e: any) {
    yield put(
      userActions.loginUserFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchLoginUser() {
  yield takeLatest(userActions.loginUserReq, loginUserApi);
}

function* googleApi(action: PayloadAction<GoogleReq>) {
  try {
    const { data }: AxiosResponse<GoogleRes> = yield call(
      googleLogin,
      action.payload,
    );

    yield put(userActions.googleSuc(data));
  } catch (e: any) {
    yield put(
      userActions.googleFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchGoogle() {
  yield takeLatest(userActions.googleReq, googleApi);
}

function* changePWApi(action: PayloadAction<ChangePWReq>) {
  try {
    const { data }: AxiosResponse<ChangePWRes> = yield call(
      changePWUser,
      action.payload,
    );

    yield put(userActions.changePWSuc(data));
  } catch (e: any) {
    yield put(
      userActions.changePWFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchChangePW() {
  yield takeLatest(userActions.changePWReq, changePWApi);
}

function* loadUserApi(action: PayloadAction<LoadUserReq>) {
  try {
    const { data }: AxiosResponse<LoadUserRes> = yield call(
      loadUser,
      action.payload,
    );

    yield put(userActions.loadUserSuc(data));
  } catch (e: any) {
    yield put(
      userActions.loadUserFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchloadUser() {
  yield takeLatest(userActions.loadUserReq, loadUserApi);
}

function* searchUserApi(action: PayloadAction<SearchUserReq>) {
  try {
    const { data }: AxiosResponse<SearchUserRes> = yield call(
      searchUser,
      action.payload,
    );

    yield put(userActions.userSearchSuc(data));
  } catch (e: any) {
    yield put(userActions.userSearchFail());
  }
}
function* watchSearchUser() {
  yield takeLatest(userActions.userSearchReq, searchUserApi);
}

function* logoutApi(action: PayloadAction<LogoutUserReq>) {
  try {
    if (action.payload) {
      localStorage.removeItem('token');

      yield put(userActions.logoutSuc());
    } else {
      yield put(userActions.logoutFail());
    }
  } catch (e: any) {
    yield put(userActions.logoutFail());
  }
}
function* watchLogout() {
  yield takeLatest(userActions.logoutReq, logoutApi);
}

function* paApi(action: PayloadAction<PAReq>) {
  try {
    const { data }: AxiosResponse<PARes> = yield call(
      sendPhoneAuth,
      action.payload,
    );

    yield put(userActions.userPASuc(data));
  } catch (e: any) {
    yield put(
      userActions.userPAFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchPA() {
  yield takeLatest(userActions.userPAReq, paApi);
}

function* sendEmailApi(action: PayloadAction<SendEmailReq>) {
  try {
    const { data }: AxiosResponse<BaseRes> = yield call(
      sendEmail,
      action.payload,
    );

    yield put(userActions.sendEmailSuc(data));
  } catch (e: any) {
    yield put(
      userActions.sendEmailFail({ success: false, msg: '서버에러입니다.' }),
    );
  }
}
function* watchSendEmail() {
  yield takeLatest(userActions.sendEmailReq, sendEmailApi);
}

export default function* userSaga() {
  yield all([
    fork(watchRegisterUser),
    fork(watchLoginUser),
    fork(watchGoogle),
    fork(watchChangePW),
    fork(watchPA),
    fork(watchloadUser),
    fork(watchLogout),
    fork(watchSearchUser),
    fork(watchSendEmail),
  ]);
}
