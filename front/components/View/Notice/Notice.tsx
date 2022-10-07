import { useAppDispatch } from "hooks/reduxHooks";
import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import { Cont } from "styles/styleRepo/global";
import {
  CreateNotice,
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
  NoticeItem,
  NoticeItemDescription,
  NoticeItemTitle,
  NoticeLeft,
  NoticePaginationBtn,
  NoticePaginationCont,
  NoticePaginationLArr,
  NoticePaginationRArr,
  NoticePlace,
  NoticeRight,
  NoticeSearch,
  ReadMore,
} from "./style";

const importantList = [
  {
    id: 0,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 1,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 2,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "2022-08-17 4:00 PM",
    place: "Hannam-dong Chicken",
  },
];

const Notice: NextPage = () => {
  const noticeSearchTerm = useStringInput("");

  const { notices } = useSelector((state: RootState) => state.notice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(noticeActions.loadAllNoticeRequest());
  }, [dispatch]);

  const onSearch = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        console.log("Enter...", noticeSearchTerm.value);
      }
    },
    [noticeSearchTerm]
  );

  return (
    <Cont>
      <NoticeHeader>
        <div>
          <div>
            <NoticeHeaderTitle>Notice Page</NoticeHeaderTitle>
            <NoticeHeaderDescription>
              It&apos;s Just Notice Page
            </NoticeHeaderDescription>
          </div>
          <CreateNotice>
            <Link href="/notice/create">Create Notice</Link>
          </CreateNotice>
        </div>
      </NoticeHeader>
      <NoticeBody>
        <div>
          <NoticeLeft>
            {notices.map((item) => (
              <NoticeItem key={item._id}>
                <Link href={`/notice/detail/${item._id}`}>
                  <a>
                    <NoticeItemTitle>{item.title}</NoticeItemTitle>
                    <NoticeDatePlace>
                      <NoticeDate>
                        <div></div>
                        <div>{item.date}</div>
                      </NoticeDate>
                      <NoticePlace>{item.location}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDescription>
                      {item.content.length > 200
                        ? item.content
                            .slice(0, 200)
                            .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi, "") +
                          "..."
                        : item.content.replace(
                            /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
                            ""
                          )}
                    </NoticeItemDescription>
                    <ReadMore>
                      Read More
                      <div></div>
                    </ReadMore>
                  </a>
                </Link>
              </NoticeItem>
            ))}
            <NoticePaginationCont>
              <div>
                <NoticePaginationLArr></NoticePaginationLArr>
                <NoticePaginationBtn className="active">1</NoticePaginationBtn>
                <NoticePaginationBtn>2</NoticePaginationBtn>
                <NoticePaginationBtn>3</NoticePaginationBtn>
                <NoticePaginationBtn>4</NoticePaginationBtn>
                <NoticePaginationBtn>5</NoticePaginationBtn>
                <NoticePaginationRArr></NoticePaginationRArr>
              </div>
            </NoticePaginationCont>
          </NoticeLeft>
          <NoticeRight>
            <NoticeSearch>
              <div>Search</div>
              <input
                placeholder="Search For Notice"
                onKeyDown={onSearch}
                {...noticeSearchTerm}
              />
            </NoticeSearch>
            <ImportantNotice>
              <div>Important Notice</div>
              {importantList.map((item) => (
                <ImportantItem key={item.id}>
                  <div>{item.title}</div>
                  <div>{item.date}</div>
                </ImportantItem>
              ))}
            </ImportantNotice>
          </NoticeRight>
        </div>
      </NoticeBody>
    </Cont>
  );
};

export default Notice;
