import { NextPage } from 'next';
import { Container, Cover, Item, List, Title } from './style';
import Zico from './img/zico.jpeg';
import thinking from './img/thinking.jpeg';
import randombox from './img/randombox.jpeg';
import dontknow from './img/dontknow.jpeg';

let itemList = [
  {
    id: 1,
    img: Zico,
    title: '괴짜',
    singer: 'Zico',
  },
  {
    id: 2,
    img: thinking,
    title: '사람',
    singer: 'Zico',
  },
  {
    id: 3,
    img: randombox,
    title: '웬수',
    singer: 'Zico',
  },
  {
    id: 4,
    img: dontknow,
    title: 'Veni Vidi Vici',
    singer: 'Zico',
  },
];

const MusicList: NextPage = () => {
  return (
    <Container>
      <Title>Recently Played</Title>
      <List>
        {itemList.map((item) => (
          <Item key={item.id}>
            <Cover src={item.img} />
            <div>
              <div>{item.title}</div>
              <div>{item.singer}</div>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default MusicList;
