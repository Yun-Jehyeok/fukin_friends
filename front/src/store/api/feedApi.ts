import axios from "axios";
import { BaseRes } from "../types";
import {
  CreateFeedReq,
  DeleteFeedReq,
  GetAllFeedsReq,
  GetAllFeedsRes,
  GetFeedReq,
  GetFeedRes,
  TestReq,
  TestRes,
  UpdateFeedReq,
} from "../types/feed";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllFeeds = async (req: GetAllFeedsReq) => {
  return await axios.get<GetAllFeedsRes>(`/api/feed/skip/${req.skip}`);
};

export const createFeed = async (feed: CreateFeedReq) => {
  return await axios.post<BaseRes>("/api/feed", feed);
};

export const loadFeed = async (feed: GetFeedReq) => {
  return await axios.get<GetFeedRes>(`/api/feed/${feed.id}`);
};

export const updateFeed = async (feed: UpdateFeedReq) => {
  return await axios.put<BaseRes>(`/api/feed/${feed.id}`, {
    feed,
  });
};

export const deleteFeed = async (feed: DeleteFeedReq) => {
  return await axios.delete<BaseRes>(`/api/feed/${feed.id}/${feed.userId}`);
};

export const testApi = async (imgs: TestReq) => {
  return await axios.post<TestRes>("/api/feed/image", imgs);
};
