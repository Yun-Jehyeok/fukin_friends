import ViewHeader from "components/ViewHeader";
import Image from "next/image";
import cat1 from "public/img/cat1.jpg";
import dresden from "public/img/dresden.jpg";
import friend from "public/img/friend1.jpg";
import memories from "public/img/memories.jpg";

const images = [
  { id: 0, name: "cat1", src: cat1 },
  { id: 1, name: "dresden", src: dresden },
  { id: 2, name: "friend", src: friend },
  { id: 3, name: "memories", src: memories },
  { id: 4, name: "cat1", src: cat1 },
  { id: 5, name: "dresden", src: dresden },
  { id: 6, name: "friend", src: friend },
  { id: 7, name: "memories", src: memories },
  { id: 8, name: "cat1", src: cat1 },
  { id: 9, name: "dresden", src: dresden },
  { id: 10, name: "friend", src: friend },
  { id: 11, name: "memories", src: memories },
  { id: 12, name: "cat1", src: cat1 },
  { id: 13, name: "dresden", src: dresden },
  { id: 14, name: "friend", src: friend },
  { id: 15, name: "memories", src: memories },
  { id: 16, name: "cat1", src: cat1 },
  { id: 17, name: "dresden", src: dresden },
  { id: 18, name: "friend", src: friend },
  { id: 19, name: "memories", src: memories },
  { id: 20, name: "cat1", src: cat1 },
  { id: 21, name: "dresden", src: dresden },
  { id: 22, name: "friend", src: friend },
  { id: 23, name: "memories", src: memories },
];

export default function Album() {
  return (
    <div className="w-full">
      <ViewHeader
        title="Album Page"
        desc="It's Just Album Page"
        url="/album/create"
        url_title="Add Photo"
      />
      <div className="w-full flex justify-center">
        <div className="w-default">
          <div className="w-full h-11 mt-24 mb-32">
            <div className="font-josefin text-[22px] font-bold text-darkBlue">
              Our memories
            </div>
            <div className="font-lato text-xs text-subTextColor">
              About 9,620 memories
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            {images.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item.src}
                  alt={item.name}
                  width={294.25}
                  height={240}
                  className="w-1/4 cursor-pointer hover:scale-110 transition-all ease-default duration-300"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
