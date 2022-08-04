import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  margin-top: 18px;

  & > div {
    width: 360px;
    height: 280px;
    border-radius: 16px;
    background-color: #5455dd;
    margin-right: 24px;
    padding: 32px;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const ItemTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  font-size: 20px;
  padding-bottom: 18px;
`;

export const ItemSection = styled.div`
  margin-top: 12px;

  & > div {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Attendees = styled.div`
  & > div:first-child {
    font-size: 16px;
    margin-bottom: 8px;
  }
  & > div:last-child {
    display: flex;

    & > img {
      margin-right: 12px;
      border-radius: 50%;
    }
  }
`;
