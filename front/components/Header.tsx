import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";

const menus = [
  {
    id: 0,
    path: "feed",
    content: "Feed",
  },
  {
    id: 1,
    path: "notice",
    content: "Notice",
  },
  {
    id: 2,
    path: "event",
    content: "Event",
  },
  {
    id: 3,
    path: "album",
    content: "Album",
  },
  {
    id: 4,
    path: "playlist",
    content: "Play list",
  },
];

const Header: NextPage = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname.slice(1));
  }, [router]);

  const { token } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const logoutHandler = useCallback(() => {
    let tokenData = token as string;

    dispatch(userActions.logoutReq({ token: tokenData }));
  }, [dispatch, token]);

  return (
    <div className="w-full h-fit box-border sticky top-[-44px] z-[1] shadow-md">
      <div className="w-full h-[44px] bg-[#7e33e0] flex justify-center">
        <div className="w-default h-full leading-[44px] flex justify-between">
          <div className="flex gap-6">
            <div className="text-[#f1f1f1] flex font-josefin">
              <div className="w-4 h-4 bg-email bg-no-repeat bg-center mt-3"></div>
              dbswpgur2@naver.com
            </div>
            <div className="text-[#f1f1f1] flex font-josefin">
              <div className="w-4 h-4 bg-phone bg-no-repeat bg-center mt-3"></div>
              010-5629-4023
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-[#f1f1f1] flex font-josefin cursor-pointer">
              English
              <div className="w-2 h-2 mt-3 ml-2 border-[#f1f1f1] border border-l-0 border-t-0 rotate-45 relative top-[2px]"></div>
            </div>
            <div className="text-[#f1f1f1] flex font-josefin cursor-pointer">
              {token ? (
                <div
                  className="w-fit !text-[#f1f1f1] !mt-0"
                  onClick={logoutHandler}
                >
                  Logout
                </div>
              ) : (
                <Link href="/login">
                  <a className="text-white hover:text-white">Login</a>
                </Link>
              )}
              <div className="w-4 h-4 bg-login bg-no-repeat bg-center mt-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-fit py-4.75 px-0 bg-white">
        <div className="w-default h-10 leading-10 flex justify-between">
          <div className="flex">
            <div className="font-bold text-[34px] font-josefin pt-[5px]">
              <Link href="/">
                <a className="text-[#0d0e43] hover:text-[#0d0e43]">
                  FUKIN FRIENDS
                </a>
              </Link>
            </div>
            <div className="w-fit h-full flex ml-24 gap-9">
              {menus.map((menu) => (
                <Link href={"/" + menu.path} key={menu.id}>
                  <div
                    className={`h-full leading-10 ${
                      pathname.includes(menu.path) ? "text-basered" : ""
                    } font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered`}
                  >
                    {menu.content}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[317px] h-10 border border-[#e7e6ef] rounded-[4px] box-border bg-white shadow-default flex">
            <input
              className="w-full h-full outline-none border-none rounded-[4px] bg-white py-0 px-4 placeholder:text-gray-300 text-sm placeholder:text-sm"
              placeholder="Search For All"
            />
            <div className="w-[51px] h-10 relative bottom-[1px] rounded-tr-[4px] rounded-br-[4px] bg-basered bg-xsearch bg-no-repeat bg-center cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
