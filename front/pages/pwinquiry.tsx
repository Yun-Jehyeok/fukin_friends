import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { PwInquiryForm, PwInquiryLabel } from 'styles/styleRepo/pwInquiry';
import { useStringInput } from 'hooks/useInput';
import Link from 'next/link';
import { userActions } from 'src/store/reducers/userReducer';
import { AuthButton, AuthContainer, AuthInput, AuthTitle } from 'styles/styleRepo/authFormStyle';

const PwInquiry: NextPage = () => {
  const email = useStringInput('');
  
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(email.value) {
        dispatch(userActions.sendEmailRequest({ email: email.value }))
      }
    },
    [dispatch, email]
  );

  return (
    <AuthContainer>
        <PwInquiryForm>
            <AuthTitle>
                <Link href="/">비밀번호 찾기</Link>
            </AuthTitle>
            <form onSubmit={handleSubmit}>
                <PwInquiryLabel>비밀번호를 찾을 이메일을 입력해주세요.</PwInquiryLabel>
                <AuthInput type="email" name="email" placeholder="이메일을 입력하세요" required {...email} />
                <AuthButton>전송</AuthButton>
            </form>
        </PwInquiryForm>
    </AuthContainer>
  );
};

export default PwInquiry;
