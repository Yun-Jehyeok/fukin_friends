import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import type { NextPage } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import {
  AuthBtn,
  AuthCont,
  AuthInp,
  AuthInpErrMsg,
  AuthLab,
  AuthTitle,
} from "styles/styleRepo/authFormStyle";
import {
  Divider,
  GoogleBtn,
  LoginForm,
  OtherSection,
  SocialLoginCont,
} from "styles/styleRepo/loginStyle";

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
    <AuthCont>
      <LoginForm>
        <div>
          <div>
            <AuthTitle>
              <Link href="/">SIGN IN</Link>
            </AuthTitle>
            <SocialLoginCont>
              <Divider>소셜 로그인</Divider>
              <GoogleLogin
                clientId="534707785395-1c3aq9gp00tfbib4rgg0eemp6ma0ddup.apps.googleusercontent.com"
                render={(renderProps) => (
                  <GoogleBtn onClick={renderProps.onClick}></GoogleBtn>
                )}
                onSuccess={responseGoogle}
                onFailure={responseFail}
                theme="dark"
              />
              {/* <GoogleBtn></GoogleBtn> */}
            </SocialLoginCont>
            <Divider>이메일 로그인</Divider>
            <form onSubmit={handleSubmit}>
              <AuthLab>이메일</AuthLab>
              <AuthInp
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                required
                {...email}
              />
              <AuthLab>비밀번호</AuthLab>
              <AuthInp
                type="password"
                name="password"
                required
                placeholder="비밀번호를 입력하세요"
                {...password}
              />
              {isLoginErr ? (
                <AuthInpErrMsg>
                  이메일 혹은 비밀번호를 확인해주세요.
                </AuthInpErrMsg>
              ) : (
                ""
              )}
              <AuthBtn>로그인</AuthBtn>
            </form>
            <OtherSection>
              <Link href="/pwinquiry">비밀번호를 잊어버리셨나요?</Link>
              <div>
                회원이 아니신가요?&nbsp;<Link href="/register">회원가입</Link>
              </div>
            </OtherSection>
          </div>
        </div>
      </LoginForm>
    </AuthCont>
  );
};

export default Login;
