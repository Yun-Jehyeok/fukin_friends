export interface IComment {
  _id: string;
  contents: string;
  creator: string;
  path: string;
  date: string;
}

// 전체 댓글
export interface LoadAllCommentsReq {
  path: string;
  id: string;
}
export interface LoadAllCommentsSucRes {
  isSuc: boolean;
  comments: IComment[];
}
export interface LoadAllCommentsFailRes {
  isSuc: boolean;
  msg: string;
}

// 댓글 생성
export interface CreateCommentReq {
  path: string;
  userId: string;
  content: string;
}

export interface CreateCommentRes {
  isSuc: boolean;
}

// 댓글 수정
export interface UpdateCommentReq {
  id: string;
  content: string;
}
export interface UpdateCommentRes {
  isSuc: boolean;
}

// 댓글 삭제
export interface DeleteCommentReq {
  id: string;
  userId: string;
  path: string;
  pathId: string;
}
export interface DeleteCommentRes {
  isSuc: boolean;
}
