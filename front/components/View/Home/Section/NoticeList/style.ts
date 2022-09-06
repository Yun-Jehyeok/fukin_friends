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

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 364px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;

  & > div {
    width: 270px;
    height: 361px;
    margin-right: 30px;
    color: white;
    box-shadow: 0 0 5px rgb(0 0 0 / 10%);
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 236px;
  background-color: #F6F7FB;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-family: 'Josefin Sans', sans-serif;
`;

export const ItemSection = styled.div`
  margin-top: 12px;

  & > div {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Attendees = styled.div`
  text-align: center;
  padding-top: 12px;
`;
