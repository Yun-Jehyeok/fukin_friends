import { NextPage } from "next";
import Image from "next/image";
import { AbListCont, AbItem, AbList, AbTitle } from "./style";
import rainbow from "public/img/rainbow.jpg";
import dresden from "public/img/dresden.jpg";
import cat from "public/img/cat1.jpg";

let itemList = [
  {
    id: 1,
    img: rainbow,
    title: "rainbow",
  },
  {
    id: 2,
    img: dresden,
    title: "dresden",
  },
  {
    id: 3,
    img: cat,
    title: "cat",
  },
];

const AlbumList: NextPage = () => {
  return (
    <AbListCont>
      <AbTitle>Pictures</AbTitle>
      <AbList>
        {itemList.map((item) => (
          <AbItem key={item.id}>
            <Image src={item.img} alt={item.title} width={400} height={280} />
          </AbItem>
        ))}
      </AbList>
    </AbListCont>
  );
};

export default AlbumList;
