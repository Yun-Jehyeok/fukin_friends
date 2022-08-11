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
  InputErrMsg,
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

  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [isPasswordCheckErr, setIsPasswordCheckErr] = useState(false);

  // const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (name.value === '') {
        setIsNameBlank(true);
      }
      if (email.value === '') {
        setIsEmailBlank(true);
      }
      if (password.value === '') {
        setIsPasswordBlank(true);
      }

      if (!isNameBlank && !isEmailBlank && !isPasswordBlank) {
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
      }
    },
    [
      isNameBlank,
      isEmailBlank,
      isPasswordBlank,
      name,
      email,
      password,
      passwordCheck,
    ],
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
              <RegisterLabel>이름</RegisterLabel>
              <RegisterInput type="text" name="name" required {...name} />
              {isNameBlank ? (
                <InputErrMsg>* 이름은 필수값입니다.</InputErrMsg>
              ) : (
                ''
              )}
              <RegisterLabel>이메일</RegisterLabel>
              <RegisterInput type="email" name="email" required {...email} />
              {isEmailBlank ? (
                <InputErrMsg>* 이메일은 필수값입니다.</InputErrMsg>
              ) : (
                ''
              )}
              <RegisterLabel>비밀번호</RegisterLabel>
              <RegisterInput
                type="password"
                name="password"
                required
                {...password}
              />
              {isPasswordBlank ? (
                <InputErrMsg>* 비밀번호는 필수값입니다.</InputErrMsg>
              ) : (
                ''
              )}
              <RegisterLabel>비밀번호 확인</RegisterLabel>
              <RegisterInput
                type="password"
                name="passwordCheck"
                required
                {...passwordCheck}
              />
              {isPasswordCheckErr ? (
                <InputErrMsg>
                  * 비밀번호 확인란은 비밀번호와 같아야 합니다.
                </InputErrMsg>
              ) : (
                ''
              )}
              <RegisterButton>회원가입</RegisterButton>
            </form>
          </div>
        </div>
        <div>
          <SocialLogin>소셜 로그인</SocialLogin>
          <GoogleBtn></GoogleBtn>
          <Image src={KakaoBtn} alt="kakao" />
        </div>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
