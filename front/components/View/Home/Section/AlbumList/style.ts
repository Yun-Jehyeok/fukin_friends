import styled from "styled-components";

export const AlbumListContainer = styled.div`
  width: 100%;
  margin-top: 160px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #151875;
  font-weight: bold;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 53px;
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  width: 400px;
  height: 280px;
  margin-right: 24px;

  & img {
    border-radius: 16px;
  }
`;
