import type { NextPage } from "next";
import { Body, AppCont, NeedLogin, ContentWrap } from "styles/styleRepo/style";

import Header from "components/Header/Header";
import Home from "components/View/Home/Home";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import Footer from "components/Footer/Footer";

const App: NextPage = () => {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <AppCont>
      <Header />
      <Body>
        <ContentWrap>
          {token ? (
            <Home />
          ) : (
            <NeedLogin>로그인이 필요한 서비스입니다.</NeedLogin>
          )}
        </ContentWrap>
      </Body>
      <Footer />
    </AppCont>
  );
};

export default App;
