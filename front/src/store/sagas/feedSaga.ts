import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  createFeed,
  deleteFeed,
  loadAllFeeds,
  loadFeed,
  updateFeed,
} from "../api/feedApi";
import { feedActions } from "../reducers/feedReducer";
import { BaseRes } from "../types";
import {
  CreateFeedReq,
  DeleteFeedReq,
  GetAllFeedsReq,
  GetAllFeedsRes,
  GetFeedReq,
  GetFeedRes,
  UpdateFeedReq,
} from "../types/feed";

export default function* feedSaga() {
  function* loadAllFeedApi(action: PayloadAction<GetAllFeedsReq>) {
    try {
      const { data }: AxiosResponse<GetAllFeedsRes> = yield call(
        loadAllFeeds,
        action.payload
      );

      yield put(feedActions.loadAllFeedSuc(data));
    } catch (e: any) {
      yield put(
        feedActions.loadAllFeedFail({
          success: false,
          msg: e.message,
        })
      );
    }
  }
  function* watchloadAllFeed() {
    yield takeLatest(feedActions.loadAllFeedReq, loadAllFeedApi);
  }

  function* createFeedApi(action: PayloadAction<CreateFeedReq>) {
    try {
      const { data }: AxiosResponse<BaseRes> = yield call(
        createFeed,
        action.payload
      );

      yield put(feedActions.createFeedSuc(data));
    } catch (e: any) {
      yield put(
        feedActions.createFeedFail({
          success: false,
          msg: e.message,
        })
      );
    }
  }
  function* watchcreateFeed() {
    yield takeLatest(feedActions.createFeedReq, createFeedApi);
  }

  function* loadFeedApi(action: PayloadAction<GetFeedReq>) {
    try {
      const { data }: AxiosResponse<GetFeedRes> = yield call(
        loadFeed,
        action.payload
      );

      yield put(feedActions.loadFeedSuc(data));
    } catch (e: any) {
      yield put(
        feedActions.loadFeedFail({
          success: false,
          msg: e.message,
        })
      );
    }
  }
  function* watchloadFeed() {
    yield takeLatest(feedActions.loadFeedReq, loadFeedApi);
  }

  function* updateFeedApi(action: PayloadAction<UpdateFeedReq>) {
    try {
      const { data }: AxiosResponse<BaseRes> = yield call(
        updateFeed,
        action.payload
      );

      yield put(feedActions.updateFeedSuc(data));
    } catch (e: any) {
      yield put(
        feedActions.updateFeedFail({
          success: false,
        })
      );
    }
  }
  function* watchupdateFeed() {
    yield takeLatest(feedActions.updateFeedReq, updateFeedApi);
  }

  function* deleteFeedApi(action: PayloadAction<DeleteFeedReq>) {
    try {
      const { data }: AxiosResponse<BaseRes> = yield call(
        deleteFeed,
        action.payload
      );

      yield put(feedActions.deleteFeedSuc(data));
    } catch (e: any) {
      yield put(
        feedActions.deleteFeedFail({
          success: false,
        })
      );
    }
  }
  function* watchdeleteFeed() {
    yield takeLatest(feedActions.deleteFeedReq, deleteFeedApi);
  }

  yield all([
    fork(watchloadAllFeed),
    fork(watchcreateFeed),
    fork(watchloadFeed),
    fork(watchupdateFeed),
    fork(watchdeleteFeed),
  ]);
}
