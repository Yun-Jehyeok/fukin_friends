import ViewHeader from "components/ViewHeader";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Cont } from "styles/styleRepo/global";

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
      <div className="w-full h-fit mt-[120px] -mb-20 flex justify-center">
        <NoSsrWysiwyg pageName="update" />
      </div>
    </Cont>
  );
};

export default NoticeCreate;
