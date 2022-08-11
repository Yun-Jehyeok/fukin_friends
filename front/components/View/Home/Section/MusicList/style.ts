import styled from 'styled-components';

export const MusicListContainer = styled.div`
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
  display: flex;
  margin-top: 18px;
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
