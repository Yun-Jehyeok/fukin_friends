import { NextPage } from "next";
import Image from "next/image";
import { Cont } from "styles/styleRepo/global";

import AlbumList from "./Section/AlbumList";
import MusicList from "./Section/MusicList";
import NoticeList from "./Section/NoticeList";
import { ItemBox } from "./style";

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
      <div className="top w-full h-[764px] bg-[#f2f0ff] flex justify-center flex-col text-center text-[53px] font-bold font-josefin relative">
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
      </div>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </Cont>
  );
};

export default Home;
