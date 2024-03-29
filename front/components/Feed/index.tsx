import Modal from "components/Modal";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { feedActions } from "src/store/reducers/feedReducer";
import { IFeed } from "src/store/types/feed";
import ViewHeader from "../ViewHeader";

export interface IEditFeed {
  _id: string;
  content: string;
  imgs: string[];
  tags: string[];
}

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
    creatorName: "",
  });
  const { feedLoading, feeds, allFeedsCnt } = useSelector(
    (state: RootState) => state.feed
  );

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
  const handleEdit = ({ _id, content, tags, imgs }: IEditFeed) => {
    dispatch(
      feedActions.updateFeedReq({
        id: _id,
        content: content,
        tags: tags,
        imgs: imgs,
      })
    );
  };

  const skipNumberRef = useRef(0);
  const feedCountRef = useRef(0);
  const endMsg = useRef(false);

  feedCountRef.current = allFeedsCnt - 12;

  const useOnScreen = (options: any) => {
    const lastFeedElementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          let remainfeedCount = feedCountRef.current - skipNumberRef.current;

          if (remainfeedCount >= 0) {
            dispatch(
              feedActions.loadAllFeedReq({ skip: skipNumberRef.current + 12 })
            );
            skipNumberRef.current += 12;
          } else {
            endMsg.current = true;
          }
        }
      }, options);

      if (lastFeedElementRef.current) {
        observer.observe(lastFeedElementRef.current);
      }

      const LastElementReturnFunc = () => {
        if (lastFeedElementRef.current) {
          observer.unobserve(lastFeedElementRef.current);
        }
      };

      return LastElementReturnFunc;
    }, [lastFeedElementRef, options]);

    return [lastFeedElementRef];
  };

  const [lastFeedElementRef] = useOnScreen({
    threshold: "0.5",
  });

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
                      src={item.previewImg}
                      alt={item.previewImg}
                      width={370}
                      height={255}
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-full py-4.75 px-3.5 font-josefin flex">
                      <div className="w-3.5 h-[22px] mr-1 bg-creator bg-no-repeat bg-center"></div>
                      <div className="text-sm text-darkBlue">
                        {item.creatorName}
                      </div>
                      <div className="w-3.5 h-4.5 mr-1 ml-9 bg-calendar bg-no-repeat bg-center"></div>
                      <div className="text-sm text-darkBlue">
                        {item.date.slice(0, 10)}
                      </div>
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
      <div ref={lastFeedElementRef} className="flex justify-center">
        {feedLoading && "Loading..."}
      </div>

      {openModal ? (
        <Modal
          open={openModal}
          handleModal={closeModal}
          data={modalData}
          handleEdit={handleEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}
