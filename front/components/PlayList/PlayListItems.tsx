import { NextPage } from "next";
import Image from "next/image";

import back1 from "public/img/back1.jpg";

const itemList = [
  {
    id: 1,
    title: "여행가서 듣기 좋은 음악 모음",
    author: "윤제혁",
    imgSrc: back1,
  },
  {
    id: 2,
    title: "드라이브할 때 듣기 좋은 음악 모음",
    author: "정종윤",
    imgSrc: back1,
  },
];

const PlayListItems: NextPage = () => {
  return (
    <div>
      <div className="font-bold text-[32px] mt-3 mb-4.5">플레이리스트</div>
      <div className="w-full flex">
        {itemList.map((item) => (
          <div
            key={item.id}
            className="relative w-[400px] h-[240px] rounded-2xl mr-4"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={400}
              height={240}
              className="rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full p-6 z-[1] text-white">
              <div className="font-bold text-[32px] mb-2">{item.title}</div>
              <div className="text-gray-400">{item.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayListItems;
