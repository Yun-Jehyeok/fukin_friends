import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  CreateNoticeReq,
  CreateNoticeRes,
  LoadAllNoticeRes,
} from "../types/notice";
import type { ResponseFailure } from "../types";
import { INotice } from "../types/notice";

export type NoticeStateType = {
  notices: INotice[];
  isLoading: boolean;
  errMsg: null | string;
  isSuccess: boolean;
};

const initialState: NoticeStateType = {
  notices: [],
  isLoading: false,
  errMsg: null,
  isSuccess: false,
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
  },
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
