import type {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeRes,
  LoadNoticeReq,
  LoadNoticeSuccessRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllNotice = async () => {
  return await axios.get<LoadAllNoticeRes>(`/api/notice`);
};

export const createNotice = async (notice: CreateNoticeReq) => {
  return await axios.post<CreateNoticeRes>("/api/notice", notice);
};

export const loadNotice = async (noticeId: LoadNoticeReq) => {
  return await axios.get<LoadNoticeSuccessRes>(`/api/notice/${noticeId}`);
};

export const updateNotice = async (notice: UpdateNoticeReq) => {
  return await axios.put<UpdateNoticeRes>(`/api/notice/${notice.id}`, {
    notice,
  });
};

export const deleteNotice = async (noticeId: DeleteNoticeReq) => {
  return await axios.delete<DeleteNoticeRes>(`/api/notice/${noticeId}`);
};
