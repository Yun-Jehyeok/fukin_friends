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

export interface CreateCommentReq {
  path: string;
  pathId: string;
  userId: string;
  content: string;
}
export interface CreateCommentRes {
  comments: IComment[];
  success: boolean;
}

export interface UpdateCommentReq {
  id: string;
  content: string;
}

export interface DeleteCommentReq {
  id: string;
  userId: string;
  path: string;
  pathId: string;
}
export interface DeleteCommentRes {
  success: boolean;
  comments: IComment[];
}
