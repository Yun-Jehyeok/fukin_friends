import Modal from "components/Modal";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { feedActions } from "src/store/reducers/feedReducer";
import { IFeed } from "src/store/types/feed";
import ViewHeader from "../ViewHeader";

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

export default function Feed() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<IFeed>({
    _id: "",
    creator: "",
    date: "",
    content: "",
    previewImg: "",
    imgs: [],
    tags: [],
  });
  const { feeds } = useSelector((state: RootState) => state.feed);

  console.log(feeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedActions.loadAllFeedReq({ skip: 0 }));
  }, [dispatch]);

  const handleModal = (item: IFeed) => {
    setOpenModal(!openModal);
    setModalData(item);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-full">
      <ViewHeader
        title="Feed Page"
        desc="It's Just Feed Page"
        url="/feed/create"
        url_title="Create Feed"
      />
      <div className="w-full flex justify-center pt-20">
        <div className="flex gap-x-[33.5px] w-default flex-wrap">
          {feeds.length > 0 ? (
            feeds.map((item) => {
              return (
                <div
                  className="w-[370px] h-[493px] mb-12 rounded-[5px] shadow-md relative cursor-pointer bottom-0 transition-all duration-[250ms] ease-default hover:bottom-[5px]"
                  key={item._id}
                  onClick={() => handleModal(item)}
                >
                  <div className="w-full h-[255px]">
                    <Image
                      className="w-full h-full rounded-[5px]"
                      src={cat}
                      alt="cat"
                      width={370}
                      height={255}
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full py-4.75 px-3.5 font-josefin flex">
                      <div className="w-3.5 h-[22px] mr-1 bg-creator bg-no-repeat bg-center"></div>
                      <div className="text-sm text-darkblue">
                        {item.creator}
                      </div>
                      <div className="w-3.5 h-4.5 mr-1 ml-9 bg-calendar bg-no-repeat bg-center"></div>
                      <div className="text-sm text-darkblue">{item.date}</div>
                    </div>
                    <div className="w-full py-0 px-4.75 font-josefin text-[#72718f] text-base">
                      {item.content}
                    </div>
                    <div className="w-full absolute bottom-0 p-4.75 flex">
                      {item.tags.map((item) => (
                        <div key={item} className="text-xs mr-4 text-gray-600">
                          # {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center font-josefin text-lg mt-20">
              No feeds... Please Create the First Feed!!
            </div>
          )}
        </div>
      </div>
      {openModal ? (
        <Modal open={openModal} handleModal={closeModal} data={modalData} />
      ) : (
        ""
      )}
    </div>
  );
}
