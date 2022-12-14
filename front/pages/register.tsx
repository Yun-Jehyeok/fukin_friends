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

      setSendPASuccess(true);

      let secondsRemaining = 180;
      let min = 0;
      let sec = 0;

      let countInterval = setInterval(function () {
        secondsRemaining = secondsRemaining - 1;

        min = secondsRemaining / 60;
        sec = secondsRemaining % 60;

        let strSec = sec < 10 ? "0" + String(sec) : String(sec);

        setMinute(String(parseInt(String(min))));
        setSecond(strSec);

        if (secondsRemaining < 0) {
          setSendPASuccess(false);
          alert("?????? ????????? ??????????????????. ??????????????? ?????? ???????????????.");
          clearInterval(countInterval);
        }
      }, 1000);

      dispatch(userActions.userPAReq({ phoneNum: phone.value }));
    },
    [dispatch, phone]
  );

  const checkPA = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (PANum === authNum.value) {
      setIsPASuccess(true);
      alert("??????????????? ?????????????????????.");
    } else setIsPASuccess(false);
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isPASuccess) alert("??????????????? ??????????????????.");
      if (name.value === "") setIsNameBlank(true);
      if (email.value === "") setIsEmailBlank(true);
      if (password.value === "") setIsPasswordBlank(true);

      let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!reg.test(password.value))
        alert("??????????????? ?????? 8??? ??????, ????????? ?????? ??????????????? ?????????.");

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
                <form onSubmit={handleSubmit}>
                  <div className="mb-2 text-sm text-black font-bold">??????</div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="????????? ???????????????"
                    data={name}
                  />
                  {isNameBlank ? errMsg("????????? ??????????????????.") : ""}
                  <div className="mb-2 text-sm text-black font-bold">
                    ?????????
                  </div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="???????????? ???????????????"
                    data={email}
                  />
                  {isEmailBlank ? errMsg("???????????? ??????????????????.") : ""}
                  <div className="mb-2 text-sm text-black font-bold">
                    ????????????
                    <span className="ml-1 text-gray-500 text-xs">
                      (??????????????? 8??? ??????, ????????? ?????? ??????)
                    </span>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="??????????????? ???????????????"
                    data={password}
                  />
                  {isPasswordBlank ? errMsg("??????????????? ??????????????????.") : ""}
                  <div className="mb-2 text-sm text-black font-bold">
                    ???????????? ??????
                  </div>
                  <Input
                    type="password"
                    name="passwordCheck"
                    placeholder="???????????? ????????? ???????????????"
                    data={passwordCheck}
                  />
                  <div className="mb-2 text-sm text-black font-bold">
                    ????????? ??????
                  </div>
                  <div className="w-full flex justify-between gap-2 h-12 mb-4">
                    <div className="w-4/5">
                      <Input
                        type="text"
                        name="phone"
                        placeholder="????????? ????????? ???????????????"
                        data={phone}
                      />
                    </div>
                    <div className="w-1/5">
                      <button
                        className={`w-full h-full leading text-white bg-lightblue text-center border-none ${
                          sendPASuccess
                            ? "pointer-events-none"
                            : "cursor-pointer"
                        } text-base hover:bg-hoverlightblue`}
                        onClick={sendPA}
                      >
                        {sendPASuccess ? minute + ":" + second : "?????????"}
                      </button>
                    </div>
                  </div>

                  <div className="w-full flex justify-between gap-2 h-12 mb-4">
                    <div className="w-4/5">
                      <Input
                        type="text"
                        name="authNum"
                        placeholder="??????????????? ???????????????"
                        data={authNum}
                      />
                    </div>
                    <div className="w-1/5">
                      <button
                        className="w-full h-full text-white bg-lightblue text-center border-none cursor-pointer text-base hover:bg-hoverlightblue"
                        onClick={checkPA}
                      >
                        ??????
                      </button>
                    </div>
                  </div>
                  {isPasswordCheckErr
                    ? errMsg("???????????? ???????????? ??????????????? ????????? ?????????.")
                    : ""}
                  <button className="w-full h-14 text-white bg-lightblue text-center text-lg cursor-pointer border-none outline-none hover:bg-hoverlightblue leading-[56px]">
                    ????????????
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
