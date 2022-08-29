import styled from 'styled-components';

export const GroupContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F4F9FC;
`;

export const GroupWrap = styled.div`
  width: 480px;
  margin: 0 auto;
`;

export const GroupTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  margin-bottom: 32px;
`;

export const GroupFormTitle = styled.div`
    font-size: 16px;
    text-align: center;
    margin-bottom: 12px;
    color: gray;
`;

export const GroupInput = styled.input`
    outline: none;
    border: 1px solid #e8e8e8;
    width: 100%;
    height: 48px;
    padding-left: 16px;
`;

export const GroupButton = styled.button`
    width: 100%;
    height: 40px;
    border: 4px;
    outline: none;
    border: none;
    color: white;
    background-color: #5455dd;
    margin-top: 8px;
    cursor: pointer;

    &:hover {
        background-color: #3D3EBE;
    }
`;