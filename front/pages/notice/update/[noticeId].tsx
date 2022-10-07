import type { NextPage } from "next";
import {
  Body,
  AppContainer,
  NeedLogin,
  ContentWrap,
} from "styles/styleRepo/style";

import Header from "components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import Footer from "components/Footer/Footer";
import NoticeUpdate from "components/View/Notice/Section/UpdateNotice/UpdateNotice";

const UpdateNotice: NextPage = () => {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <AppContainer>
      <Header />
      <Body>
        <ContentWrap>
          {token ? (
            <NoticeUpdate />
          ) : (
            <NeedLogin>로그인이 필요한 서비스입니다.</NeedLogin>
          )}
        </ContentWrap>
      </Body>
      <Footer />
    </AppContainer>
  );
};

export default UpdateNotice;