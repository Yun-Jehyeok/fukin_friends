import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import { Cont } from "styles/styleRepo/global";
import ViewHeader from "../Header";
import {
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeItem,
  NoticeItemDesc,
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

interface IPages {
  key: number;
  cls: string;
}

const Notice: NextPage = () => {
  const noticeSearchTerm = useInput("");

  // pagination -- S --
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const [pages, setPages] = useState<IPages[]>();
  const [larrActive, setLarrActive] = useState(false);
  const [rarrActive, setRarrActive] = useState(false);
  // pagination -- E --

  const { notices, allNoticesCnt } = useSelector(
    (state: RootState) => state.notice
  );

  const dispatch = useAppDispatch();

  const setAllPages = useCallback(() => {
    let pageList = [];

    for (
      let i = 5 * (currentPageGroup - 1) + 1;
      i <= 5 * currentPageGroup;
      i++
    ) {
      if (i <= totalPage) {
        pageList.push({ key: i, cls: i === currentPage ? "active" : "" });
      } else {
        break;
      }
    }

    setPages(pageList);
  }, [currentPageGroup, totalPage, currentPage, setPages]);

  const setPagination = useCallback(
    (cp: number, cpg: number) => {
      setTotalPage(
        allNoticesCnt % 8 === 0
          ? Math.round(allNoticesCnt / 8)
          : Math.round(allNoticesCnt / 8) + 1
      );
      setPageGroup(
        totalPage % 5 === 0
          ? Math.round(totalPage / 5)
          : Math.round(totalPage / 5) + 1
      );
      setCurrentPage(cp);
      setCurrentPageGroup(cpg);

      setAllPages();

      if (currentPageGroup === 1) setLarrActive(false);
      else setLarrActive(true);

      if (currentPageGroup < pageGroup) {
        setRarrActive(true);
      } else {
        setRarrActive(false);
      }
    },
    [
      totalPage,
      pageGroup,
      allNoticesCnt,
      currentPageGroup,
      setTotalPage,
      setPageGroup,
      setCurrentPage,
      setCurrentPageGroup,
      setAllPages,
      setLarrActive,
      setRarrActive,
    ]
  );

  useEffect(() => {
    dispatch(noticeActions.loadAllNoticeReq({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    setPagination(currentPage, currentPageGroup);
  }, [currentPage, currentPageGroup, setPagination]);

  const onChangePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      dispatch(noticeActions.loadAllNoticeReq({ page: page }));
      setPagination(page, currentPageGroup);
    },
    [dispatch, setPagination, currentPageGroup]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let cpg = currentPageGroup - 1;
      let cp = 5 * (cpg - 1) + 1;

      setCurrentPageGroup(cpg);
      setCurrentPage(cp);

      dispatch(noticeActions.loadAllNoticeReq({ page: cp }));

      setPagination(cp, cpg);
    },
    [
      currentPageGroup,
      setCurrentPage,
      setCurrentPageGroup,
      setPagination,
      dispatch,
    ]
  );
  const goNext = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let cpg = currentPageGroup + 1;
      let cp = 5 * (cpg - 1) + 1;

      setCurrentPageGroup(cpg);
      setCurrentPage(cp);

      dispatch(noticeActions.loadAllNoticeReq({ page: cp }));

      setPagination(cp, cpg);
    },
    [
      currentPageGroup,
      setCurrentPage,
      setCurrentPageGroup,
      setPagination,
      dispatch,
    ]
  );

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
      <ViewHeader
        title="Notice Page"
        desc="It's Just Notice Page"
        url="/notice/create"
        url_title="Create Notice"
      />
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
                        <div>{item.date.slice(0, 10)}</div>
                      </NoticeDate>
                      <NoticePlace>{item.location}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDesc>
                      {item.content.length > 200
                        ? item.content
                            .slice(0, 200)
                            .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi, "") +
                          "..."
                        : item.content.replace(
                            /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
                            ""
                          )}
                    </NoticeItemDesc>
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
                <NoticePaginationLArr
                  active={larrActive}
                  onClick={goPrev}
                ></NoticePaginationLArr>
                {Array.isArray(pages)
                  ? pages.map((page) => (
                      <NoticePaginationBtn
                        key={page.key}
                        className={page.cls}
                        onClick={() => onChangePage(page.key)}
                      >
                        {page.key}
                      </NoticePaginationBtn>
                    ))
                  : ""}
                <NoticePaginationRArr
                  active={rarrActive}
                  onClick={goNext}
                ></NoticePaginationRArr>
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
