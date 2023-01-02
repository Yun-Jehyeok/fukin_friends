import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import { Email, Login, Phone, Search } from "styles/styleRepo/icons";

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
              <Email className="w-4 h-4 bg-no-repeat bg-center mt-3"></Email>
              dbswpgur2@naver.com
            </div>
            <div className="text-[#f1f1f1] flex font-josefin">
              <Phone className="w-4 h-4 bg-no-repeat bg-center mt-3"></Phone>
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
                <Link href="/login">Login</Link>
              )}
              <Login className="w-4 h-4 bg-no-repeat bg-center mt-3"></Login>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center h-fit py-[19px] px-0 bg-white">
        <div className="w-default h-10 leading-10 flex justify-between">
          <div className="flex">
            <div className="font-bold text-[34px] font-josefin pt-[5px]">
              <Link className="text-[#0d0e43]" href="/">
                FUKIN FRIENDS
              </Link>
            </div>
            <div className="w-fit h-full flex ml-24 gap-9">
              <Link href="/feed">
                <div
                  data-active={pathname.includes("feed")}
                  className="h-full leading-10 font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered"
                >
                  Feed
                </div>
              </Link>
              <Link href="/notice">
                <div
                  data-active={pathname.includes("notice")}
                  className="h-full leading-10 font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered"
                >
                  Notice
                </div>
              </Link>
              <Link href="/event">
                <div
                  data-active={pathname.includes("event")}
                  className="h-full leading-10 font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered"
                >
                  Event
                </div>
              </Link>
              <Link href="/album">
                <div
                  data-active={pathname.includes("album")}
                  className="h-full leading-10 font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered"
                >
                  Album
                </div>
              </Link>
              <Link href="/playlist">
                <div
                  data-active={pathname.includes("playlist")}
                  className="h-full leading-10 font-lato cursor-pointer transition-colors ease-linear duration-150 hover:text-basered"
                >
                  Play list
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[317px] h-10 border border-[#e7e6ef] rounded-[4px] box-border bg-white shadow-default flex">
            <input className="w-full h-full outline-none border-none rounded-[4px] bg-white py-0 px-4" />
            <Search className="w-[51px] h-10 relative bottom-[1px] rounded-tr-[4px] rounded-br-[4px] bg-basered bg-no-repeat bg-center cursor-pointer"></Search>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
