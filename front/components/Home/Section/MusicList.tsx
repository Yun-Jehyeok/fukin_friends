import { NextPage } from "next";
import twelve_45 from "public/img/12_45.jpg";
import ghostTown from "public/img/ghost_town.jpg";
import memories from "public/img/memories.jpg";
import SamSmith from "public/img/not_the_only_one.jpg";
import OffMyFace from "public/img/off_my_face.jpg";
import outOfTime from "public/img/out_of_time.jpg";
import youth from "public/img/youth.jpg";

import Image from "next/image";

let itemList = [
  {
    id: 1,
    img: twelve_45,
    title: "12:45 (Stripped)",
    singer: "Etham",
  },
  {
    id: 2,
    img: youth,
    title: "YOUTH",
    singer: "Troye Sivan",
  },
  {
    id: 3,
    img: memories,
    title: "Memories",
    singer: "Maroon 5",
  },
  {
    id: 4,
    img: ghostTown,
    title: "GHOST TOWN",
    singer: "Benson Boone",
  },
  {
    id: 5,
    img: outOfTime,
    title: "Out of Time",
    singer: "The Weekend",
  },
  {
    id: 6,
    img: OffMyFace,
    title: "Off My Face",
    singer: "Justin Bieber",
  },
  {
    id: 7,
    img: SamSmith,
    title: "I'm not the only one",
    singer: "Sam Smith",
  },
];

const MusicList: NextPage = () => {
  return (
    <div className="w-full mt-28">
      <div className="text-darkblue text-[40px] font-bold text-center font-josefin mb-[53px]">
        Recently Played
      </div>
      <div className="flex w-full h-fit overflow-x-hidden justify-center gap-6">
        {itemList.map((item) => (
          <div className="w-[147px] h-fit mr-6" key={item.id}>
            <Image src={item.img} alt={item.title} width={147} height={160} />
            <div className="w-full mt-2">
              <div className="text-center text-sm">{item.title}</div>
              <div className="text-center text-s text-gray-500">
                {item.singer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
