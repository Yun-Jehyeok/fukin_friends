import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 12px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  flex-grow: 1;
  height: 100%;
  line-height: 32px;
  font-size: 18px;
`;

export const SearchInput = styled.input`
  width: 480px;
  height: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #f5f4f7;
  color: gray;
  box-shadow: 0 1px 3px rgb(115 115 115 / 16%);
  outline: none;
  margin-right: 16px;
`;

export const Profile = styled.div`
  width: fit-content;
  height: 100%;
  cursor: pointer;

  & > div:first-child {
    width: 32px;
    height: 100%;
    border-radius: 50%;
    background-color: #f5f4f7;
    border: 1px solid #cacaca;
  }
`;
