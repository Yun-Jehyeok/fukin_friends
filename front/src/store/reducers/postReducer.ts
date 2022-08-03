import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  LoadPostsBody,
  LoadPostsResponse,
  ResponseFailure,
} from '../types';
import { IPost } from '../types/post';

export type PostStateType = {
  posts: IPost[];
  loadPostsLoading: boolean;
  loadPostsDone: null | string;
  loadPostsError: null | string;
};

const initialState: PostStateType = {
  posts: [],
  loadPostsLoading: false,
  loadPostsDone: null,
  loadPostsError: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadPostsRequest(state, action: PayloadAction<LoadPostsBody>) {
      state.loadPostsLoading = true;
      state.loadPostsDone = null;
      state.loadPostsError = null;
    },
    loadPostsSuccess(state, action: PayloadAction<LoadPostsResponse>) {
      state.loadPostsLoading = false;
      state.loadPostsDone = action.payload.data.msg;
      state.posts = [...state.posts, ...action.payload.data.posts];
    },
    loadPostsFailure(state, action: PayloadAction<ResponseFailure>) {
      state.loadPostsLoading = false;
      state.loadPostsError = action.payload.data.msg;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
