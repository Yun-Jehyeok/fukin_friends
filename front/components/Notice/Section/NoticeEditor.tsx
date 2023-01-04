import ViewHeader from "components/ViewHeader";
import dynamic from "next/dynamic";

const NoSsrWysiwyg = dynamic(() => import("components/Editor/MyEditor"), {
  ssr: false,
});

interface INoticeEditor {
  title: string;
  desc: string;
  pageName: string;
}

export default function NoticeEditor({ title, desc, pageName }: INoticeEditor) {
  return (
    <div className="w-full">
      <ViewHeader title={title} desc={desc} />
      <div className="w-full h-fit mt-[120px] -mb-20 flex justify-center">
        <NoSsrWysiwyg pageName={pageName} />
      </div>
    </div>
  );
}
