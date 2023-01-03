import { NextPage } from "next";
import Image from "next/image";

import AlbumList from "./Section/AlbumList";
import MusicList from "./Section/MusicList";
import NoticeList from "./Section/NoticeList";

import friend1 from "public/img/friend1.jpg";
import friend2 from "public/img/friend2.jpg";
import friend3 from "public/img/friend3.jpg";
import friend4 from "public/img/friend4.jpg";
import friend5 from "public/img/friend5.jpg";
import friend6 from "public/img/friend6.jpg";
import friend7 from "public/img/friend7.jpg";

const items = [
  {
    id: 0,
    src: friend1,
    title: "title",
    desc: "desc",
    top: "80px",
    left: "140px",
  },
  {
    id: 1,
    src: friend2,
    title: "title",
    desc: "desc",
    top: "120px",
    left: "680px",
  },
  {
    id: 2,
    src: friend3,
    title: "title",
    desc: "desc",
    top: "460px",
    left: "740px",
  },
  {
    id: 3,
    src: friend4,
    title: "title",
    desc: "desc",
    top: "350px",
    left: "920px",
  },
  {
    id: 4,
    src: friend5,
    title: "title",
    desc: "desc",
    top: "520px",
    left: "100px",
  },
  {
    id: 5,
    src: friend6,
    title: "title",
    desc: "desc",
    top: "60px",
    left: "80px",
  },
  {
    id: 6,
    src: friend7,
    title: "title",
    desc: "desc",
    top: "490px",
    left: "200px",
  },
];

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="top w-full h-[764px] bg-[#f2f0ff] flex justify-center flex-col text-center text-[53px] font-bold font-josefin relative">
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-fit h-fit absolute flex top-[${item.top}px] left-[${item.left}px]`}
          >
            <div className="w-[300px] h-[180px] bg-white p-2 shadow-md rounded-lg flex justify-center flex-col">
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-end flex-col ml-3">
              <div className="text-sm text-[#8a8fb9] text-left">
                {item.title}
              </div>
              <div className="text-sm text-[#8a8fb9] text-left">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <NoticeList />
      <MusicList />
      <AlbumList />
    </div>
  );
};

export default Home;
