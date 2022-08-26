import GoogleButton from 'react-google-button';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F4F9FC;
`;

export const LoginForm = styled.div`
  width: 530px;
  margin: 0 auto;
  
  & > div {
    height: 100%;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const LoginTitle = styled.div`
  font-size: 48px;
  color: #5455dd;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`;

export const LoginLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

export const LoginInput = styled.input.attrs({ autoComplete: 'off' })`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  outline: none;
  padding-left: 12px;
  border: 1px solid black;
  font-size: 16px;
`;

export const InputErrMsg = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 16px;
  margin-top: -8px;
`;

export const LoginButton = styled.button`
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
`;

export const OtherSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 24px;
  font-size: 14px;

  & a {
    text-decoration: underline;
    color: #5455dd;
    font-weight: bold;
  }
  & > div {
    margin-top: 8px;
  }
`;

export const SocialLoginContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const Divider = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 18px;
  position: relative;

  &::before {
    content: '';
    width: calc(50% - 60px);
    height: 1px;
    background-color: black;
    position: absolute;
    left: 0;
    top: 50%;
  }
  &::after {
    content: '';
    width: calc(50% - 60px);
    height: 1px;
    background-color: black;
    position: absolute;
    right: 0;
    top: 50%;
  }
`;

export const GoogleBtn = styled(GoogleButton)`
  width: 100% !important;
  margin-bottom: 8px;
`;
