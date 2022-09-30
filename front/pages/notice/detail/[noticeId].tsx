import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import {
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
  NoticeItemDescription,
  NoticeItemTitle,
  NoticeLeft,
  NoticePlace,
  NoticeRight,
  NoticeSearch,
} from "components/View/Notice/style";
import { Body, AppContainer, ContentWrap } from "styles/styleRepo/style";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {
  CommentBtn,
  CommentContainer,
  CommentContent,
  CommentContents,
  CommentCreator,
  CommentDate,
  CommentEditInput,
  CommentEditModeBtn,
  CommentHeader,
  CommentInput,
  CommentPaginationBtn,
  CommentPaginationContainer,
  CommentSubmitBtn,
  NoticeControllerBtn,
  NoticeControllerBtnContainer,
  NoticeDetailItem,
} from "styles/styleRepo/noticeDetailStyle";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import { noticeActions } from "src/store/reducers/noticeReducer";
import { useRouter } from "next/router";
import { RootState } from "src/configureStore";
import { useSelector } from "react-redux";
import { Viewer } from "@toast-ui/react-editor";

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

const comments = [
  {
    id: 0,
    creator: "Yun Jehyeok",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "2022-08-12 6:00 PM",
  },
  {
    id: 1,
    creator: "Jung Jongyun",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "2022-08-17 4:00 PM",
  },
  {
    id: 2,
    creator: "Yun Yejin",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "2022-08-17 4:00 PM",
  },
];

const Notice: NextPage = () => {
  const [isCommentEditMode, setIsCommentEditMode] = useState(false);
  const [editCommentIdx, setEditCommentIdx] = useState(-1);

  const { notice } = useSelector((state: RootState) => state.notice);
  const { user } = useSelector((state: RootState) => state.user);

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    let noticeId = router.query.noticeId || "";

    dispatch(noticeActions.loadNoticeRequest(noticeId));
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

      let noticeId = router.query.noticeId || "";

      dispatch(noticeActions.deleteNoticeRequest(noticeId));
    },
    [dispatch, router]
  );

  return (
    <AppContainer>
      <Header />
      <Body>
        <ContentWrap>
          <Container>
            <NoticeHeader>
              <div>
                <div>
                  <NoticeHeaderTitle>Notice Detail Page</NoticeHeaderTitle>
                  <NoticeHeaderDescription>
                    It&apos;s Notice Detail Page
                  </NoticeHeaderDescription>
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
                    <NoticeItemDescription>
                      <Viewer initialValue={notice.content} />
                    </NoticeItemDescription>
                    {user.id === notice.creator ? (
                      <NoticeControllerBtnContainer>
                        <div>
                          <NoticeControllerBtn>Edit</NoticeControllerBtn>
                          <NoticeControllerBtn onClick={onDeleteNotice}>
                            Delete
                          </NoticeControllerBtn>
                        </div>
                      </NoticeControllerBtnContainer>
                    ) : (
                      ""
                    )}
                  </NoticeDetailItem>
                  <CommentContainer>
                    <div>Comment</div>
                    <CommentInput
                      maxLength={200}
                      placeholder="Write your comment"
                    />
                    <CommentSubmitBtn>Submit</CommentSubmitBtn>
                    <CommentContents>
                      {Array.isArray(comments)
                        ? comments.length > 0
                          ? comments.map((comment) => (
                              <div key={comment.id}>
                                <CommentHeader>
                                  <CommentCreator>
                                    {comment.creator}
                                  </CommentCreator>
                                  {comment.id === 0 ? (
                                    <CommentBtn>
                                      {isCommentEditMode &&
                                      comment.id === editCommentIdx ? (
                                        ""
                                      ) : (
                                        <div
                                          onClick={() =>
                                            onSetCommentEditMode(comment.id)
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
                                comment.id === editCommentIdx ? (
                                  <div>
                                    <CommentEditInput value={comment.content} />
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
                    <CommentPaginationContainer>
                      <div>
                        <CommentPaginationBtn>1</CommentPaginationBtn>
                        <CommentPaginationBtn>2</CommentPaginationBtn>
                        <CommentPaginationBtn>3</CommentPaginationBtn>
                      </div>
                    </CommentPaginationContainer>
                  </CommentContainer>
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
          </Container>
        </ContentWrap>
      </Body>
      <Footer />
    </AppContainer>
  );
};

export default Notice;
