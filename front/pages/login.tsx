import errMsg from "components/errMsg";
import Input from "components/Input";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";

const Login: NextPage = () => {
  const email = useInput("");
  const password = useInput("");

  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);

  const { isLoginErr } = useSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email.value === "") setIsEmailBlank(true);
      if (password.value === "") setIsPasswordBlank(true);

      if (!isEmailBlank && !isPasswordBlank) {
        dispatch(
          userActions.loginUserReq({
            email: email.value,
            password: password.value,
          })
        );
      }
    },
    [dispatch, isEmailBlank, isPasswordBlank, email, password]
  );

  const responseGoogle = useCallback(
    (res: any) => {
      const { email, name } = res.profileObj;
      const { tokenId } = res;

      dispatch(userActions.googleReq({ email, name, token: tokenId }));
    },
    [dispatch]
  );

  const responseFail = (err: any) => {
    console.log(err);
  };

  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto flex justify-center flex-col bg-[#f4f9fc]">
      <div className="w-530 mx-auto my-0">
        <div className="h-full p-12 flex justify-center flex-col">
          <div>
            <div className="font-bold text-5xl text-center mb-8">
              <Link href="/">
                <a className="text-lightblue hover:text-lightblue">SIGN IN</a>
              </Link>
            </div>
            <div className="w-full mb-8">
              <div className="text-base font-bold text-center mb-4.5 relative before:w-[calc(50%-60px)] before:h-[0.5px] before:bg-black before:absolute before:left-0 before:top-1/2 after:w-[calc(50%-60px)] after:h-[0.5px] after:bg-black after:absolute after:right-0 after:top-1/2 before:content-[''] after:content-['']">
                ?????? ?????????
              </div>
              <GoogleLogin
                clientId="534707785395-1c3aq9gp00tfbib4rgg0eemp6ma0ddup.apps.googleusercontent.com"
                render={(renderProps) => (
                  <GoogleButton
                    className="mb-2 !w-full"
                    onClick={renderProps.onClick}
                  ></GoogleButton>
                )}
                onSuccess={responseGoogle}
                onFailure={responseFail}
                theme="dark"
              />
            </div>
            <div className="text-base font-bold text-center mb-4.5 relative before:w-[calc(50%-60px)] before:h-[0.5px] before:bg-black before:absolute before:left-0 before:top-1/2 after:w-[calc(50%-60px)] after:h-[0.5px] after:bg-black after:absolute after:right-0 after:top-1/2 before:content-[''] after:content-['']">
              ????????? ?????????
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 text-sm text-black font-bold">?????????</div>
              <Input
                type="email"
                name="email"
                placeholder="???????????? ???????????????"
                data={email}
              />
              <div className="mb-2 text-sm text-black font-bold">????????????</div>
              <Input
                type="password"
                name="password"
                placeholder="??????????????? ???????????????"
                data={password}
              />
              {isLoginErr ? errMsg("????????? ?????? ??????????????? ??????????????????.") : ""}
              <div className="w-full h-14 text-white bg-lightblue text-center text-lg cursor-pointer border-none outline-none hover:bg-hoverlightblue leading-[56px]">
                ?????????
              </div>
            </form>
            <div className="w-full text-center mt-6 text-sm">
              <Link href="/pwinquiry">
                <a className="text-lightblue hover:text-lightblue font-bold hover:underline">
                  ??????????????? ??????????????????????
                </a>
              </Link>
              <div className="mt-2">
                ????????? ????????????????&nbsp;
                <Link href="/register">
                  <a className="text-lightblue hover:text-lightblue font-bold hover:underline">
                    ????????????
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
