import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import {
  Desc,
  DSCDate,
  DSCPlace,
  DSCTitle,
  ItemTitle,
  Pagination,
  PaginationItem,
} from "../../View/Home/Section/NoticeList/style";

const NoticeList: NextPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { notices } = useSelector((state: RootState) => state.notice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(noticeActions.loadMainNoticeReq());
  }, [dispatch]);

  const onClickPagination = (e: React.MouseEvent<HTMLElement>) => {
    setActiveIdx(parseInt(e.currentTarget.dataset.key as string));
  };

  const paginationUI = () => {
    let itemLength =
      notices.length % 4 === 0
        ? Math.floor(notices.length / 4)
        : Math.floor(notices.length / 4) + 1;

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
    <div className="w-full mt-[200px]">
      <div className="text-darkblue font-bold text-[40px] text-center font-josefin mb-[53px]">
        Notice
      </div>
      <div className="w-full h-fit flex justify-center">
        <div className="w-full max-w-[1192px] overflow-hidden">
          <div
            className={`flex w-fit h-[384px] justify-center relative left-[${
              activeIdx === 0 ? "12" : "-1188"
            }px] transition-all duration-[800ms]`}
          >
            {Array.isArray(notices)
              ? notices.map((item) => (
                  <div
                    className="w-[270px] h-[360px] mr-[30px] text-white shadow-md cursor-pointer relative top-3 box-border hover:border-[1px] hover:border-solid hover:border-[#2f1ac4] hover:shadow-md"
                    key={item._id}
                  >
                    <Link href={`/notice/detail/${item._id}`}>
                      <a>
                        <ItemTitle>{item.title}</ItemTitle>
                        <Desc>
                          <div>
                            <DSCTitle>{item.title}</DSCTitle>
                            <DSCPlace>{item.location}</DSCPlace>
                            <DSCDate>{item.date.slice(0, 10)}</DSCDate>
                          </div>
                        </Desc>
                      </a>
                    </Link>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <Pagination>
        <div>{paginationUI()}</div>
      </Pagination>
    </div>
  );
};

export default NoticeList;
