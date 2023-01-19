import errMsg from "components/errMsg";
import Input from "components/Input";
import TermsOfService from "components/TermsOfService";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";

const Register: NextPage = () => {
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");
  const phone = useInput("");
  const authNum = useInput("");

  const [isTOSSuccess, setIsTOSSuccess] = useState(false);
  const [isNameBlank, setIsNameBlank] = useState(false);
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [isPasswordCheckErr, setIsPasswordCheckErr] = useState(false);
  const [sendPASuccess, setSendPASuccess] = useState(false);
  const [isPASuccess, setIsPASuccess] = useState(false);

  const [countInterval, setCountInterval] =
    useState<ReturnType<typeof setInterval>>();

  const [minute, setMinute] = useState("3");
  const [second, setSecond] = useState("00");

  const { PANum } = useSelector((state: RootState) => state.user);

  const onCheckTOS = (checkTerms: boolean) => {
    if (checkTerms) setIsTOSSuccess(true);
    else setIsTOSSuccess(false);
  };

  const dispatch = useAppDispatch();

  const sendPA = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      if (phone.value !== "") {
        setSendPASuccess(true);

        let secondsRemaining = 180;
        let min = 0;
        let sec = 0;

        let cntIntervalFunc = setInterval(function () {
          secondsRemaining = secondsRemaining - 1;

          min = secondsRemaining / 60;
          sec = secondsRemaining % 60;

          let strSec = sec < 10 ? "0" + String(sec) : String(sec);

          setMinute(String(parseInt(String(min))));
          setSecond(strSec);

          if (secondsRemaining < 0) {
            setSendPASuccess(false);
            alert("인증 시간을 초과했습니다. 인증번호를 다시 보내주세요.");
            clearInterval(countInterval);
          }
        }, 1000);

        setCountInterval(cntIntervalFunc);

        dispatch(userActions.userPAReq({ phoneNum: phone.value }));
      } else {
        alert("휴대폰 번호를 입력해주세요");
      }
    },
    [dispatch, phone]
  );

  const checkPA = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (PANum === authNum.value) {
      setIsPASuccess(true);
      alert("인증번호가 확인되었습니다.");
      setSendPASuccess(false);
      clearInterval(countInterval);
    } else setIsPASuccess(false);
  };

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!isPASuccess) alert("인증번호를 확인해주세요.");
      if (name.value === "") setIsNameBlank(true);
      if (email.value === "") setIsEmailBlank(true);
      if (password.value === "") setIsPasswordBlank(true);

      let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!reg.test(password.value))
        alert("비밀번호는 최소 8자 이상, 문자와 숫자 조합이어야 합니다.");

      if (!isNameBlank && !isEmailBlank && !isPasswordBlank && isPASuccess) {
        if (password.value === passwordCheck.value) {
          setIsPasswordCheckErr(false);

          dispatch(
            userActions.registerUserReq({
              name: name.value,
              email: email.value,
              password: password.value,
              phone: phone.value,
            })
          );
        } else setIsPasswordCheckErr(true);
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
      phone,
      password,
      passwordCheck,
    ]
  );

  return (
    <div>
      {!isTOSSuccess ? (
        <TermsOfService checkTOS={onCheckTOS} />
      ) : (
        <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex justify-center flex-col bg-[#f4f9fc]">
          <div className="w-530 rounded-2xl mx-auto my-0">
            <div className="h-full p-12 flex justify-center flex-col">
              <div>
                <div className="font-bold text-5xl text-center mb-8">
                  <Link href="/">
                    <a className="text-lightblue hover:text-lightblue">
                      SIGN UP
                    </a>
                  </Link>
                </div>
                <div className="mb-2 text-sm text-black font-bold">이름</div>
                <Input
                  type="text"
                  name="name"
                  placeholder="이름을 입력하세요"
                  data={name}
                />
                {isNameBlank ? errMsg("이름은 필수값입니다.") : ""}
                <div className="mb-2 text-sm text-black font-bold">이메일</div>
                <Input
                  type="email"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  data={email}
                />
                {isEmailBlank ? errMsg("이메일은 필수값입니다.") : ""}
                <div className="mb-2 text-sm text-black font-bold">
                  비밀번호
                  <span className="ml-1 text-gray-500 text-xs">
                    (비밀번호는 8자 이상, 문자와 숫자 조합)
                  </span>
                </div>
                <Input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  data={password}
                />
                {isPasswordBlank ? errMsg("비밀번호는 필수값입니다.") : ""}
                <div className="mb-2 text-sm text-black font-bold">
                  비밀번호 확인
                </div>
                <Input
                  type="password"
                  name="passwordCheck"
                  placeholder="비밀번호 확인을 입력하세요"
                  data={passwordCheck}
                />
                <div className="mb-2 text-sm text-black font-bold">
                  휴대폰 인증
                </div>
                <div className="w-full flex justify-between gap-2 h-12 mb-4">
                  <div className="w-4/5 bg-white h-12 mb-4 outline-none border border-solid border-black text-base flex justify-between">
                    <input
                      type="text"
                      name="phone"
                      placeholder="휴대폰 번호를 입력하세요"
                      {...phone}
                      className="outline-none border-none ring-0 h-full w-4/5 focus:border-none focus:ring-0"
                    />
                    {sendPASuccess ? (
                      <div className="h-full w-fit leading-[44px] pr-3 text-red-500">
                        {minute} : {second}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-1/5">
                    <button
                      className={`w-full h-full leading text-white bg-lightblue text-center border-none cursor-pointer text-base hover:bg-hoverlightblue`}
                      onClick={sendPA}
                    >
                      {sendPASuccess ? "재발송" : "보내기"}
                    </button>
                  </div>
                </div>

                <div className="w-full flex justify-between gap-2 h-12 mb-4">
                  <div className="w-4/5">
                    <Input
                      type="text"
                      name="authNum"
                      placeholder="인증번호를 입력하세요"
                      data={authNum}
                    />
                  </div>
                  <div className="w-1/5">
                    <button
                      className="w-full h-full text-white bg-lightblue text-center border-none cursor-pointer text-base hover:bg-hoverlightblue"
                      onClick={checkPA}
                    >
                      확인
                    </button>
                  </div>
                </div>
                {isPasswordCheckErr
                  ? errMsg("비밀번호 확인란은 비밀번호와 같아야 합니다.")
                  : ""}
                <button
                  className="w-full h-14 text-white bg-lightblue text-center text-lg cursor-pointer border-none outline-none hover:bg-hoverlightblue leading-14"
                  onClick={handleSubmit}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
