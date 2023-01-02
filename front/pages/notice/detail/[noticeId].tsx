import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import { AppCont, Body, ContentWrap } from "styles/styleRepo/style";

// import EditorViewer from "components/Editor/EditorViewer";
import Footer from "components/Footer";
import Header from "components/Header";
import Comment from "components/Notice/Comment";
import ViewHeader from "components/ViewHeader";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { commentActions } from "src/store/reducers/commentReducer";
import { noticeActions } from "src/store/reducers/noticeReducer";
import { Calendar } from "styles/styleRepo/icons";

const importantList = [
  {
    id: 0,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 1,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 2,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "2022-08-17 4:00 PM",
    place: "Hannam-dong Chicken",
  },
];

const EditorViewer = dynamic(() => import("components/Editor/EditorViewer"), {
  ssr: false,
});

const Notice: NextPage = () => {
  const { notice } = useSelector((state: RootState) => state.notice);
  const { user } = useSelector((state: RootState) => state.user);
  const { comments } = useSelector((state: RootState) => state.comment);

  const comment = useInput("");

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    let noticeId = router.query.noticeId as string;

    dispatch(noticeActions.loadNoticeReq({ noticeId }));
    dispatch(
      commentActions.loadAllCommentsReq({ path: "notice", id: noticeId })
    );
  }, [dispatch, router]);

  const onSearch = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      console.log("Enter...");
    }
  };

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
    },
    [dispatch, router, comment, user]
  );

  return (
    <AppCont>
      <Header />
      <Body>
        <ContentWrap>
          <Cont>
            <ViewHeader
              title="Notice Detail Page"
              desc="It's Notice Detail Page"
            />
            <div className="w-full flex justify-center mt-20">
              <div className="w-default flex justify-between">
                <div className="w-[870px]">
                  <div key={notice._id} className="w-full mb-20">
                    <div className="font-josefin text-[30px] font-bold text-darkblue hover:underline">
                      {notice.title}
                    </div>
                    <div className="flex mt-3">
                      <div className="flex">
                        <Calendar className="w-4 h-4 bg-white bg-center bg-no-repeat relative top-1 mr-2"></Calendar>
                        <div className="bg-[#ffece2] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1">
                          {notice.date.slice(0, 10)}
                        </div>
                      </div>
                      <div className="bg-[#ffe7f9] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1 ml-3">
                        {notice.location}
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
                      className="w-full h-16 border-[1px] border-solid border-[#8a8fb9] p-3 outline-none font-lato resize-none placeholder:font-lato"
                      {...comment}
                      maxLength={200}
                      placeholder="Write your comment"
                    ></textarea>
                    <button
                      className="w-full h-10 bg-basered outline-none border-none cursor-pointer text-white font-roboto hover:bg-[#f72182]"
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
                <div className="w-[270px]">
                  <div className="w-full">
                    <div className="font-josefin text-darkblue font-bold text-2xl">
                      Search
                    </div>
                    <input
                      className="w-full h-10 border-[1px] border-solid border-[#bdbdd8] outline-none rounded-sm pr-10 pl-3 mt-5 bg-search bg-no-repeat bg-cr12 placeholder:text-darkblue opacity-20"
                      placeholder="Search For Notice"
                      onKeyDown={onSearch}
                    />
                  </div>
                  <div className="w-full mt-20">
                    <div className="font-josefin text-darkblue font-bold text-2xl mb-8">
                      Important Notice
                    </div>
                    {importantList.map((item) => (
                      <div key={item.id} className="mb-6 cursor-pointer">
                        <div className="hover:underline font-josefin text-sm text-[#3f509e]">
                          {item.title}
                        </div>
                        <div className="font-lato text-[11px] text-[#8a8fb9] mt-2">
                          {item.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Cont>
        </ContentWrap>
      </Body>
      <Footer />
    </AppCont>
  );
};

export default Notice;
