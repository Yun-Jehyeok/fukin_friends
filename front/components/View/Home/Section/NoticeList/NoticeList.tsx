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
    title: 'Drunk Day',
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
    title: 'Drunk Day',
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
    id: '3',
    title: 'Congraturations',
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
    id: '4',
    title: 'Just Drunk',
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
  }
];

const NoticeList: NextPage = () => {
  return (
    <NoticeListContainer>
      <Title>Notice</Title>
      <List>
        {sampleData.map((item) => (
          <div key={item.id}>
            <ItemTitle>
              {item.title}
            </ItemTitle>
            <Attendees>
              <div>{item.title}</div>
              <div>
                {item.attendees && item.attendees.length > 0 ? 
                  item.attendees.map(item => 
                    <div key={item.id}></div>
                  ) : ""
                }
              </div>
            </Attendees>
          </div>
        ))}
      </List>
    </NoticeListContainer>
  );
};

export default NoticeList;
