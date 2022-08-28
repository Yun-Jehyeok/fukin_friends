import { NextPage } from 'next';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import {
  HeaderContainer,
  LoginText,
  Logo,
  Profile,
  SearchInput,
  Wrap,
} from './style';

const Header: NextPage = () => {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <Wrap>
      <HeaderContainer>
        <Logo>
          <Link href="/">FUKIN FRIENDS</Link>
        </Logo>
        <SearchInput placeholder="Search" />
        {token ? (
          <Profile>
            <div></div>
          </Profile>
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
