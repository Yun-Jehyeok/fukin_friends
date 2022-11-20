import {
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeHeader,
  NoticeHeaderDesc,
  NoticeHeaderTitle,
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

import { Viewer } from "@toast-ui/react-editor";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useAppDispatch } from "hooks/reduxHooks";
import { useStringInput } from "hooks/useInput";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { commentActions } from "src/store/reducers/commentReducer";
import { noticeActions } from "src/store/reducers/noticeReducer";
import {
  CommentBtn,
  CommentCont,
  CommentContent,
  CommentContents,
  CommentCreator,
  CommentDate,
  CommentEditInp,
  CommentEditModeBtn,
  CommentHeader,
  CommentInp,
  CommentPaginationBtn,
  CommentPaginationCont,
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

const Notice: NextPage = () => {
  const [isCommentEditMode, setIsCommentEditMode] = useState(false);
  const [editCommentIdx, setEditCommentIdx] = useState(-1);

  const { notice } = useSelector((state: RootState) => state.notice);
  const { user } = useSelector((state: RootState) => state.user);
  const { comments } = useSelector((state: RootState) => state.comment);

  const comment = useStringInput("");

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

  const onSetCommentEditMode = (id: number) => {
    setEditCommentIdx(id);
    setIsCommentEditMode(true);
  };
  const onSetCommentEditModeCancel = () => {
    setEditCommentIdx(-1);
    setIsCommentEditMode(false);
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

      console.log("comment:::", comment);
    },
    [dispatch, router]
  );

  return (
    <AppCont>
      <Header />
      <Body>
        <ContentWrap>
          <Cont>
            <NoticeHeader>
              <div>
                <div>
                  <NoticeHeaderTitle>Notice Detail Page</NoticeHeaderTitle>
                  <NoticeHeaderDesc>
                    It&apos;s Notice Detail Page
                  </NoticeHeaderDesc>
                </div>
              </div>
            </NoticeHeader>
            <NoticeBody>
              <div>
                <NoticeLeft>
                  <NoticeDetailItem key={notice._id}>
                    <NoticeItemTitle>{notice.title}</NoticeItemTitle>
                    <NoticeDatePlace>
                      <NoticeDate>
                        <div></div>
                        <div>{notice.date}</div>
                      </NoticeDate>
                      <NoticePlace>{notice.location}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDesc>
                      <Viewer initialValue={notice.content} />
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
                              <div key={comment._id}>
                                <CommentHeader>
                                  <CommentCreator>
                                    {comment.creator}
                                  </CommentCreator>
                                  {comment._id === 0 ? (
                                    <CommentBtn>
                                      {isCommentEditMode &&
                                      comment._id === editCommentIdx ? (
                                        ""
                                      ) : (
                                        <div
                                          onClick={() =>
                                            onSetCommentEditMode(comment._id)
                                          }
                                        >
                                          Edit
                                        </div>
                                      )}
                                      <div>Delete</div>
                                    </CommentBtn>
                                  ) : (
                                    ""
                                  )}
                                </CommentHeader>
                                {isCommentEditMode &&
                                comment._id === editCommentIdx ? (
                                  <div>
                                    <CommentEditInp value={comment.content} />
                                    <CommentEditModeBtn>
                                      <div onClick={onSetCommentEditModeCancel}>
                                        Cancel
                                      </div>
                                      <div>Edit</div>
                                    </CommentEditModeBtn>
                                  </div>
                                ) : (
                                  <div>
                                    <CommentContent>
                                      {comment.content}
                                    </CommentContent>
                                    <CommentDate>{comment.date}</CommentDate>
                                  </div>
                                )}
                              </div>
                            ))
                          : ""
                        : ""}
                    </CommentContents>
                    <CommentPaginationCont>
                      <div>
                        <CommentPaginationBtn>1</CommentPaginationBtn>
                        <CommentPaginationBtn>2</CommentPaginationBtn>
                        <CommentPaginationBtn>3</CommentPaginationBtn>
                      </div>
                    </CommentPaginationCont>
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
