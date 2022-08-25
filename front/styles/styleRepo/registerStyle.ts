import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F4F9FC;
`;

export const RegisterForm = styled.div`
  width: 40%;
  border-radius: 16px;
  margin: 0 auto;

  & > div {
    height: 100%;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const RegisterTitle = styled.div`
  font-size: 48px;
  color: #5455dd;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`;

export const RegisterLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

export const RegisterInput = styled.input.attrs({ autoComplete: 'off' })`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  padding-left: 12px;
  outline: none;
  border: 1px solid black;
`;

export const InputErrMsg = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 16px;
  margin-top: -8px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 56px;
  color: white;
  background-color: #5455dd;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const RegisterAuthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 16px;

  & > div:first-child {
    width: calc(80% - 4px);
  }
  & > div:last-child {
    width: calc(20% - 4px);
  }
`;

export const RegisterAuthBtn = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #5455dd;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;