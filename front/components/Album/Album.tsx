import { Carousel } from "antd";
import ViewHeader from "components/ViewHeader";
import Image from "next/image";
import cat1 from "public/img/cat1.jpg";
import dresden from "public/img/dresden.jpg";
import friend from "public/img/friend1.jpg";
import memories from "public/img/memories.jpg";

const datas = [
  { id: 0, title: "Comfort Handy Craft" },
  { id: 1, title: "Comfort Handy Craft" },
  { id: 2, title: "Comfort Handy Craft" },
  { id: 3, title: "Comfort Handy Craft" },
  { id: 4, title: "Comfort Handy Craft" },
  { id: 5, title: "Comfort Handy Craft" },
  { id: 6, title: "Comfort Handy Craft" },
  { id: 7, title: "Comfort Handy Craft" },
  { id: 8, title: "Comfort Handy Craft" },
  { id: 9, title: "Comfort Handy Craft" },
];
const images = [
  { id: 0, name: "cat1", src: cat1 },
  { id: 1, name: "dresden", src: dresden },
  { id: 2, name: "friend", src: friend },
  { id: 3, name: "memories", src: memories },
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
          <div className="w-full flex gap-[48.5px] flex-wrap">
            {datas.map((item) => {
              return (
                <div key={item.id} className="w-[360px] h-fit mb-16">
                  <Carousel autoplay className="w-full h-[270px]">
                    {images.map((item) => (
                      <Image
                        key={item.id}
                        src={item.src}
                        alt={item.name}
                        width={360}
                        height={270}
                        className="rounded-md"
                      />
                    ))}
                  </Carousel>
                  <div className="w-full h-9 flex justify-center flex-col mt-1">
                    <div className="w-fit font-josefin text-darkBlue text-base border-b-2 border-b-[#EEEFFB]">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
