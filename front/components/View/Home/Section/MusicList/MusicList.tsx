import { NextPage } from "next";
import { MuListCont, MuDesc, MuItem, MuList, MuTitle } from "./style";
import twelve_45 from "public/img/12_45.jpg";
import youth from "public/img/youth.jpg";
import memories from "public/img/memories.jpg";
import ghostTown from "public/img/ghost_town.jpg";
import outOfTime from "public/img/out_of_time.jpg";
import OffMyFace from "public/img/off_my_face.jpg";
import SamSmith from "public/img/not_the_only_one.jpg";

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
    <MuListCont>
      <MuTitle>Recently Played</MuTitle>
      <MuList>
        {itemList.map((item) => (
          <MuItem key={item.id}>
            <Image src={item.img} alt={item.title} width={147} height={160} />
            <MuDesc>
              <div>{item.title}</div>
              <div>{item.singer}</div>
            </MuDesc>
          </MuItem>
        ))}
      </MuList>
    </MuListCont>
  );
};

export default MusicList;
