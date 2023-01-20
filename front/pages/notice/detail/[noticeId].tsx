import { NextPage } from "next";

import EditorViewer from "components/Editor/EditorViewer";
import Footer from "components/Footer";
import Header from "components/Header";
import Comment from "components/Notice/Comment";
import NoticeSideBar from "components/Notice/Section/NoticeSidebar";
import Spinner from "components/Spinner";
import ViewHeader from "components/ViewHeader";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { commentActions } from "src/store/reducers/commentReducer";
import { noticeActions } from "src/store/reducers/noticeReducer";

const Notice: NextPage = () => {
  const { notice, noticeLoading } = useSelector(
    (state: RootState) => state.notice
  );
  const { user } = useSelector((state: RootState) => state.user);
  const { comments } = useSelector((state: RootState) => state.comment);

  const comment = useInput("");

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    let noticeId = router.query.noticeId as string;

    if (noticeId) {
      dispatch(noticeActions.loadNoticeReq({ noticeId }));
      dispatch(
        commentActions.loadAllCommentsReq({ path: "notice", id: noticeId })
      );
    } else return;
  }, [dispatch, router]);

  const onDeleteNotice = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let deleteConfirm = window.confirm("해당 공지사항을 삭제하시겠습니까?");

      if (deleteConfirm) {
        let noticeId = router.query.noticeId as string;

        dispatch(noticeActions.deleteNoticeReq({ noticeId }));
      }
    },
    [dispatch, router]
  );

  const submitComment = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      if (router && router.query) {
        let noticeId = router.query.noticeId as string;
        let userId = user.id;

        dispatch(
          commentActions.createCommentReq({
            path: "notice",
            pathId: noticeId,
            userId,
            content: comment.value,
          })
        );
      }
    },
    [dispatch, router, comment, user]
  );

  return (
    <div className="w-full min-w-[1200px]">
      {noticeLoading && <Spinner />}
      <Header />
      <div className="w-full flex">
        <div className="w-full relative">
          <div className="w-full">
            <ViewHeader
              title="Notice Detail Page"
              desc="It's Notice Detail Page"
            />
            <div className="w-full flex justify-center mt-20">
              <div className="w-default flex justify-between">
                <div className="w-[870px]">
                  <div key={notice._id} className="w-full mb-20">
                    <div className="font-josefin text-[30px] font-bold text-darkblue">
                      {notice.title}
                    </div>
                    <div className="flex mt-3">
                      <div className="flex">
                        <div className="w-4 h-4 bg-white bg-calendar bg-center bg-no-repeat relative top-1 mr-2"></div>
                        <div className="bg-[#ffece2] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1">
                          {notice.date.slice(0, 10)}
                        </div>
                      </div>
                      <div className="bg-[#ffe7f9] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1 ml-3">
                        {notice.location + ", " + notice.detailLocation}
                      </div>
                    </div>
                    <div className="font-lato text-[#8a8fb9] text-base mt-6">
                      <EditorViewer data={notice.content} />
                    </div>
                    {user.id === notice.creator ? (
                      <div className="w-full flex justify-end mt-9">
                        <div className="flex">
                          <div className="cursor-pointer ml-2 font-lato text-sm text-[#808080]">
                            <Link
                              className="text-[#808080]"
                              href={`/notice/update/${notice._id}`}
                            >
                              Edit
                            </Link>
                          </div>
                          <div
                            className="cursor-pointer ml-2 font-lato text-sm text-[#808080]"
                            onClick={onDeleteNotice}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-full h-fit mt-16">
                    <div className="text-darkblue text-2xl font-bold font-josefin mb-3">
                      Comment
                    </div>
                    <textarea
                      className="w-full h-16 border border-[#8a8fb9] p-3 outline-none font-lato resize-none placeholder:font-lato focus:border-[#8a8fb9] focus:ring-0"
                      {...comment}
                      maxLength={200}
                      placeholder="Write your comment"
                    ></textarea>
                    <button
                      className="w-full h-10 bg-basered outline-none border-none cursor-pointer text-white font-roboto hover:bg-hoverred"
                      onClick={submitComment}
                    >
                      Submit
                    </button>
                    <div className="w-full h-fit mt-12">
                      {Array.isArray(comments)
                        ? comments.length > 0
                          ? comments.map((comment) => (
                              <Comment
                                key={comment._id}
                                comment={comment}
                                user={user}
                              />
                            ))
                          : ""
                        : ""}
                    </div>
                  </div>
                </div>
                <NoticeSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
