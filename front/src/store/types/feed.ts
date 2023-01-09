export interface IFeed {
  _id: string;
  title: string;
  contents: string;
  date: string;
  creator: string;
  previewImg: string;
  images: string[];
  tags: string[];
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
  title: string;
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
  title: string;
  content: string;
  imgs: string[];
  tags: string[];
}

export interface DeleteFeedReq {
  id: string;
}
