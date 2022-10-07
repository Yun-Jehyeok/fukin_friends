import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeRes,
  LoadNoticeFailureRes,
  LoadNoticeReq,
  LoadNoticeSuccessRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";
import type { ResponseFailure } from "../types";
import { INotice } from "../types/notice";

export interface NoticeStateType {
  notices: INotice[];
  isLoading: boolean;
  errMsg: null | string;
  isSuccess: boolean;
  notice: INotice;
}

const initialState: NoticeStateType = {
  notices: [],
  isLoading: false,
  errMsg: null,
  isSuccess: false,
  notice: {
    _id: "",
    title: "",
    content: "",
    date: "",
    registerDate: "",
    creator: "",
    location: "",
  },
};

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    // 전체 공지사항 로딩
    loadAllNoticeRequest(state) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadAllNoticeSuccess(state, action: PayloadAction<LoadAllNoticeRes>) {
      state.isLoading = false;
      state.notices = action.payload.notices;
    },
    loadAllNoticeFailure(state, action: PayloadAction<ResponseFailure>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 생성
    createNoticeRequest(state, action: PayloadAction<CreateNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    createNoticeSuccess(state, action: PayloadAction<CreateNoticeRes>) {
      window.location.href = "/notice";

      state.isLoading = false;
    },
    createNoticeFailure(state, action: PayloadAction<ResponseFailure>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 상세
    loadNoticeRequest(state, action: PayloadAction<LoadNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadNoticeSuccess(state, action: PayloadAction<LoadNoticeSuccessRes>) {
      state.notice = action.payload.notice;
      state.isLoading = false;
    },
    loadNoticeFailure(state, action: PayloadAction<LoadNoticeFailureRes>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 수정
    updateNoticeRequest(state, action: PayloadAction<UpdateNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    updateNoticeSuccess(state, action: PayloadAction<UpdateNoticeRes>) {
      state.isLoading = false;
    },
    updateNoticeFailure(state, action: PayloadAction<UpdateNoticeRes>) {
      state.isLoading = false;
    },

    // 공지사항 삭제
    deleteNoticeRequest(state, action: PayloadAction<DeleteNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    deleteNoticeSuccess(state, action: PayloadAction<DeleteNoticeRes>) {
      window.location.href = "/notice";

      state.notice = {
        _id: "",
        title: "",
        content: "",
        date: "",
        registerDate: "",
        creator: "",
        location: "",
      };
      state.isLoading = false;
    },
    deleteNoticeFailure(state, action: PayloadAction<DeleteNoticeRes>) {
      state.isLoading = false;
    },
  },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
