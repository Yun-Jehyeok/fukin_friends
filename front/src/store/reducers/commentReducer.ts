import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {
  CreateCommentReq,
  CreateCommentRes,
  DeleteCommentReq,
  DeleteCommentRes,
  IComment,
  LoadAllCommentsFailRes,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
  UpdateCommentRes,
} from "../types/comment";

export interface CommentStateType {
  comments: IComment[];
  isLoading: boolean;
  errMsg: null | string;
  isSuc: boolean;
  isEditSuc: boolean;
}

const initialState: CommentStateType = {
  comments: [],
  isLoading: false,
  errMsg: null,
  isSuc: false,
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
    createCommentSuc(state, action: PayloadAction<CreateCommentRes>) {
      state.isLoading = false;
      state.isSuc = true;
    },
    createCommentFail(state, action: PayloadAction<CreateCommentRes>) {
      state.isLoading = false;
      state.isSuc = false;
    },

    // 댓글 수정
    updateCommentReq(state, action: PayloadAction<UpdateCommentReq>) {
      state.isLoading = true;
      state.errMsg = null;
      state.isEditSuc = false;
    },
    updateCommentSuc(state, action: PayloadAction<UpdateCommentRes>) {
      state.isLoading = false;
      state.isSuc = true;
      state.isEditSuc = true;
    },
    updateCommentFail(state, action: PayloadAction<UpdateCommentRes>) {
      state.isLoading = false;
      state.isSuc = false;
      state.isEditSuc = true;
    },

    // 댓글 삭제
    deleteCommentReq(state, action: PayloadAction<DeleteCommentReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    deleteCommentSuc(state, action: PayloadAction<DeleteCommentRes>) {
      state.isLoading = false;
      state.isSuc = true;
    },
    deleteCommentFail(state, action: PayloadAction<DeleteCommentRes>) {
      state.isLoading = false;
      state.isSuc = false;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
