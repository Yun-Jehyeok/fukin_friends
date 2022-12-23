import {
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeItemDesc,
  NoticeItemTitle,
  NoticeLeft,
  NoticePlace,
  NoticeRight,
  NoticeSearch,
} from "components/View/Notice/style";
import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import { AppCont, Body, ContentWrap } from "styles/styleRepo/style";

// import EditorViewer from "components/Editor/EditorViewer";
import Footer from "components/Footer";
import Header from "components/Header";
import ViewHeader from "components/View/Header";
import Comment from "components/View/Notice/Comment/Comment";
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
import {
  CommentCont,
  CommentContents,
  CommentInp,
  CommentSubmitBtn,
  NoticeControllerBtn,
  NoticeControllerBtnCont,
  NoticeDetailItem,
} from "styles/styleRepo/noticeStyle";

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
            <NoticeBody>
              <div>
                <NoticeLeft>
                  <NoticeDetailItem key={notice._id}>
                    <NoticeItemTitle>{notice.title}</NoticeItemTitle>
                    <NoticeDatePlace>
                      <NoticeDate>
                        <div></div>
                        <div>{notice.date.slice(0, 10)}</div>
                      </NoticeDate>
                      <NoticePlace>{notice.location}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDesc>
                      <EditorViewer data={notice.content} />
                    </NoticeItemDesc>
                    {user.id === notice.creator ? (
                      <NoticeControllerBtnCont>
                        <div>
                          <NoticeControllerBtn>
                            <Link href={`/notice/update/${notice._id}`}>
                              Edit
                            </Link>
                          </NoticeControllerBtn>
                          <NoticeControllerBtn onClick={onDeleteNotice}>
                            Delete
                          </NoticeControllerBtn>
                        </div>
                      </NoticeControllerBtnCont>
                    ) : (
                      ""
                    )}
                  </NoticeDetailItem>
                  <CommentCont>
                    <div>Comment</div>
                    <CommentInp
                      {...comment}
                      maxLength={200}
                      placeholder="Write your comment"
                    ></CommentInp>
                    <CommentSubmitBtn onClick={submitComment}>
                      Submit
                    </CommentSubmitBtn>
                    <CommentContents>
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
                    </CommentContents>
                  </CommentCont>
                </NoticeLeft>
                <NoticeRight>
                  <NoticeSearch>
                    <div>Search</div>
                    <input
                      placeholder="Search For Notice"
                      onKeyDown={onSearch}
                    />
                  </NoticeSearch>
                  <ImportantNotice>
                    <div>Important Notice</div>
                    {importantList.map((item) => (
                      <ImportantItem key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.date}</div>
                      </ImportantItem>
                    ))}
                  </ImportantNotice>
                </NoticeRight>
              </div>
            </NoticeBody>
          </Cont>
        </ContentWrap>
      </Body>
      <Footer />
    </AppCont>
  );
};

export default Notice;
