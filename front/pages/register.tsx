import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useStringInput } from 'hooks/useInput';
import {
  RegisterContainer,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterTitle,
  RegisterButton,
  InputErrMsg,
  RegisterAuthContainer,
  RegisterAuthBtn,
} from 'styles/styleRepo/registerStyle';
import Link from 'next/link';
import { useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { userActions } from 'src/store/reducers/userReducer';
import TermsOfService from 'components/Auth/TermsOfService/TermsOfService';
import { RootState } from 'src/configureStore';
import { useSelector } from 'react-redux';

const Register: NextPage = () => {
  const name = useStringInput('');
  const email = useStringInput('');
  const password = useStringInput('');
  const passwordCheck = useStringInput('');
  const phone = useStringInput('');
  const authNum = useStringInput('');

  const [isTOSSuccess, setIsTOSSuccess] = useState(false);

  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [isPasswordCheckErr, setIsPasswordCheckErr] = useState(false);
  const [isPASuccess, setIsPASuccess] = useState(false);

  const { PANum } = useSelector((state: RootState) => state.user);

  const onCheckTOS = (checkTerms: boolean) => {
    if(checkTerms) {
      setIsTOSSuccess(true);
    } else {
      setIsTOSSuccess(false);
    }
  }

  const dispatch = useAppDispatch();

  const sendPA = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    console.log("name:::", name);
    console.log("phone:::", phone.value);
    
    dispatch(userActions.userPARequest({ name: name.value, phoneNum: phone.value }))
  }, [dispatch]);

  const checkPA = () => {
    console.log("PANum:::", PANum);
    console.log("authNum:::", authNum.value);

    console.log
    if(PANum === authNum.value) {
      setIsPASuccess(true);
    } else {
      setIsPASuccess(false);
    }
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(!isPASuccess) {
        alert("인증번호 확인!!")
      }
      if (name.value === '') {
        setIsNameBlank(true);
      }
      if (email.value === '') {
        setIsEmailBlank(true);
      }
      if (password.value === '') {
        setIsPasswordBlank(true);
      }

      if (!isNameBlank && !isEmailBlank && !isPasswordBlank && !isPASuccess) {
        if (password.value === passwordCheck.value) {
          setIsPasswordCheckErr(false);

          const user = {
            name: name.value,
            email: email.value,
            password: password.value,
          };

          dispatch(userActions.registerUserRequest(user));
        } else {
          setIsPasswordCheckErr(true);
        }
      }
    },
    [
      dispatch,
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
    <div>
      {!isTOSSuccess ? <TermsOfService checkTOS={onCheckTOS} />
        : (
          <RegisterContainer>
            <RegisterForm>
              <div>
                <div>
                  <RegisterTitle>
                    <Link href="/">SIGN UP</Link>
                  </RegisterTitle>
                  <form onSubmit={handleSubmit}>
                    <RegisterLabel>이름</RegisterLabel>
                    <RegisterInput type="text" name="name" required {...name} placeholder="이름을 입력하세요" />
                    {isNameBlank ? (
                      <InputErrMsg>* 이름은 필수값입니다.</InputErrMsg>
                    ) : (
                      ''
                    )}
                    <RegisterLabel>이메일</RegisterLabel>
                    <RegisterInput type="email" name="email" required {...email} placeholder="이메일을 입력하세요" />
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
                      placeholder="비밀번호를 입력하세요"
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
                      placeholder="비밀번호 확인을 입력하세요"
                      {...passwordCheck}
                    />
                    <RegisterLabel>휴대폰 인증</RegisterLabel>
                    <RegisterAuthContainer>
                      <div>
                        <RegisterInput
                          type="text"
                          name="phone"
                          required
                          placeholder="휴대폰 번호를 입력하세요"
                          {...phone}
                        />
                      </div>
                      <div>
                        <RegisterAuthBtn onClick={sendPA}>보내기</RegisterAuthBtn>
                      </div>
                    </RegisterAuthContainer>
                    
                    <RegisterAuthContainer>
                      <div>
                        <RegisterInput
                          type="text"
                          name="authNum"
                          required
                          placeholder="인증번호를 입력하세요"
                          {...authNum}
                        />
                      </div>
                      <div>
                        <RegisterAuthBtn onClick={checkPA}>확인</RegisterAuthBtn>
                      </div>
                    </RegisterAuthContainer>
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
            </RegisterForm>
          </RegisterContainer>
        )
    }
    </div>
  );
};

export default Register;
