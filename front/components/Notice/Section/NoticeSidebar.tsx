import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
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
        <div className="font-josefin text-darkblue font-bold text-2xl">
          Search
        </div>
        <input
          className="w-full h-10 border border-solid border-[#bdbdd8] outline-none rounded-sm pr-10 pl-3 mt-5 bg-search bg-no-repeat bg-cr12 placeholder:text-darkblue opacity-20"
          placeholder="Search For Notice"
          onKeyDown={onSearch}
          {...noticeSearchTerm}
        />
      </div>
      <div className="w-full mt-20">
        <div className="font-josefin text-darkblue font-bold text-2xl mb-8">
          Important Notice
        </div>
        {importantNotices.map((item) => (
          <div key={item._id} className="mb-6 cursor-pointer group">
            <div className="group-hover:underline font-josefin text-sm text-[#3f509e]">
              {item.title}
            </div>
            <div className="font-lato text-[11px] text-[#8a8fb9] mt-2 group-hover:underline">
              {item.date.slice(0, 10)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
