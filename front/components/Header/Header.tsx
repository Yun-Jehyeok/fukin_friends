import { NextPage } from 'next';
import { Container, Logo, Profile, SearchInput, Wrap } from './style';

const Header: NextPage = () => {
  return (
    <Wrap>
      <Container>
        <Logo>LOGO</Logo>
        <SearchInput placeholder="Search" />
        <Profile>
          <div></div>
        </Profile>
      </Container>
    </Wrap>
  );
};

export default Header;