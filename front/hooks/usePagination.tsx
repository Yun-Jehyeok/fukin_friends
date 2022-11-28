import { useCallback, useState } from "react";

interface IPages {
  key: number;
  cls: string;
}

export default function usePagination(allCnt: number) {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const [currentPageGroup, setCurrentPageGroup] = useState(1);
  const [pages, setPages] = useState<IPages[]>();
  const [larrActive, setLarrActive] = useState(false);
  const [rarrActive, setRarrActive] = useState(false);

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
        allCnt % 8 === 0 ? Math.round(allCnt / 8) : Math.round(allCnt / 8) + 1
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
      allCnt,
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

  return { larrActive, rarrActive, pages };
}
