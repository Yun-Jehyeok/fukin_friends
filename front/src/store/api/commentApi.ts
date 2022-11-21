import axios from "axios";
import {
  CreateCommentReq,
  CreateCommentRes,
  DeleteCommentReq,
  DeleteCommentRes,
  LoadAllCommentsReq,
  LoadAllCommentsSucRes,
  UpdateCommentReq,
  UpdateCommentRes,
} from "../types/comment";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loadAllComments = async (comment: LoadAllCommentsReq) => {
  return await axios.get<LoadAllCommentsSucRes>(
    `/api/comment/path=${comment.path}&${comment.id}`
  );
};

export const createComment = async (comment: CreateCommentReq) => {
  return await axios.post<CreateCommentRes>("/api/comment", comment);
};

export const updateComment = async (comment: UpdateCommentReq) => {
  return await axios.put<UpdateCommentRes>(`/api/comment/${comment.id}`, {
    comment,
  });
};

export const deleteComment = async (comment: DeleteCommentReq) => {
  return await axios.delete<DeleteCommentRes>(`/api/comment/${comment.id}`, {
    data: comment,
  });
};
