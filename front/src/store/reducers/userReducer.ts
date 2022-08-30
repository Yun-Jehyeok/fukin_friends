import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  LoadUserReq,
  LoadUserRes,
  LoginUserReq,
  LoginUserRes,
  LogoutUserReq,
  PAReq,
  PARes,
  PAResFail,
  RegisterUserReq,
  RegisterUserRes,
  SearchUserReq,
  SearchUserRes,
} from '../types/user';
import type { ResponseFailure } from '../types';
import { IUser } from '../types/user';

export type UserStateType = {
  user: IUser;
  userLoading: boolean;
  errMsg: null | string;
  token: null | string;
  authLoading: boolean;
  PASuccess: boolean; // PA : Phone Authentication
  PANum?: string;
  hasGroup: boolean;
  searchedUser: IUser[];
};

const initialState: UserStateType = {
  user: { id: '', name: '', email: '' },
  userLoading: false,
  authLoading: false,
  errMsg: null,
  token: null,
  PASuccess: false,
  PANum: '',
  hasGroup: false,
  searchedUser: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 회원가입
    registerUserRequest(state, action: PayloadAction<RegisterUserReq>) {
      state.userLoading = true;
      state.errMsg = null;
    },
    registerUserSuccess(state, action: PayloadAction<RegisterUserRes>) {
      window.location.href = '/group';
      localStorage.setItem('token', action.payload.token);

      state.userLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerUserFailure(state, action: PayloadAction<ResponseFailure>) {
      localStorage.removeItem('token');

      state.userLoading = false;
      state.errMsg = action.payload.data.msg;
    },

    // 로그인
    loginUserRequest(state, action: PayloadAction<LoginUserReq>) {
      state.userLoading = true;
      state.errMsg = null;
    },
    loginUserSuccess(state, action: PayloadAction<LoginUserRes>) {
      window.location.href = '/';
      localStorage.setItem('token', action.payload.token);

      state.userLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFailure(state, action: PayloadAction<ResponseFailure>) {
      localStorage.removeItem('token');

      state.userLoading = false;
      state.errMsg = action.payload.data.msg;
    },

    // 유저 인증
    loadUserRequest(state, action: PayloadAction<LoadUserReq>) {
      state.userLoading = true;
      state.errMsg = null;
    },
    loadUserSuccess(state, action: PayloadAction<LoadUserRes>) {   
      state.userLoading = false;
      state.user = action.payload;
      state.token = localStorage.getItem("token");
    },
    loadUserFailure(state, action: PayloadAction<ResponseFailure>) {
      state.userLoading = false;
      state.errMsg = action.payload.data.msg;
    },

    // 로그아웃
    logoutRequest(state, action: PayloadAction<LogoutUserReq>) {
      state.userLoading = true;
      state.authLoading = true;
    },
    logoutSuccess(state) {
      state.user = { id: '', name: '', email: '' };
      state.userLoading = false;
      state.authLoading = false;
      state.errMsg = null;
      state.token = null;
    },
    logoutFailure(state) {
      state.userLoading = false;
      state.authLoading = false;
    },

    // 휴대폰 인증
    userPARequest(state, action: PayloadAction<PAReq>) {
      state.authLoading = true;
      state.errMsg = null;
    },
    userPASuccess(state, action: PayloadAction<PARes>) {
      state.authLoading = false;
      state.PASuccess = true;
      state.PANum = action.payload.num;
    },
    userPAFailure(state, action: PayloadAction<PAResFail>) {
      state.authLoading = false;
      state.PASuccess = false;
      state.errMsg = '인증번호를 확인해주세요.';
    },

    // 유저 검색
    userSearchRequest(state, action: PayloadAction<SearchUserReq>) {
      state.userLoading = true;
      state.searchedUser = [];
    },
    userSearchSuccess(state, action: PayloadAction<SearchUserRes>) {
      state.userLoading = false;
      state.searchedUser = action.payload.users
    },
    userSearchFailure(state) {
      state.userLoading = false;
      state.searchedUser = [];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
