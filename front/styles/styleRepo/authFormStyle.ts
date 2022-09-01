import styled from "styled-components";

export const AuthContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #F4F9FC;
`;

export const AuthWrap = styled.div`
    width: 480px;
    margin: 0 auto;
`;

export const AuthTitle = styled.div`
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    margin-bottom: 32px;
    color: #5455dd;
`;

export const AuthLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

export const AuthLabelSpan = styled.span`
    font-size: 12px;
    margin-left: 4px;
    color: gray;
`;

export const AuthInput = styled.input.attrs({ autoComplete: 'off' })`
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
    outline: none;
    padding-left: 12px;
    border: 1px solid black;
    font-size: 16px;
`;

export const AuthInputErrMsg = styled.div`
    font-size: 12px;
    color: red;
    margin-bottom: 16px;
    margin-top: -8px;
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 56px;
  line-height: 56px;
  color: white;
  background-color: #5455dd;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #3D3EBE;
  }
`;
