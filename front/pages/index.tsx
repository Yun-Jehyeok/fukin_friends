import type { NextPage } from 'next';
import { Body, Container } from './style';

import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Navigation />
      </Body>
    </Container>
  );
};

export default Home;
