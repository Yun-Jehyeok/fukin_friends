import Image from "next/image";
import cat from "public/img/cat1.jpg";
import friend1 from "public/img/friend1.jpg";
import friend2 from "public/img/friend2.jpg";

import { useEffect } from "react";

interface IModal {
  open: Boolean;
  handleModal: () => void;
  data: {
    id: Number;
    creator: String;
    date: String;
    content: String;
    tags: String[];
  };
}

export default function Modal({ open, handleModal, data }: IModal) {
  const { creator, date, content, tags } = data;

  // modal 밖에서 스크롤 없애기
  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const { body } = document;

    if (open) {
      body.addEventListener("wheel", preventScroll, { passive: false });
    }
    return () => {
      body.removeEventListener("wheel", preventScroll);
    };
  }, [open]);

  return (
    <div
      className={`w-screen h-screen z-50 bg-[rgba(0,0,0,0.3)] ${
        open ? "flex" : "hidden"
      } fixed top-0 left-0 flex-col mx-auto my-0 justify-center`}
    >
      <div className="w-full h-[509px] flex justify-center">
        <div className="w-[1170px] h-full bg-white flex relative">
          <div className="w-fit h-full p-[11px] flex flex-col gap-[11px]">
            <Image
              className="rounded-3"
              src={cat}
              alt="cat"
              width={151}
              height={155}
            />
            <Image
              className="rounded-3"
              src={friend1}
              alt="cat"
              width={151}
              height={155}
            />
            <Image
              className="rounded-3"
              src={friend2}
              alt="cat"
              width={151}
              height={155}
            />
          </div>
          <div className="h-[487px] p-[11px]">
            <Image
              className="rounded-3"
              src={cat}
              alt="cat"
              width={375}
              height={487}
            />
          </div>
          <div className="w-[549px] h-full py-12 pr-0 pl-6 flex justify-between flex-col">
            <div className="text-[#0d134e] text-base font-josefin mb-4">
              {content}
            </div>
            <div>
              <div className="w-full font-josefin flex pb-[6px]">
                <div className="w-[14px] h-[22px] mr-1 bg-creator bg-no-repeat bg-center"></div>
                <div className="text-darkblue text-[14px]">{creator}</div>
                <div className="w-[14px] h-4.5 mr-1 ml-9 bg-calendar bg-no-repeat bg-center"></div>
                <div className="text-darkblue text-[14px]">{date}</div>
              </div>

              <div className="flex gap-2 mt-3 font-josefin">
                <div className="text-darkblue font-bold mr-2">TAGS</div>
                {tags.map((item) => (
                  <div key={tags.indexOf(item)}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-4.5 h-4.5 p-1 absolute top-[7px] right-[7px] bg-close bg-no-repeat bg-center cursor-pointer hover:rounded-full hover:bg-[#f6f2fe] hover:text-[#9061f9]"
            onClick={handleModal}
          ></div>
        </div>
      </div>
    </div>
  );
}
