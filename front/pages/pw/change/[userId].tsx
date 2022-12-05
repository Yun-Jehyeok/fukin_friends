import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { userActions } from "src/store/reducers/userReducer";
import {
  AuthBtn,
  AuthCont,
  AuthInp,
  AuthInpErrMsg,
  AuthLab,
  AuthLabSpan,
  AuthTitle,
} from "styles/styleRepo/authFormStyle";
import { PwInquiryForm } from "styles/styleRepo/pwInquiry";

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const password = useInput("");
  const passwordCheck = useInput("");

  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [isPasswordCheckErr, setIsPasswordCheckErr] = useState(false);

  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [passwordCheckErrMsg, setPasswordCheckErrMsg] = useState("");

  const dispatch = useAppDispatch();

  const changePassword = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!reg.test(password.value)) {
        setIsPasswordBlank(true);
        setPasswordErrMsg(
          "* 비밀번호는 최소 8자 이상, 문자와 숫자 조합이어야 합니다."
        );
      } else {
        setIsPasswordBlank(false);

        if (password.value === passwordCheck.value) {
          setIsPasswordCheckErr(false);

          let id = userId as string;

          dispatch(
            userActions.changePWReq({
              userId: id,
              password: password.value,
            })
          );
        } else {
          setIsPasswordCheckErr(true);
          setPasswordCheckErrMsg(
            "* 비밀번호 확인란은 비밀번호와 같아야 합니다."
          );
        }
      }
    },
    [dispatch, userId, password, passwordCheck]
  );

  return (
    <AuthCont>
      <AuthTitle>비밀번호 변경</AuthTitle>
      <PwInquiryForm>
        <div>
          <form onSubmit={changePassword}>
            <AuthLab>
              비밀번호
              <AuthLabSpan>(비밀번호는 8자 이상, 문자와 숫자 조합)</AuthLabSpan>
            </AuthLab>
            <AuthInp
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              {...password}
            />
            {isPasswordBlank ? (
              <AuthInpErrMsg>{passwordErrMsg}</AuthInpErrMsg>
            ) : (
              ""
            )}
            <AuthLab>비밀번호 확인</AuthLab>
            <AuthInp
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 확인을 입력하세요"
              {...passwordCheck}
            />
            {isPasswordCheckErr ? (
              <AuthInpErrMsg>{passwordCheckErrMsg}</AuthInpErrMsg>
            ) : (
              ""
            )}
            <AuthBtn>변경</AuthBtn>
          </form>
        </div>
      </PwInquiryForm>
    </AuthCont>
  );
};

export default ChangePassword;
