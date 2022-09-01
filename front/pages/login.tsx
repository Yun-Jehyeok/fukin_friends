import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { useStringInput } from 'hooks/useInput';
import Link from 'next/link';
import { userActions } from 'src/store/reducers/userReducer';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useSelector } from 'react-redux';
import { RootState } from 'src/configureStore';
import {
  LoginForm,
  OtherSection,
  GoogleBtn,
  Divider,
  SocialLoginContainer,
} from 'styles/styleRepo/loginStyle';
import { AuthButton, AuthContainer, AuthInput, AuthInputErrMsg, AuthLabel, AuthTitle } from 'styles/styleRepo/authFormStyle';

const Login: NextPage = () => {
  const email = useStringInput('');
  const password = useStringInput('');

  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);

  const { errMsg } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if (email.value === '') {
        setIsEmailBlank(true);
      }
      if (password.value === '') {
        setIsPasswordBlank(true);
      }

      if (!isEmailBlank && !isPasswordBlank) {
        const user = {
          email: email.value,
          password: password.value,
        };

        dispatch(userActions.loginUserRequest(user));
      }
    },
    [dispatch, isEmailBlank, isPasswordBlank, email, password]
  );

  return (
    <AuthContainer>
      <LoginForm>
        <div>
          <div>
            <AuthTitle>
              <Link href="/">SIGN IN</Link>
            </AuthTitle>
            <SocialLoginContainer>
              <Divider>소셜 로그인</Divider>
              <GoogleBtn></GoogleBtn>
            </SocialLoginContainer>
            <Divider>이메일 로그인</Divider>
            <form onSubmit={handleSubmit}>
              <AuthLabel>이메일</AuthLabel>
              <AuthInput type="email" name="email" placeholder="이메일을 입력하세요" required {...email} />
              {errMsg && errMsg.includes('이메일') ? <AuthInputErrMsg>{errMsg}</AuthInputErrMsg> : ''}
              <AuthLabel>비밀번호</AuthLabel>
              <AuthInput
                type="password"
                name="password"
                required
                placeholder="비밀번호를 입력하세요"
                {...password}
              />
              {errMsg && errMsg.includes('비밀번호') ? <AuthInputErrMsg>{errMsg}</AuthInputErrMsg> : ''}
              <AuthButton>로그인</AuthButton>
            </form>
            <OtherSection>
              <Link href="/pwinquiry">비밀번호를 잊어버리셨나요?</Link>
              <div>
                회원이 아니신가요?&nbsp;<Link href="/register">회원가입</Link>
              </div>
            </OtherSection>
          </div>
        </div>
      </LoginForm>
    </AuthContainer>
  );
};

export default Login;
