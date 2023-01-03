import ViewHeader from "components/ViewHeader";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

const NoticeCreate: NextPage = () => {
  return (
    <div className="w-full">
      <ViewHeader
        title="Create Notice Page"
        desc="It's Just Create Notice Page"
      />
      <div className="w-full h-fit mt-[120px] -mb-20 flex justify-center">
        <NoSsrWysiwyg pageName="create" />
      </div>
    </div>
  );
};

export default NoticeCreate;
