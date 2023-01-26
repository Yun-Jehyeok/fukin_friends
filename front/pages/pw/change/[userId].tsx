import errMsg from "components/errMsg";
import Input from "components/Input";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { userActions } from "src/store/reducers/userReducer";

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
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex justify-center flex-col bg-[#f4f9fc]">
      <div className="font-bold text-5xl text-center mb-8 text-lightBlue">
        비밀번호 변경
      </div>
      <div className="w-530 mx-auto my-0">
        <div className="h-fit -p-12 flex justify-center flex-col">
          <form onSubmit={changePassword}>
            <div className="mb-2 text-sm text-black font-bold">
              비밀번호
              <div className="ml-1 text-gray-500 text-xs">
                (비밀번호는 8자 이상, 문자와 숫자 조합)
              </div>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              data={password}
            />
            {isPasswordBlank ? errMsg(passwordErrMsg) : ""}
            <div className="mb-2 text-sm text-black font-bold">
              비밀번호 확인
            </div>
            <input
              autoComplete="off"
              type="password"
              name="passwordCheck"
              placeholder="비밀번호 확인을 입력하세요"
              {...passwordCheck}
            />
            {isPasswordCheckErr ? errMsg(passwordCheckErrMsg) : ""}
            <div className="w-full h-14 text-white bg-lightBlue text-center text-lg cursor-pointer border-none outline-none hover:bg-hoverLightBlue leading-14">
              변경
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
