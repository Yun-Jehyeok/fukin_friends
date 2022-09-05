import { NextPage } from 'next';
import { Container } from 'styles/styleRepo/global';
import { Title } from './style';

import NoticeList from './Section/NoticeList/NoticeList';
import MusicList from './Section/MusicList/MusicList';
import AlbumList from './Section/AlbumList/AlbumList';

const Home: NextPage = () => {
  return (
    <Container>
      <Title>Home</Title>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </Container>
  );
};

export default Home;
