import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useInput } from 'hooks/useInput';
import KakaoBtn from 'public/img/kakao_login.png';
import {
  RegisterContainer,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterTitle,
  RegisterButton,
  GoogleBtn,
  SocialLogin,
  PasswordCheckErr,
} from 'styles/styleRepo/registerStyle';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { registerUser } from 'src/store/api/userApi';
import { useState } from 'react';

const Register: NextPage = () => {
  const name = useInput('');
  const email = useInput('');
  const password = useInput('');
  const passwordCheck = useInput('');

  const [isPasswordCheckErr, setIsPasswordCheckErr] = useState(false);

  // const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password.value === passwordCheck.value) {
        const user = {
          name: name.value,
          email: email.value,
          password: password.value,
        };

        console.log(user);
        // dispatch(registerUser(user));
      } else {
        setIsPasswordCheckErr(true);
      }
    },
    [name, email, password, passwordCheck],
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
              <RegisterLabel>Name</RegisterLabel>
              <RegisterInput type="text" name="name" required {...name} />
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
              {isPasswordCheckErr ? (
                <PasswordCheckErr>
                  * 비밀번호 확인란은 비밀번호와 같아야 합니다.
                </PasswordCheckErr>
              ) : (
                ''
              )}
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
