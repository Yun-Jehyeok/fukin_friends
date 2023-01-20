import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { BaseRes, ResponseFail } from "../types";
import type {
  CreateNoticeReq,
  DeleteNoticeReq,
  LoadAllNoticeReq,
  LoadAllNoticeRes,
  LoadImportantNoticesRes,
  LoadMainNoticesRes,
  LoadNoticeFailRes,
  LoadNoticeReq,
  LoadNoticeSucRes,
  SearchNoticeReq,
  SearchNoticeRes,
  UpdateNoticeReq,
} from "../types/notice";
import { INotice } from "../types/notice";

export interface NoticeStateType {
  notices: INotice[];
  importantNotices: INotice[];
  noticeLoading: boolean;
  errMsg: null | string;
  success: boolean;
  notice: INotice;
  allNoticesCnt: number;
}

const initialState: NoticeStateType = {
  notices: [],
  importantNotices: [],
  noticeLoading: false,
  errMsg: null,
  success: false,
  allNoticesCnt: 0,
  notice: {
    _id: "",
    title: "",
    content: "",
    date: "",
    registerDate: "",
    creator: "",
    location: "",
    detailLocation: "",
    isImportant: false,
  },
};

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    loadAllNoticeReq(state, action: PayloadAction<LoadAllNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    loadAllNoticeSuc(state, action: PayloadAction<LoadAllNoticeRes>) {
      state.noticeLoading = false;
      state.notices = action.payload.notices;
      state.allNoticesCnt = action.payload.allNoticesCnt;
    },
    loadAllNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    loadMainNoticeReq(state) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    loadMainNoticeSuc(state, action: PayloadAction<LoadMainNoticesRes>) {
      state.noticeLoading = false;
      state.notices = action.payload.notices;
    },
    loadMainNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    loadImportantNoticeReq(state) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    loadImportantNoticeSuc(
      state,
      action: PayloadAction<LoadImportantNoticesRes>
    ) {
      state.noticeLoading = false;
      state.importantNotices = action.payload.notices;
    },
    loadImportantNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    searchNoticeReq(state, action: PayloadAction<SearchNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    searchNoticeSuc(state, action: PayloadAction<SearchNoticeRes>) {
      state.noticeLoading = false;
      state.notices = action.payload.notices;
      state.allNoticesCnt = action.payload.searchAllCnt;
    },
    searchNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    createNoticeReq(state, action: PayloadAction<CreateNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    createNoticeSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/notice";

      state.noticeLoading = false;
    },
    createNoticeFail(state, action: PayloadAction<ResponseFail>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    loadNoticeReq(state, action: PayloadAction<LoadNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    loadNoticeSuc(state, action: PayloadAction<LoadNoticeSucRes>) {
      state.notice = action.payload.notice;
      state.noticeLoading = false;
    },
    loadNoticeFail(state, action: PayloadAction<LoadNoticeFailRes>) {
      state.noticeLoading = false;
      state.errMsg = action.payload.msg;
    },

    updateNoticeReq(state, action: PayloadAction<UpdateNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    updateNoticeSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/notice";

      state.noticeLoading = false;
    },
    updateNoticeFail(state, action: PayloadAction<BaseRes>) {
      state.noticeLoading = false;
    },

    deleteNoticeReq(state, action: PayloadAction<DeleteNoticeReq>) {
      state.noticeLoading = true;
      state.errMsg = null;
    },
    deleteNoticeSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/notice";

      state.notice = {
        _id: "",
        title: "",
        content: "",
        date: "",
        registerDate: "",
        creator: "",
        location: "",
        detailLocation: "",
        isImportant: false,
      };
      state.noticeLoading = false;
    },
    deleteNoticeFail(state, action: PayloadAction<BaseRes>) {
      state.noticeLoading = false;
    },
  },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
