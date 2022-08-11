import { NextPage } from 'next';
import {
  Attendees,
  NoticeListContainer,
  ItemSection,
  ItemTitle,
  List,
  Title,
} from './style';

let sampleData = [
  {
    id: '1',
    title: '개처럼 술마시는 날',
    date: '2022-08-12 6:00 PM',
    place: '여의나루역',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/30/30/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/30/30/people',
      },
      {
        id: 3,
        src: 'https://placeimg.com/30/30/people',
      },
    ],
  },
  {
    id: '2',
    title: '윤예진 취직 기념',
    date: '2022-08-16 6:00 PM',
    place: '한남동 한방통닭',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/30/30/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/30/30/people',
      },
    ],
  },
  {
    id: '3',
    title: '그냥 술마시는 날',
    date: '2022-09-12 4:00 PM',
    place: '정종윤 집',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/30/30/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/30/30/people',
      },
      {
        id: 3,
        src: 'https://placeimg.com/30/30/people',
      },
    ],
  },
];

const NoticeList: NextPage = () => {
  return (
    <NoticeListContainer>
      <Title>공지사항</Title>
      <List>
        {sampleData.map((item) => (
          <div key={item.id}>
            <div>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSection>
                <div>
                  <b>시간</b>&nbsp;&nbsp;
                  {item.date}
                </div>
                <div>
                  <b>장소</b>&nbsp;&nbsp;
                  {item.place}
                </div>
              </ItemSection>
            </div>
            <Attendees>
              <div>
                <b>참석자</b>
              </div>
              <div>
                {item.attendees.map((img) => (
                  <img key={img.id} alt={img.src} src={img.src} />
                ))}
              </div>
            </Attendees>
          </div>
        ))}
      </List>
    </NoticeListContainer>
  );
};

export default NoticeList;
