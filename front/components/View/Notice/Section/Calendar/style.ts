import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
`;

export const Days = styled.div`
  width: 100%;
  height: calc(100% / 11);
  border-bottom: 1px solid #e8e8e8;
  display: flex;
`;

export const Day = styled.div`
  border-right: 1px solid #e8e8e8;
  width: calc(100% / 7);
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 13px;

  &:last-child {
    border: none;
  }
`;

export const Dates = styled.div`
  width: 100%;
  height: calc(100% - 100% / 11);
`;
