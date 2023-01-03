import NoticeUpdate from "components/Notice/UpdateNotice";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import Notice from "./Notice";
import NoticeCreate from "./Notice/CreateNotice";

interface IBaseContainer {
  component: string;
}

export default function BaseContainer({ component }: IBaseContainer) {
  const { token } = useSelector((state: RootState) => state.user);
  const comp =
    component === "notice" ? (
      <Notice />
    ) : component === "notice-update" ? (
      <NoticeUpdate />
    ) : component === "feed" ? (
      <Feed />
    ) : component === "notice-create" ? (
      <NoticeCreate />
    ) : component === "home" ? (
      <Home />
    ) : (
      ""
    );

  return (
    <div className="w-full min-w-[1200px]">
      <Header />
      <div className="w-full flex">
        <div className="w-full relative">
          {token ? (
            comp
          ) : (
            <div className="w-full h-full min-h-[80vh] text-center flex justify-center flex-col">
              로그인이 필요한 서비스입니다.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
