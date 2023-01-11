import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import Feed from "./Feed";
import FeedEditor from "./Feed/FeedEditor";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import Notice from "./Notice";
import NoticeEditor from "./Notice/Section/NoticeEditor";

interface IBaseContainer {
  component: string;
}

export default function BaseContainer({ component }: IBaseContainer) {
  const { token } = useSelector((state: RootState) => state.user);
  const comp =
    component === "notice" ? (
      <Notice
        title="Notice Page"
        desc="It's Just Notice Page"
        url="/notice/create"
        url_title="Create Notice"
        type="list"
      />
    ) : component === "notice-search" ? (
      <Notice
        title="Notice Search Page"
        desc="It's Just Notice Search Page"
        type="search"
      />
    ) : component === "notice-create" ? (
      <NoticeEditor
        title="Create Notice Page"
        desc="It's Just Create Notice Page"
        pageName="create"
      />
    ) : component === "notice-update" ? (
      <NoticeEditor
        title="Updating Notice Page"
        desc="It's Just Updating Notice Page"
        pageName="update"
      />
    ) : component === "feed" ? (
      <Feed />
    ) : component === "feed-create" ? (
      <FeedEditor />
    ) : component === "home" ? (
      <Home />
    ) : (
      <div className="w-full h-screen text-center flex justify-center flex-col">
        추후 오픈됩니다!!
      </div>
    );

  return (
    <div className="w-full min-w-[1200px]">
      <Header />
      <div className="w-full flex">
        <div className="w-full relative">
          {!token ? (
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
