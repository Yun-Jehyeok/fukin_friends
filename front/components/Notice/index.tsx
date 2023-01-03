import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import { NextPage } from "next";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import ViewHeader from "../ViewHeader";

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
        pageList.push({ key: i, cls: i === currentPage ? "text-basered" : "" });
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
    <div className="w-full">
      <ViewHeader
        title="Notice Page"
        desc="It's Just Notice Page"
        url="/notice/create"
        url_title="Create Notice"
      />
      <div className="w-full flex justify-center mt-20">
        <div className="w-default flex justify-between">
          <div className="w-[870px]">
            {notices.map((item) => (
              <div key={item._id} className="w-full mb-20 cursor-pointer">
                <Link href={`/notice/detail/${item._id}`}>
                  <a>
                    <div className="font-josefin text-[30px] font-bold text-darkblue hover:underline">
                      {item.title}
                    </div>
                    <div className="flex mt-3">
                      <div className="flex">
                        <div className="w-4 h-4 bg-white bg-center bg-calendar bg-no-repeat relative top-1 mr-2"></div>
                        <div className="bg-[#ffece2] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1">
                          {item.date.slice(0, 10)}
                        </div>
                      </div>
                      <div className="bg-[#ffe7f9] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1 ml-3">
                        {item.location}
                      </div>
                    </div>
                    <div className="font-lato text-[#8a8fb9] text-base mt-6">
                      {item.content.length > 200
                        ? item.content
                            .slice(0, 200)
                            .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi, "") +
                          "..."
                        : item.content.replace(
                            /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
                            ""
                          )}
                    </div>
                    <div className="font-lato text-lg font-semibold flex mt-6 text-darkblue">
                      Read More
                      <div className="w-[5px] h-[5px] rounded-full bg-basered ml-1 relative top-[9px]"></div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
            <div className="w-full flex justify-center">
              <div className="w-fit flex flex-wrap gap-x-2">
                <div
                  className={`w-2 h-2 border-b-[1px] border-l-[1px] border-[#151875] border-solid rotate-45 relative top-3 cursor-pointer mr-3 ${
                    larrActive ? "" : "pointer-events-none"
                  }`}
                  onClick={goPrev}
                ></div>
                {Array.isArray(pages)
                  ? pages.map((page) => (
                      <div
                        key={page.key}
                        className={
                          "w-9 h-9 text-center leading-9 rounded-full bg-white text-darkblue font-josefin cursor-pointer text-lg first:text-basered hover:bg-[#eeeffb]" +
                          page.cls
                        }
                        onClick={() => onChangePage(page.key)}
                      >
                        {page.key}
                      </div>
                    ))
                  : ""}
                <div
                  className={`w-2 h-2 border-t-[1px] border-r-[1px] border-[#151875] border-solid rotate-45 relative top-3 cursor-pointer ml-3 ${
                    rarrActive ? "" : "pointer-events-none"
                  }`}
                  onClick={goNext}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-[270px]">
            <div className="w-full">
              <div className="font-josefin text-darkblue font-bold text-2xl">
                Search
              </div>
              <input
                className="w-full h-10 border-[1px] border-solid border-[#bdbdd8] outline-none rounded-sm pr-10 pl-3 mt-5 bg-search bg-no-repeat bg-cr12 placeholder:text-darkblue opacity-20"
                placeholder="Search For Notice"
                onKeyDown={onSearch}
                {...noticeSearchTerm}
              />
            </div>
            <div className="w-full mt-20">
              <div className="font-josefin text-darkblue font-bold text-2xl mb-8">
                Important Notice
              </div>
              {importantList.map((item) => (
                <div key={item.id} className="mb-6 cursor-pointer">
                  <div className="hover:underline font-josefin text-sm text-[#3f509e]">
                    {item.title}
                  </div>
                  <div className="font-lato text-[11px] text-[#8a8fb9] mt-2">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
