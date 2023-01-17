import { useAppDispatch } from "hooks/reduxHooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";

interface IPages {
  key: number;
  cls: string;
}

interface INoticeList {
  type: string;
}

export default function NoticeList({ type }: INoticeList) {
  // pagination -- S --
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const [pages, setPages] = useState<IPages[]>();
  const [larrActive, setLarrActive] = useState(false);
  const [rarrActive, setRarrActive] = useState(false);
  // pagination -- E --

  const router = useRouter();

  const { notices, allNoticesCnt } = useSelector(
    (state: RootState) => state.notice
  );

  const initPages = () => {
    setTotalPage(0);
    setCurrentPage(1);
    setPageGroup(1);
    setCurrentPageGroup(1);
  };

  const dispatch = useAppDispatch();
  const dispatchFun = (term: string, page: number) => {
    if (type === "search") {
      dispatch(
        noticeActions.searchNoticeReq({
          term,
          skip: page,
        })
      );
    } else {
      dispatch(noticeActions.loadAllNoticeReq({ page: page }));
    }
  };

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
          : Math.floor(allNoticesCnt / 8) + 1
      );
      setPageGroup(
        totalPage % 5 === 0
          ? Math.round(totalPage / 5)
          : Math.floor(totalPage / 5) + 1
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
    initPages();
    dispatchFun(router.query.term ? (router.query.term as string) : "", 1);
  }, [router]);

  useEffect(() => {
    setPagination(currentPage, currentPageGroup);
  }, [currentPage, currentPageGroup, setPagination]);

  const onChangePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      dispatchFun(router.query.term ? (router.query.term as string) : "", page);
      setPagination(page, currentPageGroup);
    },
    [setPagination, router, currentPageGroup]
  );

  const goPrev = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let cpg = currentPageGroup - 1;
      let cp = 5 * (cpg - 1) + 1;

      setCurrentPageGroup(cpg);
      setCurrentPage(cp);

      dispatchFun(router.query.term ? (router.query.term as string) : "", cp);

      setPagination(cp, cpg);
    },
    [
      currentPageGroup,
      router,
      setCurrentPage,
      setCurrentPageGroup,
      setPagination,
    ]
  );
  const goNext = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let cpg = currentPageGroup + 1;
      let cp = 5 * (cpg - 1) + 1;

      setCurrentPageGroup(cpg);
      setCurrentPage(cp);

      dispatchFun(router.query.term ? (router.query.term as string) : "", cp);

      setPagination(cp, cpg);
    },
    [
      currentPageGroup,
      router,
      setCurrentPage,
      setCurrentPageGroup,
      setPagination,
    ]
  );

  return (
    <div className="w-[870px]">
      {notices.length > 0 ? (
        notices.map((item) => (
          <div key={item._id} className="w-full mb-20 cursor-pointer group">
            <Link href={`/notice/detail/${item._id}`}>
              <a>
                <div className="font-josefin text-[30px] font-bold text-darkblue group-hover:underline">
                  {item.title}
                </div>
                <div className="flex mt-3">
                  <div className="flex">
                    <div className="w-4 h-4 bg-white bg-center bg-calendar bg-no-repeat relative top-1 mr-2"></div>
                    <div className="bg-[#ffece2] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1 group-hover:underline">
                      {item.date.slice(0, 10)}
                    </div>
                  </div>
                  <div className="bg-[#ffe7f9] text-darkblue text-sm font-lato font-semibold rounded-sm px-9 py-1 ml-3 group-hover:underline">
                    {item.location}
                  </div>
                </div>
                <div className="font-lato text-[#8a8fb9] text-base mt-6 group-hover:underline">
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
                <div className="font-lato text-lg font-semibold flex mt-6 text-darkblue group-hover:underline">
                  Read More
                  <div className="w-[5px] h-[5px] rounded-full bg-basered ml-1 relative top-[9px]"></div>
                </div>
              </a>
            </Link>
          </div>
        ))
      ) : (
        <div className="w-full h-[50%] text-center flex justify-center flex-col font-josefin text-2xl">
          No Notices..
        </div>
      )}
      {notices.length > 0 ? (
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
                      "w-9 h-9 text-center leading-9 rounded-full bg-white text-darkblue font-josefin cursor-pointer text-lg hover:bg-[#eeeffb] hover:text-basered " +
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
      ) : (
        ""
      )}
    </div>
  );
}
