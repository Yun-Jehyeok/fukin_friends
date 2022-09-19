import { useAppDispatch } from "hooks/reduxHooks";
import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { userActions } from "src/store/reducers/userReducer";
import {
  AuthButton,
  AuthContainer,
  AuthInput,
  AuthInputErrMsg,
  AuthLabel,
  AuthLabelSpan,
  AuthTitle,
} from "styles/styleRepo/authFormStyle";
import { PwInquiryForm } from "styles/styleRepo/pwInquiry";

const CreateGroup: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  const password = useStringInput("");
  const passwordCheck = useStringInput("");

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

          let user = {
            userId,
            password: password.value,
          };

          dispatch(userActions.changePWRequest(user));
        } else {
          setIsPasswordCheckErr(true);
          setPasswordCheckErrMsg(
            "* 비밀번호 확인란은 비밀번호와 같아야 합니다."
          );
        }
      }
    },
    [dispatch, password, passwordCheck]
  );

  return (
    <AuthContainer>
      <AuthTitle>비밀번호 변경</AuthTitle>
      <PwInquiryForm>
        <div>
          <form onSubmit={changePassword}>
            <AuthLabel>
              비밀번호
              <AuthLabelSpan>
                (비밀번호는 8자 이상, 문자와 숫자 조합)
              </AuthLabelSpan>
            </AuthLabel>
            <AuthInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              {...password}
            />
            {isPasswordBlank ? (
              <AuthInputErrMsg>{passwordErrMsg}</AuthInputErrMsg>
            ) : (
              ""
            )}
            <AuthLabel>비밀번호 확인</AuthLabel>
            <AuthInput
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 확인을 입력하세요"
              {...passwordCheck}
            />
            {isPasswordCheckErr ? (
              <AuthInputErrMsg>{passwordCheckErrMsg}</AuthInputErrMsg>
            ) : (
              ""
            )}
            <AuthButton>변경</AuthButton>
          </form>
        </div>
      </PwInquiryForm>
    </AuthContainer>
  );
};

export default CreateGroup;
