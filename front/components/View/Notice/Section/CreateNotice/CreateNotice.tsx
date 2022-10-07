import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import dynamic from "next/dynamic";
import { NoticeHeader, NoticeHeaderDesc, NoticeHeaderTitle } from "../../style";
import { EditorCont } from "./style";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Cont>
      <NoticeHeader>
        <div>
          <div>
            <NoticeHeaderTitle>Create Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDesc>
              It&apos;s Just Create Notice Page
            </NoticeHeaderDesc>
          </div>
        </div>
      </NoticeHeader>
      <EditorCont>
        <NoSsrWysiwyg pageName="create" />
      </EditorCont>
    </Cont>
  );
};

export default NoticeCreate;
