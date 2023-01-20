export interface INotice {
  _id: string;
  title: string;
  content: string;
  date: string;
  registerDate: string;
  creator: string;
  location: string;
  detailLocation: string;
  isImportant: boolean;
}

export interface LoadAllNoticeReq {
  page: number;
}
export interface LoadAllNoticeRes {
  notices: INotice[];
  success: boolean;
  allNoticesCnt: number;
}

export interface LoadMainNoticesRes {
  notices: INotice[];
  success: boolean;
}

export interface LoadImportantNoticesRes {
  success: boolean;
  notices: INotice[];
}

export interface SearchNoticeReq {
  term: string;
  skip: number;
}
export interface SearchNoticeRes {
  notices: INotice[];
  success: boolean;
  searchAllCnt: number;
}

export interface CreateNoticeReq {
  userId: string;
  title: string;
  content: string;
  location: string;
  detailLocation: string;
  date: string;
  isImportant: boolean;
}

export interface LoadNoticeReq {
  noticeId: string;
}
export interface LoadNoticeSucRes {
  notice: INotice;
  success: boolean;
}
export interface LoadNoticeFailRes {
  success: boolean;
  msg: string;
}

export interface UpdateNoticeReq {
  id: string;
  title: string;
  content: string;
  location: string;
  detailLocation: string;
  date: string;
  isImportant: boolean;
}

export interface DeleteNoticeReq {
  noticeId: string;
}
