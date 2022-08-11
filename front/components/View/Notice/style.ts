import styled from 'styled-components';

export const NoticeContainer = styled.div`
  padding: 48px;
  width: 100%;
  height: calc(100vh - 56px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 18px;

  & > div:first-child {
    font-size: 32px;
    font-weight: bold;
  }
  & > div:last-child {
    display: flex;
    position: relative;
    top: 8px;
  }
`;

export const LeftArrow = styled.div`
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: relative;
  top: 8px;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  border-top: 1px solid black;
  border-right: 1px solid black;
  position: relative;
  top: 8px;
  cursor: pointer;
`;

export const HeaderDate = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 12px;
`;

export const CalendarBody = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-height: 560px;

  & > div:first-child {
    width: 70%;
    height: 100%;
  }
  & > div:last-child {
    width: calc(30% - 24px);
    height: 100%;
  }
`;
