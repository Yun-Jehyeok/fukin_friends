import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5455dd;
`;

export const LoginForm = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 16px;
  margin: 0 auto;
  display: flex;

  & > div {
    height: 100%;
  }
  & > div:first-child {
    border-right: 1px solid #eaeaea;
    width: 60%;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  & > div:last-child {
    width: 40%;
  }
`;

export const LoginTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 24px;
`;

export const LoginButton = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: white;
  background-color: #5455dd;
  text-align: center;
`;
