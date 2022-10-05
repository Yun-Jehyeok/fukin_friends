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
export type LoadAllNoticeRes = {
  notices: INotice[];
  isSuccess: boolean;
};

// 공지 생성
export type CreateNoticeReq = {
  userId: string;
  title: string;
  content: string;
  location: string;
  date: string;
};
export type CreateNoticeRes = { isSuccess: boolean };

// 공지사항 상세
export type LoadNoticeReq = {
  noticeId: string;
};
export type LoadNoticeSuccessRes = {
  notice: INotice;
  isSuccess: boolean;
};
export type LoadNoticeFailureRes = {
  isSuccess: boolean;
  msg: string;
};

// 공지사항 수정
export type UpdateNoticeReq = {
  id: string;
  title: string;
  content: string;
  location: string;
  date: string;
};
export type UpdateNoticeRes = { isSuccess: boolean };

// 공지사항 삭제
export type DeleteNoticeReq = {
  noticeId: string;
};
export type DeleteNoticeRes = { isSuccess: boolean };
