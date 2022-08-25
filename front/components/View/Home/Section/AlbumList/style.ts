import styled from 'styled-components';

export const AlbumListContainer = styled.div`
  width: 100%;
  margin-top: 48px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const List = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  margin-top: 18px;
`;

export const Item = styled.div`
  width: 400px;
  height: 280px;
  margin-right: 24px;

  & img {
    border-radius: 16px;
  }
`;
