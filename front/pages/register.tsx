import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import { useStringInput } from 'hooks/useInput';
import Link from 'next/link';
import { useAppDispatch } from 'hooks/reduxHooks';
import { userActions } from 'src/store/reducers/userReducer';
import TermsOfService from 'components/Auth/TermsOfService/TermsOfService';
import { RootState } from 'src/configureStore';
import { useSelector } from 'react-redux';
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
  const [sendPASuccess, setSendPASuccess] = useState(false);
  const [isPASuccess, setIsPASuccess] = useState(false);

  const [minute, setMinute] = useState('3');
  const [second, setSecond] = useState('00');

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

    setSendPASuccess(true);

    let secondsRemaining = 180;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {
      secondsRemaining = secondsRemaining - 1;

      min = secondsRemaining / 60;
      sec = secondsRemaining % 60;

      let strSec = sec < 10 ? '0' + String(sec) : String(sec);

      setMinute(String(parseInt(String(min))));
      setSecond(strSec);

      if (secondsRemaining < 0) { 
        setSendPASuccess(false);
        alert("인증 시간을 초과했습니다. 인증번호를 다시 보내주세요.")
        clearInterval(countInterval);
      };
    }, 1000);

    dispatch(userActions.userPARequest({ name: name.value, phoneNum: phone.value }))
  }, [dispatch, name, phone]);

  const checkPA = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if(PANum === authNum.value) {
      setIsPASuccess(true);
      alert("인증번호가 확인되었습니다.")
    } else {
      setIsPASuccess(false);
    }
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(!isPASuccess) {
        alert("인증번호를 확인해주세요.");
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

      let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!reg.test(password.value)) {
        alert("비밀번호는 최소 8자 이상, 문자와 숫자 조합이어야 합니다.")
      }

      if (!isNameBlank && !isEmailBlank && !isPasswordBlank && isPASuccess) {
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
      isPASuccess,
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
                    <RegisterLabel>
                      비밀번호
                      <span>(비밀번호는 8자 이상, 문자와 숫자 조합)</span>
                    </RegisterLabel>
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
                        <RegisterAuthBtn sendPASuccess={sendPASuccess} onClick={sendPA}>
                          {sendPASuccess ? minute + ':' + second : '보내기'}
                        </RegisterAuthBtn>
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
                        <RegisterAuthBtn sendPASuccess={false} onClick={checkPA}>확인</RegisterAuthBtn>
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
