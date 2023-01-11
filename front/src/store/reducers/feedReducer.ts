import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseRes, ResponseFail } from "../types";
import {
  CreateFeedReq,
  DeleteFeedReq,
  GetAllFeedsReq,
  GetAllFeedsRes,
  GetFeedReq,
  GetFeedRes,
  IFeed,
  UpdateFeedReq,
} from "../types/feed";

export interface FeedStateType {
  isLoading: boolean;
  errMsg: null | string;
  feeds: IFeed[];
  feed: IFeed;
  allFeedsCnt: number;
}

const initialState: FeedStateType = {
  isLoading: false,
  errMsg: "",
  feeds: [],
  allFeedsCnt: 0,
  feed: {
    _id: "",
    content: "",
    date: "",
    creator: "",
    previewImg: "",
    imgs: [],
    tags: [],
    creatorName: "",
  },
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    loadAllFeedReq(state, action: PayloadAction<GetAllFeedsReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadAllFeedSuc(state, action: PayloadAction<GetAllFeedsRes>) {
      state.isLoading = false;
      state.feeds = state.feeds.concat(action.payload.feeds);
      state.allFeedsCnt = action.payload.allFeedsCnt;
    },
    loadAllFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    createFeedReq(state, action: PayloadAction<CreateFeedReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    createFeedSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/feed";

      state.isLoading = false;
    },
    createFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    loadFeedReq(state, action: PayloadAction<GetFeedReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    loadFeedSuc(state, action: PayloadAction<GetFeedRes>) {
      state.feed = action.payload.feed;
      state.isLoading = false;
    },
    loadFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
    },

    updateFeedReq(state, action: PayloadAction<UpdateFeedReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    updateFeedSuc(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
    },
    updateFeedFail(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
    },

    deleteFeedReq(state, action: PayloadAction<DeleteFeedReq>) {
      state.isLoading = true;
      state.errMsg = null;
    },
    deleteFeedSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/feed";

      state.feed = {
        _id: "",
        content: "",
        date: "",
        creator: "",
        previewImg: "",
        imgs: [],
        tags: [],
        creatorName: "",
      };
      state.isLoading = false;
    },
    deleteFeedFail(state, action: PayloadAction<BaseRes>) {
      state.isLoading = false;
    },
  },
});

export const feedActions = feedSlice.actions;
export default feedSlice.reducer;
