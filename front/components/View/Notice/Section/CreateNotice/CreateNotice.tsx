import ViewHeader from "components/View/Header";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Cont } from "styles/styleRepo/global";
import { EditorCont } from "./style";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Cont>
      <ViewHeader
        title="Create Notice Page"
        desc="It's Just Create Notice Page"
      />
      <EditorCont>
        <NoSsrWysiwyg pageName="create" />
      </EditorCont>
    </Cont>
  );
};

export default NoticeCreate;
