import styled from 'styled-components';

export const NoticeListContainer = styled.div`
  width: 100%;
  margin-top: 200px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #151875;
  font-weight: bold;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  margin-bottom: 53px;
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 60%;
  background-color: #F6F7FB;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Description = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > div {
    height: fit-content;
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 370px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;

  & > div {
    width: 270px;
    height: 360px;
    margin-right: 30px;
    color: white;
    box-shadow: 0 0 12px rgb(0 0 0 / 10%);
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      border: 1px solid #2F1AC4;
    }
    &:hover ${Description} {
      background-color: #2F1AC4;

      & * {
        color: white;
      }
    }
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export const DSCTitle = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  color: #FB2E86;
  font-weight: bold;
`;

export const Attendees = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & > div {
    width: fit-content;
    display: flex;
  }
`;
export const Attendee = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 8px;
  }
  & > img {
    border-radius: 50%;
  }
`;
export const DSCPlace = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: #151875;
  margin-top: 12px;
`;

export const DSCDate = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 14px;
  color: #151875;
  margin-top: 8px;
`;