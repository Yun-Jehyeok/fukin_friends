import { NextPage } from "next";
import Image from "next/image";
import { Cont } from "styles/styleRepo/global";

import AlbumList from "./Section/AlbumList/AlbumList";
import MusicList from "./Section/MusicList/MusicList";
import NoticeList from "./Section/NoticeList/NoticeList";
import { HomeTopImgCont, ItemBox } from "./style";

import friend1 from "public/img/friend1.jpg";
import friend2 from "public/img/friend2.jpg";
import friend3 from "public/img/friend3.jpg";
import friend4 from "public/img/friend4.jpg";
import friend5 from "public/img/friend5.jpg";
import friend6 from "public/img/friend6.jpg";
import friend7 from "public/img/friend7.jpg";

const items = [
  { id: 0, src: friend1, title: "title", desc: "desc" },
  { id: 1, src: friend2, title: "title", desc: "desc" },
  { id: 2, src: friend3, title: "title", desc: "desc" },
  { id: 3, src: friend4, title: "title", desc: "desc" },
  { id: 4, src: friend5, title: "title", desc: "desc" },
  { id: 5, src: friend6, title: "title", desc: "desc" },
  { id: 6, src: friend7, title: "title", desc: "desc" },
];

const Home: NextPage = () => {
  return (
    <Cont>
      <HomeTopImgCont className="top">
        {items.map((item) => (
          <ItemBox key={item.id}>
            <div>
              <Image src={item.src} alt={item.title} />
            </div>
            <div>
              <div>{item.title}</div>
              <div>{item.desc}</div>
            </div>
          </ItemBox>
        ))}
      </HomeTopImgCont>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </Cont>
  );
};

export default Home;
