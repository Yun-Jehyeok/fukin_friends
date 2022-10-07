export interface INotice {
  _id: string;
  title: string;
  content: string;
  date: string;
  registerDate: string;
  creator: string;
  location: string;
}

// 전체 공지사항
export interface LoadAllNoticeRes {
  notices: INotice[];
  isSuc: boolean;
}

// 공지 생성
export interface CreateNoticeReq {
  userId: string;
  title: string;
  content: string;
  location: string;
  date: string;
}
export interface CreateNoticeRes {
  isSuc: boolean;
}

// 공지사항 상세
export interface LoadNoticeReq {
  noticeId: string;
}
export interface LoadNoticeSucRes {
  notice: INotice;
  isSuc: boolean;
}
export interface LoadNoticeFailRes {
  isSuc: boolean;
  msg: string;
}

// 공지사항 수정
export interface UpdateNoticeReq {
  id: string;
  title: string;
  content: string;
  location: string;
  date: string;
}
export interface UpdateNoticeRes {
  isSuc: boolean;
}

// 공지사항 삭제
export interface DeleteNoticeReq {
  noticeId: string;
}
export interface DeleteNoticeRes {
  isSuc: boolean;
}
