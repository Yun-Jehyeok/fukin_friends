import { NextPage } from 'next';
import Link from 'next/link';
import { HeaderContainer, Logo, Profile, SearchInput, Wrap } from './style';

const Header: NextPage = () => {
  return (
    <Wrap>
      <HeaderContainer>
        <Logo>
          <Link href="/">
            FUKIN FRIENDS 
          </Link>
        </Logo>
        <SearchInput placeholder="Search" />
        <Link href="/login">
          <Profile>
            <div></div>
          </Profile>
        </Link>
      </HeaderContainer>
    </Wrap>
  );
};

export default Header;
