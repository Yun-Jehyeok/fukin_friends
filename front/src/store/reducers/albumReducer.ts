import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseRes, ResponseFail } from "../types";
import {
  CreateAlbumReq,
  CreateAlbumRes,
  DeleteAlbumReq,
  GetAllAlbumsReq,
  GetAllAlbumsRes,
  IAlbum,
} from "../types/album";

export interface AlbumStateType {
  albumLoading: boolean;
  errMsg: null | string;
  albums: IAlbum[];
  allAlbumsCnt: number;
}

const initialState: AlbumStateType = {
  albumLoading: false,
  errMsg: "",
  albums: [],
  allAlbumsCnt: 0,
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    loadAllalbumReq(state, action: PayloadAction<GetAllAlbumsReq>) {
      if (action.payload.skip === 0) state.albums = [];

      state.albumLoading = true;
      state.errMsg = null;
    },
    loadAllalbumSuc(state, action: PayloadAction<GetAllAlbumsRes>) {
      state.albumLoading = false;
      state.albums = state.albums.concat(action.payload.albums);
      state.allAlbumsCnt = action.payload.allAlbumsCnt;
    },
    loadAllalbumFail(state, action: PayloadAction<ResponseFail>) {
      state.albumLoading = false;
      state.errMsg = action.payload.msg;
    },

    createAlbumReq(state, action: PayloadAction<CreateAlbumReq>) {
      state.albumLoading = true;
    },
    createAlbumSuc(state, action: PayloadAction<CreateAlbumRes>) {
      state.albumLoading = false;
      state.albums = action.payload.url;
    },
    createAlbumFail(state, action: PayloadAction<BaseRes>) {
      state.albumLoading = false;
    },

    deleteAlbumReq(state, action: PayloadAction<DeleteAlbumReq>) {
      state.albumLoading = true;
      state.errMsg = null;
    },
    deleteAlbumSuc(state, action: PayloadAction<BaseRes>) {
      window.location.href = "/album";

      state.albumLoading = false;
    },
    deleteAlbumFail(state, action: PayloadAction<BaseRes>) {
      state.albumLoading = false;
    },
  },
});

export const albumActions = albumSlice.actions;
export default albumSlice.reducer;
