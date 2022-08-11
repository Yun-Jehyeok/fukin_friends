import { NextPage } from 'next';
import { CalendarContainer, Dates, Day, Days } from './style';

const days = [
  { id: 1, value: 'MON' },
  { id: 2, value: 'TUE' },
  { id: 3, value: 'WED' },
  { id: 4, value: 'THU' },
  { id: 5, value: 'FRI' },
  { id: 6, value: 'SAT' },
  { id: 0, value: 'SUN' },
];

const Calendar: NextPage = () => {
  return (
    <CalendarContainer>
      <Days>
        {days.map((item) => (
          <Day key={item.id}>{item.value}</Day>
        ))}
      </Days>
      <Dates className="dates"></Dates>
    </CalendarContainer>
  );
};

export default Calendar;
