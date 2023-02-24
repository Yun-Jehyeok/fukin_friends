import axios from "axios";
import { BaseRes } from "../types";
import {
  CreateAlbumReq,
  CreateAlbumRes,
  DeleteAlbumReq,
  GetAllAlbumsReq,
  GetAllAlbumsRes,
} from "../types/album";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllAlbums = async (req: GetAllAlbumsReq) => {
  return await axios.get<GetAllAlbumsRes>(`/api/album/skip/${req.skip}`);
};

export const createAlbum = async (imgs: CreateAlbumReq) => {
  return await axios.post<CreateAlbumRes>("/api/album/image", imgs.imgs);
};

export const deleteAlbum = async (imgs: DeleteAlbumReq) => {
  return await axios.post<BaseRes>("/api/album/image", imgs);
};
