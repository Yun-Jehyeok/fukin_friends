import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import dynamic from "next/dynamic";
import {
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
} from "../../style";
import { EditorContainer } from "./style";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Container>
      <NoticeHeader>
        <div>
          <div>
            <NoticeHeaderTitle>Create Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDescription>
              It&apos;s Just Create Notice Page
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
