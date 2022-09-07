import { NextPage } from 'next';
import {
  Attendees,
  NoticeListContainer,
  ItemTitle,
  List,
  Title,
  Description,
  DSCTitle,
  DSCPlace,
  DSCDate,
  Attendee,
} from './style';

let sampleData = [
  {
    id: '1',
    title: 'Drunk Day',
    date: '2022-08-12 6:00 PM',
    place: 'Yeouinaru station',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 3,
        src: 'https://placeimg.com/16/16/people',
      },
    ],
  },
  {
    id: '2',
    title: 'Drunk Day',
    date: '2022-08-12 6:00 PM',
    place: 'Yeouinaru station',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 3,
        src: 'https://placeimg.com/16/16/people',
      },
    ],
  },
  {
    id: '3',
    title: 'Congraturations',
    date: '2022-08-16 6:00 PM',
    place: 'Hannam-dong Chicken',
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/16/16/people',
      },
    ],
  },
  {
    id: '4',
    title: 'Just Drunk',
    date: '2022-09-12 4:00 PM',
    place: "Jongyun's house",
    attendees: [
      {
        id: 1,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 2,
        src: 'https://placeimg.com/16/16/people',
      },
      {
        id: 3,
        src: 'https://placeimg.com/16/16/people',
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
            <Description>
              <div>
                <DSCTitle>{item.title}</DSCTitle>
                <Attendees>
                  <div>
                    {item.attendees && item.attendees.length > 0 ? 
                      item.attendees.map(item => 
                        <Attendee key={item.id}>
                          <img src={item.src} />                    
                        </Attendee>
                      ) : ""
                    }
                  </div>
                </Attendees>
                <DSCPlace>{item.place}</DSCPlace>
                <DSCDate>{item.date}</DSCDate>
              </div>
            </Description>
          </div>
        ))}
      </List>
    </NoticeListContainer>
  );
};

export default NoticeList;
