import { useAppDispatch } from 'hooks/reduxHooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
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
} from './style';

const Header: NextPage = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { token, user } = useSelector((state: RootState) => state.user);
  const { groups, currentGroup } = useSelector((state: RootState) => state.group);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(token) {
      dispatch(groupActions.loadGroupsRequest({ userId: user.id }));
    } else {
      dispatch(groupActions.loadGroupsRequest({ userId: '' }));
    }
  }, [dispatch, token, user])

  const handleGroupDropdown = () => {
    setIsOpen(!isOpen);
  }

  const showDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  }

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logoutRequest(token));
  }, [dispatch, token])

  const changeGroup = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    let selected = e.currentTarget.dataset.title;

    setIsOpen(false);

    dispatch(groupActions.changeGroupRequest({ title: selected }));
  }, [dispatch])

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
              <Link href="/login">Login</Link>
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
                {/* {groups && groups.length > 0 ? groups[0].title : 'FUKIN FRIENDS'} */}
              </Link>
            </Logo>
            <Navigation>
              <div>Home</div>
              <div>Feed</div>
              <div>Notice</div>
              <div>Event</div>
              <div>Album</div>
              <div>Play list</div>
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
