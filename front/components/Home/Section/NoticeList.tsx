import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";

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
        <div
          key={i}
          className={`w-4 h-1 bg-[#febad7] rounded-[10px] cursor-pointer ${
            i === activeIdx ? "w-6 bg-[#fb2e86]" : ""
          }`}
          data-key={i}
          data-active={i === activeIdx}
          onClick={onClickPagination}
        ></div>
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
            className={`flex w-fit h-[384px] justify-center relative ${
              activeIdx === 0 ? "left-[12px]" : "-left-[1188px]"
            } transition-all duration-[800ms]`}
          >
            {Array.isArray(notices)
              ? notices.map((item) => (
                  <div
                    className="w-[270px] h-[360px] mr-[30px] text-white shadow-md cursor-pointer relative top-3 box-border hover:border hover:border-solid hover:border-[#2f1ac4]"
                    key={item._id}
                  >
                    <Link href={`/notice/detail/${item._id}`}>
                      <a>
                        <div className="w-full h-3/5 bg-[#f6f7fb] flex justify-center flex-col text-center text-xl font-josefin px-3 py-0">
                          {item.title}
                        </div>
                        <div className="w-full h-2/5 text-center flex justify-center flex-col px-3 py-0">
                          <div className="h-fit">
                            <div className="font-lato text-lg text-basered font-bold">
                              {item.title}
                            </div>
                            <div className="font-josefin text-sm text-darkblue mt-3">
                              {item.location}
                            </div>
                            <div className="font-josefin text-sm text-darkblue mt-2">
                              {item.date.slice(0, 10)}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-12">
        <div className="flex w-fit gap-1.5">{paginationUI()}</div>
      </div>
    </div>
  );
};

export default NoticeList;
