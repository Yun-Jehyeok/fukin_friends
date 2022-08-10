import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useInput } from 'hooks/useInput';
import KakaoBtn from 'public/img/kakao_login.png';
import {
  LoginContainer,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginTitle,
  LoginButton,
  OtherSection,
  GoogleBtn,
  SocialLogin,
} from 'styles/styleRepo/loginStyle';
import Image from 'next/image';
import Link from 'next/link';

const Login: NextPage = () => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(email.value);
      console.log(password.value);
    },
    [email, password],
  );

  return (
    <LoginContainer>
      <LoginForm>
        <div>
          <div>
            <LoginTitle>
              <Link href="/">Sign In</Link>
            </LoginTitle>
            <form onSubmit={handleSubmit}>
              <LoginLabel>Email</LoginLabel>
              <LoginInput type="email" name="email" required {...email} />
              <LoginLabel>Password</LoginLabel>
              <LoginInput
                type="password"
                name="password"
                required
                {...password}
              />
              <LoginButton>Sign In</LoginButton>
            </form>
            <OtherSection>
              <Link href="#">Forgot a password?</Link>
              <div>
                Is not a member?&nbsp;<Link href="/register">Sign up</Link>
              </div>
            </OtherSection>
          </div>
        </div>
        <div>
          <SocialLogin>소셜 로그인</SocialLogin>
          <GoogleBtn>Sign in with Google</GoogleBtn>
          <Image src={KakaoBtn} alt="kakao" />
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
