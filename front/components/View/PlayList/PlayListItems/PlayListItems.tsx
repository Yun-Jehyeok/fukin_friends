import { NextPage } from 'next';
import Image from 'next/image';
import {
  Item,
  ItemAuthor,
  ItemContainer,
  ItemDescription,
  ItemTitle,
  Title,
} from './style';

import back1 from './img/back1.jpg';

const itemList = [
  {
    id: 1,
    title: '여행가서 듣기 좋은 음악 모음',
    author: '윤제혁',
    imgSrc: back1,
  },
  {
    id: 2,
    title: '드라이브할 때 듣기 좋은 음악 모음',
    author: '정종윤',
    imgSrc: back1,
  },
];

const PlayListItems: NextPage = () => {
  return (
    <div>
      <Title>플레이리스트</Title>
      <ItemContainer>
        {itemList.map((item) => (
          <Item key={item.id}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={400}
              height={240}
            />
            <ItemDescription>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemAuthor>{item.author}</ItemAuthor>
            </ItemDescription>
          </Item>
        ))}
      </ItemContainer>
    </div>
  );
};

export default PlayListItems;
