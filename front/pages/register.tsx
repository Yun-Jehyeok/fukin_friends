import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useInput } from 'hooks/useInput';
import KakaoBtn from '../public/img/kakao_login.png';
import {
  RegisterContainer,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterTitle,
  RegisterButton,
  GoogleBtn,
  SocialLogin,
} from '../styles/styleRepo/registerStyle';
import Image from 'next/image';
import Link from 'next/link';

const Register: NextPage = () => {
  const email = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log(email.value);
      console.log(password.value);
    },
    [email, password],
  );

  return (
    <RegisterContainer>
      <RegisterForm>
        <div>
          <div>
            <RegisterTitle>
              <Link href="/">Sign Up</Link>
            </RegisterTitle>
            <form onSubmit={handleSubmit}>
              <RegisterLabel>Email</RegisterLabel>
              <RegisterInput type="email" name="email" required {...email} />
              <RegisterLabel>Password</RegisterLabel>
              <RegisterInput
                type="password"
                name="password"
                required
                {...password}
              />
              <RegisterLabel>Password Check</RegisterLabel>
              <RegisterInput
                type="password"
                name="passwordCheck"
                required
                {...passwordCheck}
              />
              <RegisterButton>Sign In</RegisterButton>
            </form>
          </div>
        </div>
        <div>
          <SocialLogin>소셜 로그인</SocialLogin>
          <GoogleBtn>Sign in with Google</GoogleBtn>
          <Image src={KakaoBtn} alt="kakao" />
        </div>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
