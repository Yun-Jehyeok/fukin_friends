import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";
import {
  NoticeListCont,
  ItemTitle,
  List,
  Title,
  Desc,
  DSCTitle,
  DSCPlace,
  DSCDate,
  ListCont,
  Pagination,
  PaginationItem,
} from "./style";

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
    <NoticeListCont>
      <Title>Notice</Title>
      <ListCont>
        <div>
          <List activeIdx={activeIdx}>
            {Array.isArray(notices)
              ? notices.map((item) => (
                  <div key={item._id}>
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
