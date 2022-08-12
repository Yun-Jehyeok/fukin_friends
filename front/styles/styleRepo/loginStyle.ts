import GoogleButton from 'react-google-button';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5455dd;
`;

export const LoginForm = styled.div`
  width: 1000px;
  height: 600px;
  background-color: white;
  border-radius: 16px;
  margin: 0 auto;
  display: flex;

  & > div {
    height: 100%;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  & > div:first-child {
    border-right: 1px solid #eaeaea;
    width: 55%;
  }
  & > div:last-child {
    width: 45%;

    & > span {
      box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;
      border-radius: 8px;
      height: 50px;
    }
  }
`;

export const LoginTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

export const LoginLabel = styled.div`
  margin-bottom: 8px;
`;

export const LoginInput = styled.input.attrs({ autoComplete: 'off' })`
  width: 100%;
  height: 48px;
  margin-bottom: 24px;
  outline: none;
  padding-left: 12px;
`;

export const LoginButton = styled.div`
  width: 100%;
  height: 48px;
  line-height: 48px;
  color: white;
  background-color: #5455dd;
  text-align: center;
`;

export const OtherSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 24px;
  font-size: 14px;

  & a {
    text-decoration: underline;
    color: #5455dd;
  }
  & > div {
    margin-top: 8px;
  }
`;

export const SocialLogin = styled.div`
  font-size: 18px;
  text-align: center;
  margin-bottom: 18px;
`;

export const GoogleBtn = styled(GoogleButton)`
  width: 100% !important;
  margin-bottom: 8px;
`;
