import Link from "next/link";
import {
  CreateNotice,
  NoticeHeader,
  NoticeHeaderDesc,
  NoticeHeaderTitle,
} from "./Notice/style";

interface IHeader {
  title: string;
  desc: string;
  url?: string;
  url_title?: string;
}

export default function ViewHeader({ title, desc, url, url_title }: IHeader) {
  return (
    <NoticeHeader>
      <div>
        <div>
          <NoticeHeaderTitle>{title}</NoticeHeaderTitle>
          <NoticeHeaderDesc>{desc}</NoticeHeaderDesc>
        </div>
        {url ? (
          <CreateNotice>
            <Link href={url}>{url_title}</Link>
          </CreateNotice>
        ) : (
          ""
        )}
      </div>
    </NoticeHeader>
  );
}
