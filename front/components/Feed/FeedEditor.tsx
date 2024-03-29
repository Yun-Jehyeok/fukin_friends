import ViewHeader from "components/ViewHeader";
import { useAppDispatch } from "hooks/reduxHooks";
import { useInput } from "hooks/useInput";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { feedActions } from "src/store/reducers/feedReducer";

export default function FeedEditor() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [imgs, setImgs] = useState<string[]>([]);
  const [empties, setEmpties] = useState(3);
  const [isActive, setIsActive] = useState(false);
  const [imgFiles, setImgFiles] = useState<File[]>();

  const content = useInput("");

  const { user } = useSelector((state: RootState) => state.user);
  const { uploadImgSuccess, uploadedImgs } = useSelector(
    (state: RootState) => state.feed
  );

  const dispatch = useAppDispatch();

  const onDragAddImage = (e: React.DragEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const data = Array.from(e.dataTransfer.files as FileList);
    const selectedFiles: string[] = data.map((item) =>
      URL.createObjectURL(item)
    );

    const totalLen = imgs.length + selectedFiles.length;

    if (totalLen > 3) {
      alert("이미지는 총 3개까지 업로드 할 수 있습니다.");
    } else {
      setImgs((prev) => prev.concat(selectedFiles));
      setEmpties(3 - totalLen);
    }
  };

  const onPreventDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onChangeNewTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
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

  const handleImgs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files as FileList);
    const selectedFiles: string[] = files.map((file) =>
      URL.createObjectURL(file)
    );

    const totalLen = imgs.length + selectedFiles.length;

    if (totalLen > 3) {
      alert("이미지는 총 3개까지 업로드 할 수 있습니다.");
    } else {
      setImgs((prev) => prev.concat(selectedFiles));
      setImgFiles(files);
      setEmpties(3 - totalLen);
    }
  };

  const deleteImage = (e: React.MouseEvent<HTMLImageElement>) => {
    let deleteIdx = -1;

    imgs.map((image, idx) => {
      if (image === e.currentTarget.currentSrc) {
        deleteIdx = idx;
      }
    });

    setImgs(imgs.filter((image) => image !== e.currentTarget.currentSrc));
    setImgFiles(imgFiles?.filter((image, idx) => idx !== deleteIdx));
    setEmpties(4 - imgs.length);
  };

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      let formData = new FormData();
      imgFiles!.map((item) => {
        formData.append("imgs", item);
      });

      dispatch(feedActions.imageUploadTestReq({ imgs: formData }));
    },
    [dispatch, user, content, imgFiles, tags]
  );

  useEffect(() => {
    if (uploadImgSuccess) {
      let feed = {
        userId: user.id,
        content: content.value,
        imgs: uploadedImgs,
        tags: tags,
      };

      console.log("here");

      dispatch(feedActions.createFeedReq(feed));
    }
  }, [dispatch, uploadImgSuccess, uploadedImgs]);

  return (
    <div className="w-full">
      <ViewHeader title="Create Feed Page" desc="It's Just Create Feed Page" />
      <div className="w-full flex justify-center">
        <div className="w-default">
          <div className="w-full mt-20">
            <div className="text-4xl font-bold mb-4">Imgs</div>
            <label
              onDrop={onDragAddImage}
              onDragOver={onPreventDragOver}
              onMouseOver={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
              onDragEnter={() => setIsActive(true)}
              onDragLeave={() => setIsActive(false)}
              className={`w-full cursor-pointer text-gray-600 flex items-center justify-center border-2 border-dashed ${
                isActive ? "border-[#FB2E86]" : "border-gray-300"
              } h-48 rounded-md`}
            >
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="ml-2 font-lato">Select the images</div>
              <input
                className="hidden"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImgs}
              />
            </label>
          </div>
          <div className="flex mt-4 gap-4">
            {imgs.map((image, i) => (
              <div key={i} className="w-32 h-32 rounded-md">
                <Image
                  className="rounded-md w-full h-full cursor-pointer"
                  src={image}
                  width={128}
                  height={128}
                  alt={image}
                  onClick={deleteImage}
                />
              </div>
            ))}
            {[1, 2, 3].map((item, i) => {
              if (item <= empties) {
                return (
                  <div
                    key={i}
                    className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col"
                  >
                    Empty...
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-20">
            <div className="text-4xl font-bold mb-4">Tags</div>
            <input
              className="w-full h-12 text-xs flex justify-center flex-col text-lightGray px-3 py-0 border border-inputColor active:border-inputColor active:ring-0 focus:ring-0 focus:border-inputColor outline-none rounded-3"
              type="text"
              value={newTag}
              placeholder={
                tags.length < 5
                  ? "Enter the Tag"
                  : "Up to 5 tags can be created."
              }
              onChange={onChangeNewTag}
              onKeyDown={enterTag}
              disabled={tags.length >= 5}
            />

            <div className="flex mt-4 gap-2">
              {tags.map((item) => (
                <div
                  key={tags.indexOf(item)}
                  className="cursor-pointer bg-[#f6f2fe] text-[#9061f9] rounded-full px-3 py-2 relative"
                  onClick={onDeleteTag}
                >
                  <div className="w-5 h-5 absolute -top-1 -right-1">
                    <svg
                      fill="red"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                      ></path>
                    </svg>
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="text-4xl font-bold mb-4">Content</div>
            <textarea
              className="w-full h-60 resize-none text-xs text-lightGray p-3 border border-inputColor active:border-inputColor active:ring-0 focus:ring-0 focus:border-inputColor outline-none rounded-3"
              placeholder="Enter the content"
              {...content}
            ></textarea>
          </div>
          <button
            className="w-full h-12 border-none outline-none text-white bg-baseRed rounded-3 font-bold text-4.25 font-lato mt-5 cursor-pointer hover:bg-hoverRed"
            onClick={handleSubmit}
          >
            Write
          </button>
        </div>
      </div>
    </div>
  );
}
