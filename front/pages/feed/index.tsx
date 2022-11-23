import type { NextPage } from "next";
import { AppCont, Body, ContentWrap, NeedLogin } from "styles/styleRepo/style";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Feed from "components/View/Feed/Feed";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";

const FeedPage: NextPage = () => {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <AppCont>
      <Header />
      <Body>
        <ContentWrap>
          {token ? (
            <Feed />
          ) : (
            <NeedLogin>로그인이 필요한 서비스입니다.</NeedLogin>
          )}
        </ContentWrap>
      </Body>
      <Footer />
    </AppCont>
  );
};

export default FeedPage;
