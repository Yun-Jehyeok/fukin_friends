import { NextPage } from "next";
import { MuListCont, MuDesc, MuItem, MuList, MuTitle } from "./style";
import zico from "public/img/zico.jpeg";
import thinking from "public/img/thinking.jpeg";
import randombox from "public/img/randombox.jpeg";
import dontknow from "public/img/dontknow.jpeg";
import Image from "next/image";

let itemList = [
  {
    id: 1,
    img: zico,
    title: "괴짜",
    singer: "Zico",
  },
  {
    id: 2,
    img: thinking,
    title: "사람",
    singer: "Zico",
  },
  {
    id: 3,
    img: randombox,
    title: "웬수",
    singer: "Zico",
  },
  {
    id: 4,
    img: dontknow,
    title: "Veni Vidi Vici",
    singer: "Zico",
  },
  {
    id: 5,
    img: thinking,
    title: "사람",
    singer: "Zico",
  },
  {
    id: 6,
    img: randombox,
    title: "웬수",
    singer: "Zico",
  },
  {
    id: 7,
    img: dontknow,
    title: "Veni Vidi Vici",
    singer: "Zico",
  },
];

const MusicList: NextPage = () => {
  return (
    <MuListCont>
      <MuTitle>Recently Played</MuTitle>
      <MuList>
        {itemList.map((item) => (
          <MuItem key={item.id}>
            <Image src={item.img} alt={item.title} width={120} height={150} />
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
