import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { createAlbum, deleteAlbum, loadAllAlbums } from "../api/albumApi";
import { albumActions } from "../reducers/albumReducer";
import { BaseRes } from "../types";
import {
  CreateAlbumReq,
  CreateAlbumRes,
  DeleteAlbumReq,
  GetAllAlbumsReq,
  GetAllAlbumsRes,
} from "../types/album";

export default function* albumSaga() {
  function* loadAllalbumApi(action: PayloadAction<GetAllAlbumsReq>) {
    try {
      const { data }: AxiosResponse<GetAllAlbumsRes> = yield call(
        loadAllAlbums,
        action.payload
      );

      yield put(albumActions.loadAllalbumSuc(data));
    } catch (e: any) {
      yield put(
        albumActions.loadAllalbumFail({
          success: false,
          msg: e.message,
        })
      );
    }
  }
  function* watchloadAllalbum() {
    yield takeLatest(albumActions.loadAllalbumReq, loadAllalbumApi);
  }

  function* createAlbumApi(action: PayloadAction<CreateAlbumReq>) {
    try {
      const { data }: AxiosResponse<CreateAlbumRes> = yield call(
        createAlbum,
        action.payload
      );

      yield put(albumActions.createAlbumSuc(data));
    } catch (e: any) {
      yield put(
        albumActions.createAlbumFail({
          success: false,
        })
      );
    }
  }
  function* watchCreateAlbum() {
    yield takeLatest(albumActions.createAlbumReq, createAlbumApi);
  }

  function* deleteAlbumApi(action: PayloadAction<DeleteAlbumReq>) {
    try {
      const { data }: AxiosResponse<BaseRes> = yield call(
        deleteAlbum,
        action.payload
      );

      yield put(albumActions.deleteAlbumSuc(data));
    } catch (e: any) {
      yield put(
        albumActions.deleteAlbumFail({
          success: false,
        })
      );
    }
  }
  function* watchdeletealbum() {
    yield takeLatest(albumActions.deleteAlbumReq, deleteAlbumApi);
  }

  yield all([
    fork(watchloadAllalbum),
    fork(watchCreateAlbum),
    fork(watchdeletealbum),
  ]);
}
