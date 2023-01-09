import axios from "axios";
import { BaseRes } from "../types";
import {
  CreateCommentReq,
  DeleteCommentReq,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
} from "../types/comment";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllComments = async (comment: LoadAllCommentsReq) => {
  const { path, id } = comment;

  return await axios.get<LoadAllCommentsSucRes>(
    `/api/comment/path=${path}&${id}`
  );
};

export const createComment = async (comment: CreateCommentReq) => {
  return await axios.post<BaseRes>("/api/comment", comment);
};

export const updateComment = async (comment: UpdateCommentReq) => {
  return await axios.put<BaseRes>(`/api/comment/${comment.id}`, {
    comment,
  });
};

export const deleteComment = async (comment: DeleteCommentReq) => {
  return await axios.delete<BaseRes>(`/api/comment/${comment.id}`, {
    data: comment,
  });
};
