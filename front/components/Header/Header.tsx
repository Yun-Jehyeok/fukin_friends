import { NextPage } from 'next';
import Link from 'next/link';
import { Container, Logo, Profile, SearchInput, Wrap } from './style';

const Header: NextPage = () => {
  return (
    <Wrap>
      <Container>
        <Logo>FUKIN FRIENDS</Logo>
        <SearchInput placeholder="Search" />
        <Link href="/login">
          <Profile>
            <div></div>
          </Profile>
        </Link>
      </Container>
    </Wrap>
  );
};

export default Header;
