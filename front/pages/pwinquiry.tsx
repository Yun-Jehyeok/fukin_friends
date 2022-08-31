import type { NextPage } from 'next';
import { useCallback } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { PwInquiryButton, PwInquiryContainer, PwInquiryForm, PwInquiryInput, PwInquiryLabel, PwInquiryTitle } from 'styles/styleRepo/pwInquiry';
import { useStringInput } from 'hooks/useInput';
import Link from 'next/link';

const PwInquiry: NextPage = () => {
    const email = useStringInput('');

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      if(email.value) {
        // dispatch(sendEmail...);
        console.log("send Email...");
      }
    },
    [dispatch, email]
  );

  return (
    <PwInquiryContainer>
        <PwInquiryForm>
            <PwInquiryTitle>
                <Link href="/">비밀번호 찾기</Link>
            </PwInquiryTitle>
            <form onSubmit={handleSubmit}>
                <PwInquiryLabel>비밀번호를 찾을 이메일을 입력해주세요.</PwInquiryLabel>
                <PwInquiryInput type="email" name="email" placeholder="이메일을 입력하세요" required {...email} />
                <PwInquiryButton>전송</PwInquiryButton>
            </form>
        </PwInquiryForm>
    </PwInquiryContainer>
  );
};

export default PwInquiry;
