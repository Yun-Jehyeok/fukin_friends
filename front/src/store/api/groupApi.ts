import type {
  CreateGroupReq,
  CreateGroupRes,
  LoadGroupsReq,
} from "../types/group";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 전체 그룹 로딩
export const loadGroups = async (userId: LoadGroupsReq) => {
  return await axios.get<CreateGroupRes>(`/api/group/${userId.userId}`);
};

export const createGroup = async (group: CreateGroupReq) => {
  return await axios.post<CreateGroupRes>("/api/group/create", { group });
};
