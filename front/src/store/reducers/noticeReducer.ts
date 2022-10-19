import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeRes,
  LoadMainNoticesRes,
  LoadNoticeFailRes,
  LoadNoticeReq,
  LoadNoticeSucRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";
import type { ResponseFail } from "../types";
import { INotice } from "../types/notice";

export interface NoticeStateType {
  notices: INotice[];
  isLoading: boolean;
  errMsg: null | string;
  isSuc: boolean;
  notice: INotice;
}

const initialState: NoticeStateType = {
  notices: [],
  isLoading: false,
  errMsg: null,
  isSuc: false,
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
    loadAllNoticeReq(state) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadAllNoticeSuc(state, action: PayloadAction<LoadAllNoticeRes>) {
      state.isLoading = false;
      state.notices = action.payload.notices;
    },
    loadAllNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 메인 공지사항 로딩
    loadMainNoticeReq(state) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadMainNoticeSuc(state, action: PayloadAction<LoadMainNoticesRes>) {
      state.isLoading = false;
      state.notices = action.payload.notices;
    },
    loadMainNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 생성
    createNoticeReq(state, action: PayloadAction<CreateNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    createNoticeSuc(state, action: PayloadAction<CreateNoticeRes>) {
      window.location.href = "/notice";

      state.isLoading = false;
    },
    createNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 상세
    loadNoticeReq(state, action: PayloadAction<LoadNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadNoticeSuc(state, action: PayloadAction<LoadNoticeSucRes>) {
      state.notice = action.payload.notice;
      state.isLoading = false;
    },
    loadNoticeFail(state, action: PayloadAction<LoadNoticeFailRes>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    // 공지사항 수정
    updateNoticeReq(state, action: PayloadAction<UpdateNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    updateNoticeSuc(state, action: PayloadAction<UpdateNoticeRes>) {
      state.isLoading = false;
    },
    updateNoticeFail(state, action: PayloadAction<UpdateNoticeRes>) {
      state.isLoading = false;
    },

    // 공지사항 삭제
    deleteNoticeReq(state, action: PayloadAction<DeleteNoticeReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    deleteNoticeSuc(state, action: PayloadAction<DeleteNoticeRes>) {
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
    deleteNoticeFail(state, action: PayloadAction<DeleteNoticeRes>) {
      state.isLoading = false;
    },
  },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
