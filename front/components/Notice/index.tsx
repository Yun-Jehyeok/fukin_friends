import ViewHeader from "../ViewHeader";
import NoticeList from "./Section/NoticeList";
import NoticeSideBar from "./Section/NoticeSidebar";

interface INotice {
  title: string;
  desc: string;
  url?: string;
  url_title?: string;
  type: string;
}

export default function Notice({ title, desc, url, url_title, type }: INotice) {
  return (
    <div className="w-full">
      <ViewHeader title={title} desc={desc} url={url} url_title={url_title} />
      <div className="w-full flex justify-center mt-20">
        <div className="w-default flex justify-between">
          <NoticeList type={type} />
          <NoticeSideBar />
        </div>
      </div>
    </div>
  );
}
