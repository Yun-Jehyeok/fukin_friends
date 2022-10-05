import { createSlice } from "@reduxjs/toolkit";

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
import type { ResponseFailure } from "../types";
import { IUser } from "../types/user";

export type UserStateType = {
  user: IUser;
  isLoading: boolean;
  errMsg: null | string;
  token: null | string;
  isSuccess: boolean;
  PANum?: string; // PA : Phone Authentication
  searchedUser: IUser[];
};

const initialState: UserStateType = {
  user: { id: "", name: "", email: "" },
  isLoading: false,
  errMsg: null,
  token: null,
  isSuccess: false,
  PANum: "",
  searchedUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 회원가입
    registerUserRequest(state, action: PayloadAction<RegisterUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    registerUserSuccess(state, action: PayloadAction<RegisterUserRes>) {
      localStorage.setItem("token", action.payload.token);
      window.location.href = "/";

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerUserFailure(state, action: PayloadAction<ResponseFailure>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 로그인
    loginUserRequest(state, action: PayloadAction<LoginUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loginUserSuccess(state, action: PayloadAction<LoginUserRes>) {
      window.location.href = "/";
      localStorage.setItem("token", action.payload.token);

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFailure(state, action: PayloadAction<ResponseFailure>) {
      localStorage.removeItem("token");

      console.log(action.payload.msg);

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 비밀번호 변경
    changePWRequest(state, action: PayloadAction<ChangePWReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    changePWSuccess(state, action: PayloadAction<ChangePWRes>) {
      let confirm = window.confirm("비밀번호가 변경되었습니다.");

      if (confirm) {
        window.location.href = "/";
      }

      localStorage.setItem("token", action.payload.token);

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    changePWFailure(state, action: PayloadAction<ResponseFailure>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 유저 인증
    loadUserRequest(state, action: PayloadAction<LoadUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadUserSuccess(state, action: PayloadAction<LoadUserRes>) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = localStorage.getItem("token");
    },
    loadUserFailure(state, action: PayloadAction<ResponseFailure>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 로그아웃
    logoutRequest(state, action: PayloadAction<LogoutUserReq>) {
      state.isLoading = true;
      state.isLoading = true;
    },
    logoutSuccess(state) {
      state.user = { id: "", name: "", email: "" };
      state.isLoading = false;
      state.isLoading = false;
      state.errMsg = null;
      state.token = null;
    },
    logoutFailure(state) {
      state.isLoading = false;
      state.isLoading = false;
    },

    // 휴대폰 인증
    userPARequest(state, action: PayloadAction<PAReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    userPASuccess(state, action: PayloadAction<PARes>) {
      state.isLoading = false;
      state.isSuccess = true;
      state.PANum = action.payload.num;
    },
    userPAFailure(state, action: PayloadAction<ResponseFailure>) {
      state.isLoading = false;
      state.isSuccess = false;
      state.errMsg = "인증번호를 확인해주세요.";
    },

    // 유저 검색
    userSearchRequest(state, action: PayloadAction<SearchUserReq>) {
      state.isLoading = true;
      state.searchedUser = [];
    },
    userSearchSuccess(state, action: PayloadAction<SearchUserRes>) {
      state.isLoading = false;
      state.searchedUser = action.payload.users;
    },
    userSearchFailure(state) {
      state.isLoading = false;
      state.searchedUser = [];
    },

    // 이메일 보내기
    sendEmailRequest(state, action: PayloadAction<SendEmailReq>) {
      state.isLoading = true;
    },
    sendEmailSuccess(state, action: PayloadAction<SendEmailRes>) {
      alert("이메일이 성공적으로 발송되었습니다.");

      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
    },
    sendEmailFailure(state, action: PayloadAction<ResponseFailure>) {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
