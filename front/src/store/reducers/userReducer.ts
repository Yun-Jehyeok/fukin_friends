import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { PAReq, PARes, PAResFail, RegisterUserReq, RegisterUserRes } from '../types/user';
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
};

const initialState: UserStateType = {
  user: { id: '', name: '', email: '' },
  userLoading: false,
  authLoading: false,
  errMsg: null,
  token: null,
  PASuccess: false,
  PANum: ''
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
      window.location.href = "/";

      state.userLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerUserFailure(state, action: PayloadAction<ResponseFailure>) {
      state.userLoading = false;
      state.errMsg = action.payload.data.msg;
    },
    // 휴대폰 인증
    userPARequest(state, action: PayloadAction<PAReq>) {
      console.log("데이터:::", action.payload)
      state.authLoading = true;
      state.errMsg = null;
    },
    userPASuccess(state, action: PayloadAction<PARes>) {
      console.log("인증번호:::", action.payload.num);
      state.authLoading = false;
      state.PASuccess = true;
      state.PANum = action.payload.num;
    },
    userPAFailure(state, action: PayloadAction<PAResFail>) {
      state.authLoading = false;
      state.PASuccess = false;
      state.errMsg = '인증번호를 확인해주세요.';
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
