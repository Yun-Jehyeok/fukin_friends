import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { BaseRes, ResponseFail } from "../types";
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
} from "../types/user";
import { IUser } from "../types/user";

export interface UserStateType {
  user: IUser;
  isLoading: boolean;
  errMsg: null | string;
  token: null | string;
  success: boolean;
  PANum?: string; // PA : Phone Authentication
  searchedUser: IUser[];
  isLoginErr: null | string;
}

const initialState: UserStateType = {
  user: { id: "", name: "", email: "" },
  isLoading: false,
  errMsg: null,
  token: null,
  success: false,
  PANum: "",
  searchedUser: [],
  isLoginErr: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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

    loginUserReq(state, action: PayloadAction<LoginUserReq>) {
      state.isLoading = true;
      state.errMsg = null;
      state.isLoginErr = null;
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
      state.isLoginErr = action.payload.msg;
    },

    googleReq(state, action: PayloadAction<GoogleReq>) {
      state.isLoading = true;
      state.errMsg = null;
      state.isLoginErr = null;
    },
    googleSuc(state, action: PayloadAction<GoogleRes>) {
      window.location.href = "/";
      localStorage.setItem("token", action.payload.token);

      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    googleFail(state, action: PayloadAction<ResponseFail>) {
      localStorage.removeItem("token");

      state.isLoading = false;
      state.errMsg = action.payload.msg;
      state.isLoginErr = action.payload.msg;
    },

    changePWReq(state, action: PayloadAction<ChangePWReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    changePWSuc(state, action: PayloadAction<ChangePWRes>) {
      let confirm = window.confirm("??????????????? ?????????????????????.");

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

    userPAReq(state, action: PayloadAction<PAReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    userPASuc(state, action: PayloadAction<PARes>) {
      state.isLoading = false;
      state.success = true;
      state.PANum = action.payload.num;
    },
    userPAFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.success = false;
      state.errMsg = "??????????????? ??????????????????.";
    },

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

    sendEmailReq(state, action: PayloadAction<SendEmailReq>) {
      state.isLoading = true;
    },
    sendEmailSuc(state, action: PayloadAction<BaseRes>) {
      alert("???????????? ??????????????? ?????????????????????.");

      state.isLoading = false;
      state.success = action.payload.success;
    },
    sendEmailFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.success = action.payload.success;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
