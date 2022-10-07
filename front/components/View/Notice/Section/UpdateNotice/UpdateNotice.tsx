import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import { NoticeHeader, NoticeHeaderDesc, NoticeHeaderTitle } from "../../style";
import { EditorCont } from "../CreateNotice/style";
import dynamic from "next/dynamic";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Cont>
      <NoticeHeader>
        <div>
          <div>
            <NoticeHeaderTitle>Updating Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDesc>
              It&apos;s Just Updating Notice Page
            </NoticeHeaderDesc>
          </div>
        </div>
      </NoticeHeader>
      <EditorCont>
        <NoSsrWysiwyg pageName="update" />
      </EditorCont>
    </Cont>
  );
};

export default NoticeCreate;
