import { FeedCreator, FeedDate } from "components/View/Feed/style";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import friend1 from "public/img/friend1.jpg";
import friend2 from "public/img/friend2.jpg";

import { useEffect } from "react";
import {
  ModalClose,
  ModalCon,
  ModalContent,
  ModalContentItem,
  ModalCreatorDate,
  ModalImgList,
  ModalMainImg,
  ModalTagsCon,
  ModalWrap,
} from "./style";

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
    <ModalCon open={open}>
      <div>
        <ModalWrap>
          <ModalImgList>
            <Image src={cat} alt="cat" width={151} height={155} />
            <Image src={friend1} alt="cat" width={151} height={155} />
            <Image src={friend2} alt="cat" width={151} height={155} />
          </ModalImgList>
          <ModalMainImg>
            <Image src={cat} alt="cat" width={375} height={487} />
          </ModalMainImg>
          <ModalContent>
            <ModalContentItem>{content}</ModalContentItem>
            <div>
              <ModalCreatorDate>
                <FeedCreator></FeedCreator>
                <div>{creator}</div>
                <FeedDate></FeedDate>
                <div>{date}</div>
              </ModalCreatorDate>

              <ModalTagsCon>
                <div>TAGS</div>
                {tags.map((item) => (
                  <div key={tags.indexOf(item)}>{item}</div>
                ))}
              </ModalTagsCon>
            </div>
          </ModalContent>
          <ModalClose onClick={handleModal}></ModalClose>
        </ModalWrap>
      </div>
    </ModalCon>
  );
}
