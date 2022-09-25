import "styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "src/configureStore";
// import { GetServerSideProps } from 'next';
import { userActions } from "src/store/reducers/userReducer";
import { useAppDispatch } from "hooks/reduxHooks";
import { useEffect } from "react";

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps((store) => async ({ req, res, ...etc }) => {
//     await store.dispatch(
//       userActions.loadUserRequest(localStorage.getItem('token')),
//     );
//     return {};
//   });

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let token: string | null = localStorage.getItem("token");

    dispatch(userActions.loadUserRequest({ token }));
  }, []);

  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
