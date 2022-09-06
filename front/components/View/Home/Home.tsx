import { NextPage } from 'next';
import { Container } from 'styles/styleRepo/global';

import NoticeList from './Section/NoticeList/NoticeList';
import MusicList from './Section/MusicList/MusicList';
import AlbumList from './Section/AlbumList/AlbumList';
import { HomeTopImgContainer } from './style';

const Home: NextPage = () => {
  return (
    <Container>
      <HomeTopImgContainer>
        Test...
      </HomeTopImgContainer>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </Container>
  );
};

export default Home;
