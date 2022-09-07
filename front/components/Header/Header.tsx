import { useAppDispatch } from 'hooks/reduxHooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import { groupActions } from 'src/store/reducers/groupReducer';
import { userActions } from 'src/store/reducers/userReducer';
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
} from './style';

const Header: NextPage = () => {
  const { token, user } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logoutRequest({ token }));
  }, [dispatch, token])

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
              {token ? <Logout onClick={logoutHandler}>Logout</Logout> : <Link href="/login">Login</Link>}
              <div></div>
            </Login>
          </div>
        </div>
      </HeaderTop>
      <div>
        <HeaderContainer>
          <div>
            <Logo>
              <Link href="/">
                FUKIN FRIENDS
              </Link>
            </Logo>
            <Navigation>
              <Link href="/feed"><div>Feed</div></Link>
              <Link href="/notice"><div>Notice</div></Link>
              <Link href="/event"><div>Event</div></Link>
              <Link href="/album"><div>Album</div></Link>
              <Link href="/playlist"><div>Play list</div></Link>
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
