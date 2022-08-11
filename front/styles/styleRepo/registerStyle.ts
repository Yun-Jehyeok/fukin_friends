import GoogleButton from 'react-google-button';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5455dd;
`;

export const RegisterForm = styled.div`
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

export const RegisterTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

export const RegisterLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
`;

export const RegisterInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  padding-left: 12px;
`;

export const PasswordCheckErr = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 16px;
  margin-top: -8px;
`;

export const RegisterButton = styled.div`
  width: 100%;
  height: 48px;
  line-height: 48px;
  color: white;
  background-color: #5455dd;
  text-align: center;
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
