import styled from 'styled-components';

export const MusicListContainer = styled.div`
  width: 100%;
  margin-top: 160px;
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
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  width: 120px;
  height: fit-content;
  margin-right: 24px;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 8px;

  & > div {
    font-size: 14px;
  }
  & > div:last-child {
    color: gray;
  }
`;
