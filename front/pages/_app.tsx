import { useAppDispatch } from "hooks/reduxHooks";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import wrapper from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import "styles/globals.css";

import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let token: string | null = localStorage.getItem("token");

    dispatch(userActions.loadUserReq({ token }));
  }, [dispatch]);

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
