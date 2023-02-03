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
  ImageUploadTestReq,
  ImageUploadTestRes,
  UpdateFeedReq,
} from "../types/feed";

export interface FeedStateType {
  feedLoading: boolean;
  errMsg: null | string;
  feeds: IFeed[];
  feed: IFeed;
  allFeedsCnt: number;
  testImg: string;
}

const initialState: FeedStateType = {
  feedLoading: false,
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
  testImg: "",
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    loadAllFeedReq(state, action: PayloadAction<GetAllFeedsReq>) {
      if (action.payload.skip === 0) state.feeds = [];

      state.feedLoading = true;
      state.errMsg = null;
    },
    loadAllFeedSuc(state, action: PayloadAction<GetAllFeedsRes>) {
      state.feedLoading = false;
      state.feeds = state.feeds.concat(action.payload.feeds);
      state.allFeedsCnt = action.payload.allFeedsCnt;
    },
    loadAllFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.feedLoading = false;
      state.errMsg = action.payload.msg;
    },

    createFeedReq(state, action: PayloadAction<CreateFeedReq>) {
      state.feedLoading = true;
      state.errMsg = null;
    },
    createFeedSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/feed";

      state.feedLoading = false;
    },
    createFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.feedLoading = false;
      state.errMsg = action.payload.msg;
    },

    loadFeedReq(state, action: PayloadAction<GetFeedReq>) {
      state.feedLoading = true;
      state.errMsg = null;
    },
    loadFeedSuc(state, action: PayloadAction<GetFeedRes>) {
      state.feed = action.payload.feed;
      state.feedLoading = false;
    },
    loadFeedFail(state, action: PayloadAction<ResponseFail>) {
      state.feedLoading = false;
      state.errMsg = action.payload.msg;
    },

    updateFeedReq(state, action: PayloadAction<UpdateFeedReq>) {
      state.feedLoading = true;
      state.errMsg = null;
    },
    updateFeedSuc(state, action: PayloadAction<BaseRes>) {
      state.feedLoading = false;
    },
    updateFeedFail(state, action: PayloadAction<BaseRes>) {
      state.feedLoading = false;
    },

    deleteFeedReq(state, action: PayloadAction<DeleteFeedReq>) {
      state.feedLoading = true;
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
      state.feedLoading = false;
    },
    deleteFeedFail(state, action: PayloadAction<BaseRes>) {
      state.feedLoading = false;
    },

    imageUploadTestReq(state, action: PayloadAction<ImageUploadTestReq>) {
      state.feedLoading = true;
    },
    imageUploadTestSuc(state, action: PayloadAction<ImageUploadTestRes>) {
      state.testImg = action.payload.url[0];
      state.feedLoading = false;
    },
    imageUploadTestFail(state, action: PayloadAction<BaseRes>) {
      state.feedLoading = false;
    },
  },
});

export const feedActions = feedSlice.actions;
export default feedSlice.reducer;
