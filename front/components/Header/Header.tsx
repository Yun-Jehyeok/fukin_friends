import { useAppDispatch } from 'hooks/reduxHooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import { groupActions } from 'src/store/reducers/groupReducer';
import { userActions } from 'src/store/reducers/userReducer';
import {
  GroupDropdownContainer,
  DropdownItem,
  DropdownLeftArr,
  GroupDropdownList,
  DropdownProfile,
  DropdownRightArr,
  GroupDropdownTrigger,
  HeaderContainer,
  HeaderRightSection,
  LoginText,
  Logo,
  Logout,
  Profile,
  ProfileContainer,
  SearchInput,
  Wrap,
  GroupDropdownItem,
  Navigation,
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
      <HeaderContainer>
        <Logo>
          <Link href="/">
            {groups && groups.length > 0 ? groups[0].title : 'FUKIN FRIENDS'}
          </Link>
        </Logo>
        <Navigation>
          <div>HOME</div>
          <div>FEED</div>
          <div>NOTICE</div>
          <div>EVENT</div>
          <div>ALBUM</div>
          <div>PLAY LIST</div>
        </Navigation>
        <HeaderRightSection>
          <SearchInput placeholder="Search" />
          {token ? (
            <ProfileContainer>
              <Profile onClick={showDropdown}>
                <div></div>
              </Profile>
              {isShowDropdown ? 
                <DropdownItem>
                  <div></div>
                  <div>
                    <DropdownProfile>
                      <Profile>
                        <div></div>
                      </Profile>
                      <div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                      </div>
                    </DropdownProfile>
                    <Logout onClick={logoutHandler}>로그아웃</Logout>
                  </div>
                </DropdownItem>
                : ""
              }
            </ProfileContainer>
          ) : (
            <LoginText>
              <Link href="/login">로그인</Link>
            </LoginText>
          )}
        </HeaderRightSection>
      </HeaderContainer>
    </Wrap>
  );
};

export default Header;
