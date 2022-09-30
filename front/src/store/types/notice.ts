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
