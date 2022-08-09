import styled from 'styled-components';

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 18px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Item = styled.div`
  position: relative;
  width: 400px;
  height: 240px;
  border-radius: 16px;
  margin-right: 16px;

  & img {
    border-radius: 16px;
  }
`;

export const ItemDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
  z-index: 1;
  color: white;
`;

export const ItemTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ItemAuthor = styled.div`
  color: light-gray;
`;
