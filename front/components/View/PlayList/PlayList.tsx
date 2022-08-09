import { NextPage } from 'next';
import PlayListItems from './PlayListItems/PlayListItems';
import { Container } from './style';

const PlayList: NextPage = () => {
  return (
    <Container>
      <PlayListItems />
    </Container>
  );
};

export default PlayList;
