import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useStringInput } from 'hooks/useInput';
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
  const email = useStringInput('');
  const password = useStringInput('');

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
              <LoginLabel>이메일</LoginLabel>
              <LoginInput type="email" name="email" required {...email} />
              <LoginLabel>비밀번호</LoginLabel>
              <LoginInput
                type="password"
                name="password"
                required
                {...password}
              />
              <LoginButton>로그인</LoginButton>
            </form>
            <OtherSection>
              <Link href="#">비밀번호를 잊어버리셨나요?</Link>
              <div>
                회원이 아니신가요?&nbsp;<Link href="/register">회원가입</Link>
              </div>
            </OtherSection>
          </div>
        </div>
        <div>
          <SocialLogin>소셜 로그인</SocialLogin>
          <GoogleBtn></GoogleBtn>
          <Image src={KakaoBtn} alt="kakao" />
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
