export interface INotice {
  id: string;
  title: string;
  content: string;
}

// 전체 공지사항
export type LoadAllNoticeReq = {
  groupId: string;
};
export type LoadAllNoticeRes = {
  notices: INotice[];
  isSuccess: boolean;
};

// 공지 생성
export type CreateNoticeReq = {
  userId: string;
  groupId: string;
  title: string;
  content: string;
};
export type CreateNoticeRes = { isSuccess: boolean };
