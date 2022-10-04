import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import {
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
} from "../../style";
import { EditorContainer } from "../CreateNotice/style";
import { useStringInput } from "hooks/useInput";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "hooks/reduxHooks";
import { noticeActions } from "src/store/reducers/noticeReducer";
import dynamic from "next/dynamic";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/UpdateEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  const title = useStringInput("");
  const date = useStringInput("");
  const location = useStringInput("");

  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    let noticeId = router.query.noticeId || "";

    dispatch(noticeActions.loadNoticeRequest(noticeId));
  }, [dispatch, router]);

  return (
    <Container>
      <NoticeHeader>
        {title.value}
        <div>
          <div>
            <NoticeHeaderTitle>Updating Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDescription>
              It's Just Updating Notice Page
            </NoticeHeaderDescription>
          </div>
        </div>
      </NoticeHeader>
      <EditorContainer>
        <NoSsrWysiwyg />
      </EditorContainer>
    </Container>
  );
};

export default NoticeCreate;
