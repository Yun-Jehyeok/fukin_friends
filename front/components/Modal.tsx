import { useAppDispatch } from "hooks/reduxHooks";
import Image from "next/image";

import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { feedActions } from "src/store/reducers/feedReducer";
import { IFeed } from "src/store/types/feed";
import { IEditFeed } from "./Feed";

interface IModal {
  open: Boolean;
  data: IFeed;
  handleModal: () => void;
  handleEdit: ({ _id, content, tags, imgs }: IEditFeed) => void;
}

export default function Modal({ open, handleModal, data, handleEdit }: IModal) {
  const { user } = useSelector((state: RootState) => state.user);

  const [mainImg, setMainImg] = useState(data.previewImg);
  const [isEdit, setIsEdit] = useState(false);
  const [tags, setTags] = useState(data.tags);
  const [newTag, setNewTag] = useState("");
  const [content, setContent] = useState(data.content as string);

  const { _id, creator, date, creatorName, imgs } = data;

  const dispatch = useAppDispatch();

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

  const onChangeNewTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onDeleteTag = (e: React.MouseEvent<HTMLDivElement>) => {
    let newTags = tags.filter((item) => item !== e.currentTarget.innerText);
    setTags(newTags);
  };

  const enterTag = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      let newTags = [...tags, newTag];
      setTags(newTags);
      setNewTag("");
    }
  };

  const handleCancel = () => {
    setTags(data.tags);
    setContent(data.content as string);
    setIsEdit(false);
  };

  const handleDelete = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const confirm = window.confirm("해당 피드를 삭제하시겠습니까?");

      if (confirm) {
        dispatch(feedActions.deleteFeedReq({ id: _id, userId: user.id }));
      }
    },
    [dispatch, _id, user]
  );

  const onClickEdit = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      const confirm = window.confirm("피드를 수정하시겠습니까?");

      if (confirm) {
        handleEdit({ _id: _id, content: content, tags: tags, imgs: imgs });
        setIsEdit(false);
      }
    },
    [_id, content, tags, imgs]
  );

  return (
    <div
      className={`w-screen h-screen z-50 bg-[rgba(0,0,0,0.3)] ${
        open ? "flex" : "hidden"
      } fixed top-0 left-0 flex-col mx-auto my-0 justify-center`}
    >
      <div className="w-full h-[509px] flex justify-center">
        <div className="w-[1170px] min-w-[1170px] h-full bg-white flex relative">
          <div className="w-fit h-full p-[11px] flex flex-col gap-[11px]">
            {data.imgs.map((image) => {
              return (
                <Image
                  className="rounded-3 cursor-pointer"
                  onClick={() => setMainImg(image)}
                  src={image}
                  alt={image}
                  width={151}
                  height={155}
                />
              );
            })}
          </div>
          <div className="h-[487px] p-[11px]">
            <Image
              className="rounded-3"
              src={mainImg}
              alt={mainImg}
              width={375}
              height={487}
            />
          </div>
          <div className="w-[549px] h-full py-12 pr-0 pl-6 flex justify-between flex-col">
            <div className="text-[#0d134e] text-base font-josefin mb-4">
              {isEdit ? (
                <textarea
                  value={content}
                  onChange={onChangeContent}
                  placeholder="Enter the content"
                  className="w-full h-64 outline-none p-3 border border-solid border-[#8a8fb9] font-lato resize-none rounded-3 focus:border-[#8a8fb9] ring-0 focus:ring-0 focus:ring-[#8a8fb9] focus:outline-none overflow-y-auto"
                />
              ) : (
                content
              )}
            </div>

            <div>
              <div className="w-full font-josefin flex pb-1.5">
                <div className="w-3.5 h-[22px] mr-1 bg-creator bg-no-repeat bg-center"></div>
                <div className="text-darkblue text-sm">{creatorName}</div>
                <div className="w-3.5 h-4.5 mr-1 ml-9 bg-calendar bg-no-repeat bg-center"></div>
                <div className="text-darkblue text-sm">{date.slice(0, 10)}</div>
              </div>

              <div className="flex gap-2 mt-3 font-josefin">
                <div className="text-darkblue font-bold mr-2 flex justify-center flex-col">
                  TAGS
                </div>
                {isEdit ? (
                  <>
                    {tags.map((item) => (
                      <div
                        key={tags.indexOf(item)}
                        className="cursor-pointer h-fit bg-[#f6f2fe] text-[#9061f9] rounded-full p-1.5"
                        onClick={onDeleteTag}
                      >
                        {item}
                      </div>
                    ))}
                    <div>
                      <input
                        value={newTag}
                        onChange={onChangeNewTag}
                        placeholder={
                          tags.length < 5
                            ? "Enter the Tag"
                            : "Up to 5 tags can be created."
                        }
                        className="bg-white border-none outline-none w-48 h-full"
                        onKeyDown={enterTag}
                        disabled={tags.length >= 5}
                      />
                    </div>
                  </>
                ) : (
                  tags.map((item) => <div key={tags.indexOf(item)}>{item}</div>)
                )}
              </div>
              {user.id === creator ? (
                <div className="w-full flex justify-end mb-4">
                  <div className="flex gap-2">
                    {isEdit ? (
                      <>
                        <div className="cursor-pointer" onClick={handleCancel}>
                          Cancel
                        </div>
                        <div className="cursor-pointer" onClick={onClickEdit}>
                          Edit
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="cursor-pointer"
                          onClick={() => setIsEdit(true)}
                        >
                          Edit
                        </div>
                        <div className="cursor-pointer" onClick={handleDelete}>
                          Delete
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
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
