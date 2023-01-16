import { useAppDispatch } from "hooks/reduxHooks";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { commentActions } from "src/store/reducers/commentReducer";
import { IComment } from "src/store/types/comment";
import { IUser } from "src/store/types/user";

interface Props {
  comment: IComment;
  user: IUser;
}

const Comment: React.FC<Props> = ({ comment, user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");

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

    setContent(value);
  };

  const deleteComment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let noticeId = router.query.noticeId as string;
      let userId = user.id;
      let commentId = e.currentTarget.dataset.id as string;

      const confirm = window.confirm("댓글을 삭제하시겠습니까?");

      if (confirm) {
        dispatch(
          commentActions.deleteCommentReq({
            id: commentId,
            userId,
            path: "notice",
            pathId: noticeId,
          })
        );
      }
    },
    [router, user, dispatch]
  );

  const onEditComment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let id = comment._id;

      dispatch(commentActions.updateCommentReq({ id, content }));
    },
    [dispatch, comment, content]
  );

  return (
    <div key={comment._id} className="mb-9">
      <div className="w-full flex justify-between">
        <div className="text-darkblue font-josefin text-lg font-bold mb-2">
          {comment.creator.name}
        </div>
        {comment.creator._id === user.id ? (
          <div className="flex">
            {isEdit ? (
              ""
            ) : (
              <div
                className="font-lato text-sm text-gray-500 ml-2 cursor-pointer"
                onClick={onChangeMode}
              >
                Edit
              </div>
            )}
            <div
              className="font-lato text-sm text-gray-500 ml-2 cursor-pointer"
              data-id={comment._id}
              onClick={deleteComment}
            >
              Delete
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {isEdit ? (
          <textarea
            className="w-full h-20 outline-none p-3 border border-solid border-[#8a8fb9] font-lato resize-none rounded-3 placeholder:font-lato"
            onChange={onChangeComment}
            defaultValue={comment.content}
          ></textarea>
        ) : (
          <div className="text-base text-[#3f509e] font-lato mb-2">
            {comment.content}
          </div>
        )}
        {isEdit ? (
          <div className="flex justify-end mt-2">
            <div
              className="text-sm text-gray-500 font-lato cursor-pointer ml-2 hover:text-basered"
              onClick={onChangeMode}
            >
              cancel
            </div>
            <div
              className="text-sm text-gray-500 font-lato cursor-pointer ml-2 hover:text-basered"
              onClick={onEditComment}
            >
              edit
            </div>
          </div>
        ) : (
          <div className="text-[#8a8fb9] text-sm font-lato">
            {comment.date.slice(0, 10)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
