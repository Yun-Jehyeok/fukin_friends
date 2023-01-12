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
  commentLoading: boolean;
  errMsg: null | string;
  success: boolean;
  isEditSuc: boolean;
}

const initialState: CommentStateType = {
  comments: [],
  commentLoading: false,
  errMsg: null,
  success: false,
  isEditSuc: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    loadAllCommentsReq(state, action: PayloadAction<LoadAllCommentsReq>) {
      state.commentLoading = true;
      state.errMsg = null;
    },
    loadAllCommentsSuc(state, action: PayloadAction<LoadAllCommentsSucRes>) {
      state.commentLoading = false;
      state.comments = action.payload.comments;
    },
    loadAllCommentsFail(state, action: PayloadAction<LoadAllCommentsFailRes>) {
      state.commentLoading = false;
      state.errMsg = action.payload.msg;
      state.comments = [];
    },

    createCommentReq(state, action: PayloadAction<CreateCommentReq>) {
      state.commentLoading = true;
      state.errMsg = null;
    },
    createCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = true;
    },
    createCommentFail(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = false;
    },

    updateCommentReq(state, action: PayloadAction<UpdateCommentReq>) {
      state.commentLoading = true;
      state.errMsg = null;
      state.isEditSuc = false;
    },
    updateCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = true;
      state.isEditSuc = true;
    },
    updateCommentFail(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = false;
      state.isEditSuc = true;
    },

    deleteCommentReq(state, action: PayloadAction<DeleteCommentReq>) {
      state.commentLoading = true;
      state.errMsg = null;
    },
    deleteCommentSuc(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = true;
    },
    deleteCommentFail(state, action: PayloadAction<BaseRes>) {
      state.commentLoading = false;
      state.success = false;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
