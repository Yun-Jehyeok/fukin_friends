import { NextPage } from "next";
import AlbumList from "./Section/AlbumList";
import FeedList from "./Section/FeedList";
import NoticeList from "./Section/NoticeList";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <FeedList />
      <NoticeList />
      <AlbumList />
    </div>
  );
};

export default Home;
