import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import {
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
} from "../../style";
import { EditorContainer } from "../CreateNotice/style";
import dynamic from "next/dynamic";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/UpdateEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Container>
      <NoticeHeader>
        <div>
          <div>
            <NoticeHeaderTitle>Updating Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDescription>
              It&apos;s Just Updating Notice Page
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
