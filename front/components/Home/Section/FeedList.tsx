import { NextPage } from "next";
import Image from "next/image";

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
    top: "80",
    left: "140",
  },
  {
    id: 1,
    src: friend2,
    title: "title",
    desc: "desc",
    top: "120",
    left: "680",
  },
  {
    id: 2,
    src: friend3,
    title: "title",
    desc: "desc",
    top: "460",
    left: "740",
  },
  {
    id: 3,
    src: friend4,
    title: "title",
    desc: "desc",
    top: "350",
    left: "920",
  },
  {
    id: 4,
    src: friend5,
    title: "title",
    desc: "desc",
    top: "520",
    left: "100",
  },
  {
    id: 5,
    src: friend6,
    title: "title",
    desc: "desc",
    top: "60",
    left: "80",
  },
  {
    id: 6,
    src: friend7,
    title: "title",
    desc: "desc",
    top: "490",
    left: "200",
  },
];

const FeedList: NextPage = () => {
  return (
    <div className="top w-full h-[764px] bg-[#f2f0ff] flex justify-center flex-col text-center text-[53px] font-bold font-josefin relative">
      {items.map((item) => (
        <div
          key={item.id}
          className={`w-fit h-fit flex absolute top-[${item.top}px] left-[${item.left}px]`}
        >
          <div className="w-[300px] h-[180px] bg-white p-2 shadow-md rounded-lg flex justify-center flex-col">
            <Image src={item.src} alt={item.title} className="w-full h-full" />
          </div>
          <div className="flex justify-end flex-col ml-3">
            <div className="text-sm text-[#8a8fb9] text-left">{item.title}</div>
            <div className="text-sm text-[#8a8fb9] text-left">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedList;
