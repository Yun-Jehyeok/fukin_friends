export interface IFeed {
  _id: string;
  content: string;
  date: string;
  creator: string;
  previewImg: string;
  imgs: string[];
  tags: string[];
  creatorName: string;
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
  userId: string;
}

export interface ImageUploadTestReq {
  imgs: FormData;
}
export interface ImageUploadTestRes {
  success: boolean;
}
