import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { noticeActions } from "src/store/reducers/noticeReducer";

export default function NoticeSideBar() {
  const noticeSearchTerm = useInput("");
  const { importantNotices } = useSelector((state: RootState) => state.notice);

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(noticeActions.loadImportantNoticeReq());
  }, [dispatch]);

  const onSearch = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        router.push(`/notice/search/${noticeSearchTerm.value}`);
      }
    },
    [router, noticeSearchTerm]
  );

  return (
    <div className="w-[270px]">
      <div className="w-full">
        <div className="font-josefin text-darkBlue font-bold text-2xl">
          Search
        </div>
        <input
          className="w-full h-10 border border-gray-300 text-darkBlue outline-none rounded-sm pr-10 pl-3 mt-5 bg-search bg-no-repeat bg-cr12 text-sm placeholder:text-sm placeholder:text-gray-300"
          placeholder="Search For Notice"
          onKeyDown={onSearch}
          {...noticeSearchTerm}
        />
      </div>
      <div className="w-full mt-20">
        <div className="font-josefin text-darkBlue font-bold text-2xl mb-8">
          Important Notice
        </div>
        {importantNotices.length > 0 ? (
          importantNotices.map((item) => (
            <Link key={item._id} href={`/notice/detail/${item._id}`}>
              <a>
                <div className="mb-6 cursor-pointer group">
                  <div className="group-hover:underline font-josefin text-sm text-[#3f509e]">
                    {item.title}
                  </div>
                  <div className="font-lato text-[11px] text-subTextColor mt-2 group-hover:underline">
                    {item.date.slice(0, 10)}
                  </div>
                </div>
              </a>
            </Link>
          ))
        ) : (
          <div className="font-josefin text-sm text-[#3f509e]">
            No Important Notice..
          </div>
        )}
      </div>
    </div>
  );
}
