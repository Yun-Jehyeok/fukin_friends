import { useAppDispatch } from "hooks/reduxHooks";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import {
  HeaderContainer,
  Logo,
  Wrap,
  Navigation,
  Search,
  HeaderTop,
  Email,
  Phone,
  Language,
  Login,
  Logout,
} from "./style";

const Header: NextPage = () => {
  const router = useRouter();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(router.pathname.slice(1));
  }, [router]);

  const { token } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logoutRequest({ token }));
  }, [dispatch, token]);

  return (
    <Wrap>
      <HeaderTop>
        <div>
          <div>
            <Email>
              <div></div>
              dbswpgur2@naver.com
            </Email>
            <Phone>
              <div></div>
              010-5629-4023
            </Phone>
          </div>
          <div>
            <Language>
              English
              <div></div>
            </Language>
            <Login>
              {token ? (
                <Logout onClick={logoutHandler}>Logout</Logout>
              ) : (
                <Link href="/login">Login</Link>
              )}
              <div></div>
            </Login>
          </div>
        </div>
      </HeaderTop>
      <div>
        <HeaderContainer>
          <div>
            <Logo>
              <Link href="/">FUKIN FRIENDS</Link>
            </Logo>
            <Navigation>
              <Link href="/feed">
                <div data-active={pathname === "feed"}>Feed</div>
              </Link>
              <Link href="/notice">
                <div data-active={pathname === "notice"}>Notice</div>
              </Link>
              <Link href="/event">
                <div data-active={pathname === "event"}>Event</div>
              </Link>
              <Link href="/album">
                <div data-active={pathname === "album"}>Album</div>
              </Link>
              <Link href="/playlist">
                <div data-active={pathname === "playlist"}>Play list</div>
              </Link>
            </Navigation>
          </div>
          <Search>
            <input />
            <div></div>
          </Search>
        </HeaderContainer>
      </div>
    </Wrap>
  );
};

export default Header;
