import Input from "components/Input";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { userActions } from "src/store/reducers/userReducer";

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
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex justify-center flex-col bg-[#f4f9fc]">
      <div className="w-530 mx-auto my-0">
        <div className="font-bold text-5xl text-center mb-8 text-lightblue">
          <Link href="/">
            <a className="text-lightblue hover:text-lightblue">비밀번호 찾기</a>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-sm text-gray-500 font-bold text-center">
            비밀번호를 찾을 이메일을 입력해주세요.
          </div>
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            data={email}
          />
          <div className="w-full h-14 text-white bg-lightblue text-center text-lg cursor-pointer border-none outline-none hover:bg-hoverlightblue leading-[56px]">
            전송
          </div>
        </form>
      </div>
    </div>
  );
};

export default PwInquiry;
