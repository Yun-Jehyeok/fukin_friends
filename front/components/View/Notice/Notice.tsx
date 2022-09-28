import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { Container } from "styles/styleRepo/global";
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
  NoticePaginationContainer,
  NoticePaginationLArr,
  NoticePaginationRArr,
  NoticePlace,
  NoticeRight,
  NoticeSearch,
  ReadMore,
} from "./style";

const noticeList = [
  {
    id: 0,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 1,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 2,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-08-17 4:00 PM",
    place: "Hannam-dong Chicken",
  },
  {
    id: 3,
    title: "Test length nam congue is right, maersx fes, faew. Etaewf.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 4,
    title: "Feasx feadt li suekz.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-09-12 4:00 PM",
    place: "Jongyun's house",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    date: "2022-08-16 6:00 PM",
    place: "Hannam-dong Chicken",
  },
];

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

  const onSearch = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        console.log("Enter...", noticeSearchTerm.value);
      }
    },
    [noticeSearchTerm]
  );

  return (
    <Container>
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
            {noticeList.map((item) => (
              <NoticeItem key={item.id}>
                <Link href={`/notice/detail/${item.id}`}>
                  <a>
                    <NoticeItemTitle>{item.title}</NoticeItemTitle>
                    <NoticeDatePlace>
                      <NoticeDate>
                        <div></div>
                        <div>{item.date}</div>
                      </NoticeDate>
                      <NoticePlace>{item.place}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDescription>
                      {item.description}
                    </NoticeItemDescription>
                    <ReadMore>
                      Read More
                      <div></div>
                    </ReadMore>
                  </a>
                </Link>
              </NoticeItem>
            ))}
            <NoticePaginationContainer>
              <div>
                <NoticePaginationLArr></NoticePaginationLArr>
                <NoticePaginationBtn className="active">1</NoticePaginationBtn>
                <NoticePaginationBtn>2</NoticePaginationBtn>
                <NoticePaginationBtn>3</NoticePaginationBtn>
                <NoticePaginationBtn>4</NoticePaginationBtn>
                <NoticePaginationBtn>5</NoticePaginationBtn>
                <NoticePaginationRArr></NoticePaginationRArr>
              </div>
            </NoticePaginationContainer>
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
    </Container>
  );
};

export default Notice;
