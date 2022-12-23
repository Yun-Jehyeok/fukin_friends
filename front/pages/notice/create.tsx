import type { NextPage } from "next";
import { AppCont, Body, ContentWrap, NeedLogin } from "styles/styleRepo/style";

import Footer from "components/Footer";
import Header from "components/Header";
import NoticeCreate from "components/View/Notice/Section/CreateNotice/CreateNotice";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";

const CreateNotice: NextPage = () => {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <AppCont>
      <Header />
      <Body>
        <ContentWrap>
          {token ? (
            <NoticeCreate />
          ) : (
            <NeedLogin>로그인이 필요한 서비스입니다.</NeedLogin>
          )}
        </ContentWrap>
      </Body>
      <Footer />
    </AppCont>
  );
};

export default CreateNotice;
