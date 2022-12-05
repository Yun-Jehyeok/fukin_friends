import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { userActions } from "src/store/reducers/userReducer";
import {
  AuthBtn,
  AuthCont,
  AuthInp,
  AuthTitle,
} from "styles/styleRepo/authFormStyle";
import { PwInquiryForm, PwInquiryLab } from "styles/styleRepo/pwInquiry";

const PwInquiry: NextPage = () => {
  const email = useInput("");

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email.value)
        dispatch(userActions.sendEmailReq({ email: email.value }));
    },
    [dispatch, email]
  );

  return (
    <AuthCont>
      <PwInquiryForm>
        <AuthTitle>
          <Link href="/">비밀번호 찾기</Link>
        </AuthTitle>
        <form onSubmit={handleSubmit}>
          <PwInquiryLab>비밀번호를 찾을 이메일을 입력해주세요.</PwInquiryLab>
          <AuthInp
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            required
            {...email}
          />
          <AuthBtn>전송</AuthBtn>
        </form>
      </PwInquiryForm>
    </AuthCont>
  );
};

export default PwInquiry;
