import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { ResponseFail } from "../types";
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
import { IUser } from "../types/user";

export interface UserStateType {
  user: IUser;
  isLoading: boolean;
  errMsg: null | string;
  token: null | string;
  isSuc: boolean;
  PANum?: string; // PA : Phone Authentication
  searchedUser: IUser[];
}

const initialState: UserStateType = {
  user: { id: "", name: "", email: "" },
  isLoading: false,
  errMsg: null,
  token: null,
  isSuc: false,
  PANum: "",
  searchedUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 회원가입
    registerUserReq(state, action: PayloadAction<RegisterUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    registerUserSuc(state, action: PayloadAction<RegisterUserRes>) {
      localStorage.setItem("token", action.payload.token);
      window.location.href = "/";

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerUserFail(state, action: PayloadAction<ResponseFail>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 로그인
    loginUserReq(state, action: PayloadAction<LoginUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loginUserSuc(state, action: PayloadAction<LoginUserRes>) {
      window.location.href = "/";
      localStorage.setItem("token", action.payload.token);

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFail(state, action: PayloadAction<ResponseFail>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 비밀번호 변경
    changePWReq(state, action: PayloadAction<ChangePWReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    changePWSuc(state, action: PayloadAction<ChangePWRes>) {
      let confirm = window.confirm("비밀번호가 변경되었습니다.");

      if (confirm) {
        window.location.href = "/";
      }

      localStorage.setItem("token", action.payload.token);

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    changePWFail(state, action: PayloadAction<ResponseFail>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 유저 인증
    loadUserReq(state, action: PayloadAction<LoadUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadUserSuc(state, action: PayloadAction<LoadUserRes>) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = localStorage.getItem("token");
    },
    loadUserFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 로그아웃
    logoutReq(state, action: PayloadAction<LogoutUserReq>) {
      state.isLoading = true;
      state.isLoading = true;
    },
    logoutSuc(state) {
      state.user = { id: "", name: "", email: "" };
      state.isLoading = false;
      state.isLoading = false;
      state.errMsg = null;
      state.token = null;
    },
    logoutFail(state) {
      state.isLoading = false;
      state.isLoading = false;
    },

    // 휴대폰 인증
    userPAReq(state, action: PayloadAction<PAReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    userPASuc(state, action: PayloadAction<PARes>) {
      state.isLoading = false;
      state.isSuc = true;
      state.PANum = action.payload.num;
    },
    userPAFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.isSuc = false;
      state.errMsg = "인증번호를 확인해주세요.";
    },

    // 유저 검색
    userSearchReq(state, action: PayloadAction<SearchUserReq>) {
      state.isLoading = true;
      state.searchedUser = [];
    },
    userSearchSuc(state, action: PayloadAction<SearchUserRes>) {
      state.isLoading = false;
      state.searchedUser = action.payload.users;
    },
    userSearchFail(state) {
      state.isLoading = false;
      state.searchedUser = [];
    },

    // 이메일 보내기
    sendEmailReq(state, action: PayloadAction<SendEmailReq>) {
      state.isLoading = true;
    },
    sendEmailSuc(state, action: PayloadAction<SendEmailRes>) {
      alert("이메일이 성공적으로 발송되었습니다.");

      state.isLoading = false;
      state.isSuc = action.payload.isSuc;
    },
    sendEmailFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.isSuc = action.payload.isSuc;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
