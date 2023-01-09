import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { BaseRes } from "../types";
import {
  CreateCommentReq,
  DeleteCommentReq,
  IComment,
  LoadAllCommentsFailRes,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
} from "../types/comment";

export interface CommentStateType {
  comments: IComment[];
  isLoading: boolean;
  errMsg: null | string;
  success: boolean;
  isEditSuc: boolean;
}

const initialState: CommentStateType = {
  comments: [],
  isLoading: false,
  errMsg: null,
  success: false,
  isEditSuc: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // 전체 댓글 로딩
    loadAllCommentsReq(state, action: PayloadAction<LoadAllCommentsReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadAllCommentsSuc(state, action: PayloadAction<LoadAllCommentsSucRes>) {
      state.isLoading = false;
      state.comments = action.payload.comments;
    },
    loadAllCommentsFail(state, action: PayloadAction<LoadAllCommentsFailRes>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
      state.comments = [];
    },

    // 댓글 생성
    createCommentReq(state, action: PayloadAction<CreateCommentReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    createCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = true;
    },
    createCommentFail(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = false;
    },

    // 댓글 수정
    updateCommentReq(state, action: PayloadAction<UpdateCommentReq>) {
      state.isLoading = true;
      state.errMsg = null;
      state.isEditSuc = false;
    },
    updateCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = true;
      state.isEditSuc = true;
    },
    updateCommentFail(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = false;
      state.isEditSuc = true;
    },

    // 댓글 삭제
    deleteCommentReq(state, action: PayloadAction<DeleteCommentReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    deleteCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = true;
    },
    deleteCommentFail(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
      state.success = false;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
