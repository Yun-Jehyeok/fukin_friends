import { IUser } from "./user";

export interface IFeed {
  _id: string;
  content: string;
  date: string;
  creator: string;
  previewImg: string;
  imgs: string[];
  tags: string[];
  user: IUser;
}

export interface GetAllFeedsReq {
  skip: number;
}
export interface GetAllFeedsRes {
  success: boolean;
  allFeedsCnt: number;
  feeds: IFeed[];
}

export interface CreateFeedReq {
  userId: string;
  content: string;
  imgs: string[];
  tags: string[];
}

export interface GetFeedReq {
  id: string;
}
export interface GetFeedRes {
  success: boolean;
  feed: IFeed;
}

export interface UpdateFeedReq {
  id: string;
  content: string;
  imgs: string[];
  tags: string[];
}

export interface DeleteFeedReq {
  id: string;
}
