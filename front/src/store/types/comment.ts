export interface IComment {
  _id: string;
  content: string;
  creator: {
    _id: string;
    name: string;
    email: string;
  };
  path: string;
  pathId: string;
  date: string;
}

// 전체 댓글
export interface LoadAllCommentsReq {
  path: string;
  id: string;
}
export interface LoadAllCommentsSucRes {
  success: boolean;
  comments: IComment[];
}
export interface LoadAllCommentsFailRes {
  success: boolean;
  msg: string;
}

// 댓글 생성
export interface CreateCommentReq {
  path: string;
  pathId: string;
  userId: string;
  content: string;
}

// 댓글 수정
export interface UpdateCommentReq {
  id: string;
  content: string;
}

// 댓글 삭제
export interface DeleteCommentReq {
  id: string;
  userId: string;
  path: string;
  pathId: string;
}
