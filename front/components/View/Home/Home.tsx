import { NextPage } from 'next';
import { Container } from 'styles/styleRepo/global';
import { Title, Welcome } from './style';

import NoticeList from './Section/NoticeList/NoticeList';
import MusicList from './Section/MusicList/MusicList';
import AlbumList from './Section/AlbumList/AlbumList';

const Home: NextPage = () => {
  return (
    <Container>
      <Welcome>환영합니다, 윤제혁님!</Welcome>
      <Title>Home</Title>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </Container>
  );
};

export default Home;
