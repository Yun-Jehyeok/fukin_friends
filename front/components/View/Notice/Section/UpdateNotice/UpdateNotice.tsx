import ViewHeader from "components/View/Header";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Cont } from "styles/styleRepo/global";
import { EditorCont } from "../CreateNotice/style";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <Cont>
      <ViewHeader
        title="Updating Notice Page"
        desc="It's Just Updating Notice Page"
      />
      <EditorCont>
        <NoSsrWysiwyg pageName="update" />
      </EditorCont>
    </Cont>
  );
};

export default NoticeCreate;
