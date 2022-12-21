import Modal from "components/Modal/modal";
import { NextPage } from "next";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import { useState } from "react";
import { Cont } from "styles/styleRepo/global";
import ViewHeader from "../Header";
import {
  FeedCon,
  FeedContent,
  FeedCreator,
  FeedCreatorAndDate,
  FeedDate,
  FeedImg,
  FeedItem,
  FeedItemCon,
  FeedTag,
} from "./style";

const exampleData = [
  {
    id: 0,
    creator: "Jehyeok",
    date: "14 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 1,
    creator: "Jehyeok",
    date: "15 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 2,
    creator: "Jehyeok",
    date: "16 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 3,
    creator: "Jehyeok",
    date: "17 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 4,
    creator: "Jehyeok",
    date: "18 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 5,
    creator: "Jehyeok",
    date: "19 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 6,
    creator: "Jehyeok",
    date: "20 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 7,
    creator: "Jehyeok",
    date: "21 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 8,
    creator: "Jehyeok",
    date: "22 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 9,
    creator: "Jehyeok",
    date: "23 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
  {
    id: 10,
    creator: "Jehyeok",
    date: "24 Octorbor, 2022",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard test dummy text ever since the 1500s",
    tags: ["TAG1", "TAG2", "TAG3"],
  },
];

interface IModalData {
  id: Number;
  creator: String;
  date: String;
  content: String;
  tags: String[];
}

const Feed: NextPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<IModalData>({
    id: 0,
    creator: "",
    date: "",
    content: "",
    tags: [""],
  });

  const handleModal = (item: IModalData) => {
    setOpenModal(!openModal);
    setModalData(item);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Cont>
      <ViewHeader
        title="Feed Page"
        desc="It's Just Feed Page"
        url="/feed/create"
        url_title="Create Feed"
      />
      <FeedCon>
        <div>
          {exampleData.map((item) => {
            return (
              <FeedItem key={item.id} onClick={() => handleModal(item)}>
                <FeedImg>
                  <Image src={cat} alt="cat" width={370} height={255} />
                </FeedImg>
                <FeedItemCon>
                  <FeedCreatorAndDate>
                    <FeedCreator></FeedCreator>
                    <div>{item.creator}</div>
                    <FeedDate></FeedDate>
                    <div>{item.date}</div>
                  </FeedCreatorAndDate>
                  <FeedContent>{item.content}</FeedContent>
                  <FeedTag>
                    {item.tags.map((item) => (
                      <div key={item}># {item}</div>
                    ))}
                  </FeedTag>
                </FeedItemCon>
              </FeedItem>
            );
          })}
        </div>
      </FeedCon>
      {openModal ? (
        <Modal open={openModal} handleModal={closeModal} data={modalData} />
      ) : (
        ""
      )}
    </Cont>
  );
};

export default Feed;
