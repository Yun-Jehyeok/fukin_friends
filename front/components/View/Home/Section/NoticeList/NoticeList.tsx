import { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  Attendees,
  NoticeListCont,
  ItemTitle,
  List,
  Title,
  Description,
  DSCTitle,
  DSCPlace,
  DSCDate,
  Attendee,
  ListCont,
  Pagination,
  PaginationItem,
} from "./style";

let sampleData = [
  {
    id: "1",
    title: "Drunk Day",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "2",
    title: "Drunk Day",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "3",
    title: "Congraturations",
    date: "2022-08-16 6:00 PM",
    place: "Hannam-dong Chicken",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "4",
    title: "Just Drunk",
    date: "2022-09-12 4:00 PM",
    place: "Jongyun's house",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "5",
    title: "Just Drunk",
    date: "2022-09-12 4:00 PM",
    place: "Jongyun's house",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "6",
    title: "Drunk Day",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "7",
    title: "Congraturations",
    date: "2022-08-16 6:00 PM",
    place: "Hannam-dong Chicken",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
  {
    id: "8",
    title: "Just Drunk",
    date: "2022-09-12 4:00 PM",
    place: "Jongyun's house",
    attendees: [
      {
        id: 1,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 2,
        src: "https://placeimg.com/16/16/people",
      },
      {
        id: 3,
        src: "https://placeimg.com/16/16/people",
      },
    ],
  },
];

const NoticeList: NextPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const onClickPagination = (e: React.MouseEvent<HTMLElement>) => {
    setActiveIdx(parseInt(e.currentTarget.dataset.key as string));
  };

  const paginationUI = () => {
    let itemLength =
      sampleData.length % 4 === 0
        ? Math.floor(sampleData.length / 4)
        : Math.floor(sampleData.length / 4) + 1;

    let returnArr = [];

    for (let i = 0; i < itemLength; i++) {
      returnArr.push(
        <PaginationItem
          key={i}
          data-key={i}
          data-active={i === activeIdx}
          onClick={onClickPagination}
        ></PaginationItem>
      );
    }

    return returnArr;
  };

  return (
    <NoticeListCont>
      <Title>Notice</Title>
      <ListCont>
        <div>
          <List activeIdx={activeIdx}>
            {sampleData.map((item) => (
              <div key={item.id}>
                <ItemTitle>{item.title}</ItemTitle>
                <Description>
                  <div>
                    <DSCTitle>{item.title}</DSCTitle>
                    <Attendees>
                      <div>
                        {item.attendees && item.attendees.length > 0
                          ? item.attendees.map((item) => (
                              <Attendee key={item.id}>
                                <img src={item.src} />
                              </Attendee>
                            ))
                          : ""}
                      </div>
                    </Attendees>
                    <DSCPlace>{item.place}</DSCPlace>
                    <DSCDate>{item.date}</DSCDate>
                  </div>
                </Description>
              </div>
            ))}
          </List>
        </div>
      </ListCont>
      <Pagination>
        <div>{paginationUI()}</div>
      </Pagination>
    </NoticeListCont>
  );
};

export default NoticeList;
