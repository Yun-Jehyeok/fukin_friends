import { NextPage } from "next";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import dresden from "public/img/dresden.jpg";
import rainbow from "public/img/rainbow.jpg";

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
    <div className="w-full mt-40">
      <div className="text-darkblue font-bold text-[40px] text-center font-josefin mb-[53px]">
        Pictures
      </div>
      <div className="flex w-full h-fit overflow-hidden justify-center gap-6">
        {itemList.map((item) => (
          <div className="w-[calc(1129/3)px] h-[280px]" key={item.id}>
            <Image
              className="rounded-2xl"
              src={item.img}
              alt={item.title}
              width={376}
              height={260}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
