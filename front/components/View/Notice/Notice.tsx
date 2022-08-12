import { NextPage } from 'next';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'styles/styleRepo/global';
import Calendar from './Section/Calendar/Calendar';
import Schedule from './Section/Schedule/Schedule';
import {
  HeaderDate,
  LeftArrow,
  RightArrow,
  Title,
  CalendarBody,
} from './style';

const Notice: NextPage = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [calendarData, setCalendarData] = useState();

  useEffect(() => {
    let today = new Date();
    let todayYear = String(today.getFullYear());
    let todayMonth =
      today.getMonth() + 1 > 9
        ? String(today.getMonth() + 1)
        : '0' + String(today.getMonth() + 1);
    let todayDate =
      today.getDate() > 9
        ? String(today.getDate())
        : '0' + String(today.getDate());

    setYear(todayYear);
    setMonth(todayMonth);
    setDate(todayDate);

    // 이전 달의 마지막 날 날짜 및 요일
    let startDay = new Date(Number(year), Number(month) - 1, 0);
    let prevDate = startDay.getDate();
    let prevDay = startDay.getDay();

    // 이번 달의 마지막날 날짜와 요일 구하기
    let endDay = new Date(Number(year), Number(month), 0);
    let nextDate = endDay.getDate();
    let nextDay = endDay.getDay();
  }, []);

  const goPrev = () => {
    console.log('go prev');
  };
  const goNext = () => {
    console.log('go next');
  };

  return (
    <Container>
      <Title>
        <div>Notice</div>
        <div>
          <LeftArrow onClick={goPrev}></LeftArrow>
          <HeaderDate>
            {year}-{month}
          </HeaderDate>
          <RightArrow onClick={goNext}></RightArrow>
        </div>
      </Title>
      <CalendarBody>
        <div>
          <Calendar />
        </div>
        <div>
          <Schedule />
        </div>
      </CalendarBody>
    </Container>
  );
};

export default Notice;
