import { useAppDispatch } from "hooks/reduxHooks";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { commentActions } from "src/store/reducers/commentReducer";
import { IComment } from "src/store/types/comment";
import { IUser } from "src/store/types/user";
import {
  CommentBtn,
  CommentContent,
  CommentCreator,
  CommentDate,
  CommentEditInp,
  CommentEditModeBtn,
  CommentHeader,
} from "styles/styleRepo/noticeStyle";

interface Props {
  comment: IComment;
  user: IUser;
}

const Comment: React.FC<Props> = ({ comment, user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");

  const { isEditSuc } = useSelector((state: RootState) => state.comment);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isEditSuc) {
      setIsEdit(false);

      let noticeId = router.query.noticeId as string;

      dispatch(
        commentActions.loadAllCommentsReq({ path: "notice", id: noticeId })
      );
    }
  }, [router, isEditSuc, dispatch]);

  const onChangeMode = () => {
    setIsEdit(!isEdit);
  };

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;

    setContents(value);
  };

  const deleteComment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let noticeId = router.query.noticeId as string;
      let userId = user.id;
      let commentId = e.currentTarget.dataset.id as string;

      dispatch(
        commentActions.deleteCommentReq({
          id: commentId,
          userId,
          path: "notice",
          pathId: noticeId,
        })
      );
    },
    [router, user, dispatch]
  );

  const onEditComment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let id = comment._id;
      let content = contents;

      dispatch(commentActions.updateCommentReq({ id, content }));
    },
    [dispatch, comment, contents]
  );

  return (
    <div key={comment._id}>
      <CommentHeader>
        <CommentCreator>{comment.creator.name}</CommentCreator>
        {comment.creator._id === user.id ? (
          <CommentBtn>
            {isEdit ? "" : <div onClick={onChangeMode}>Edit</div>}
            <div data-id={comment._id} onClick={deleteComment}>
              Delete
            </div>
          </CommentBtn>
        ) : (
          ""
        )}
      </CommentHeader>
      <div>
        {isEdit ? (
          <CommentEditInp
            onChange={onChangeComment}
            defaultValue={comment.contents}
          ></CommentEditInp>
        ) : (
          <CommentContent>{comment.contents}</CommentContent>
        )}
        {isEdit ? (
          <CommentEditModeBtn>
            <div onClick={onChangeMode}>cancel</div>
            <div onClick={onEditComment}>edit</div>
          </CommentEditModeBtn>
        ) : (
          <CommentDate>{comment.date.slice(0, 10)}</CommentDate>
        )}
      </div>
    </div>
  );
};

export default Comment;
