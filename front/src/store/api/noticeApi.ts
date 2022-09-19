import type {
  CreateNoticeReq,
  CreateNoticeRes,
  LoadAllNoticeReq,
  LoadAllNoticeRes,
} from "../types/notice";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllNotice = async (groupId: LoadAllNoticeReq) => {
  return await axios.get<LoadAllNoticeRes>(`/api/notice/${groupId}`);
};

export const createNotice = async (notice: CreateNoticeReq) => {
  return await axios.post<CreateNoticeRes>("/api/notice", { notice: notice });
};
