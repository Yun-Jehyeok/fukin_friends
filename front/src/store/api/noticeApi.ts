import {
  CreateNoticeReq,
  CreateNoticeRes,
  DeleteNoticeReq,
  DeleteNoticeRes,
  LoadAllNoticeRes,
  LoadImportantNoticesRes,
  LoadMainNoticesRes,
  LoadNoticeSucRes,
  SearchNoticeReq,
  SearchNoticeRes,
  UpdateNoticeReq,
  UpdateNoticeRes,
} from "../types/notice";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllNotice = async (page: number) => {
  return await axios.get<LoadAllNoticeRes>(`/api/notice/skip/${page}`);
};

export const loadMainNotices = async () => {
  return await axios.get<LoadMainNoticesRes>(`/api/notice/main`);
};

export const loadImportantNotices = async () => {
  return await axios.get<LoadImportantNoticesRes>("/api/notice/important");
};

export const searchNotice = async ({ term, skip }: SearchNoticeReq) => {
  return await axios.get<SearchNoticeRes>(`/api/notice/${term}/${skip}`);
};

export const createNotice = async (notice: CreateNoticeReq) => {
  return await axios.post<CreateNoticeRes>("/api/notice", notice);
};

export const loadNotice = async (noticeId: string) => {
  return await axios.get<LoadNoticeSucRes>(`/api/notice/${noticeId}`);
};

export const updateNotice = async (notice: UpdateNoticeReq) => {
  return await axios.put<UpdateNoticeRes>(`/api/notice/${notice.id}`, {
    notice,
  });
};

export const deleteNotice = async (noticeId: DeleteNoticeReq) => {
  return await axios.delete<DeleteNoticeRes>(`/api/notice/${noticeId}`);
};
