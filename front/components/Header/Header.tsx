import { useAppDispatch } from 'hooks/reduxHooks';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import { userActions } from 'src/store/reducers/userReducer';
import {
  DropdownItem,
  DropdownProfile,
  HeaderContainer,
  LoginText,
  Logo,
  Logout,
  Profile,
  ProfileContainer,
  SearchInput,
  Wrap,
} from './style';

const Header: NextPage = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const { token, user, hasGroup } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const showDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  }

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logoutRequest(token));
  }, [dispatch, token])

  return (
    <Wrap>
      <HeaderContainer>
        <Logo>
          {hasGroup ? "" : <Link href="/">FUKIN FRIENDS</Link>}
        </Logo>
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
      </HeaderContainer>
    </Wrap>
  );
};

export default Header;
