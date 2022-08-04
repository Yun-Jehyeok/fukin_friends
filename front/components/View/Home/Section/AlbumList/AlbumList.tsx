import { NextPage } from 'next';
import Image from 'next/image';
import { Container, Item, List, Title } from './style';
import rainbow from './img/rainbow.jpg';
import dresden from './img/dresden.jpg';
import cat from './img/cat1.jpg';

let itemList = [
  {
    id: 1,
    img: rainbow,
    title: 'rainbow',
  },
  {
    id: 2,
    img: dresden,
    title: 'dresden',
  },
  {
    id: 3,
    img: cat,
    title: 'cat',
  },
];

const AlbumList: NextPage = () => {
  return (
    <Container>
      <Title>Photos</Title>
      <List>
        {itemList.map((item) => (
          <Item key={item.id}>
            <Image src={item.img} alt={item.title} width={400} height={280} />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default AlbumList;
