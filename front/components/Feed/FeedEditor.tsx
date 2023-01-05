import ViewHeader from "components/ViewHeader";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import { useState } from "react";

export default function FeedEditor() {
  const [tags, setTags] = useState<String[]>(["TAG1"]);
  const [newTag, setNewTag] = useState("");

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

  return (
    <div className="w-full">
      <ViewHeader title="Create Feed Page" desc="It's Just Create Feed Page" />
      <div className="w-full flex justify-center">
        <form className="w-default">
          <div className="w-full mt-20">
            <div className="text-4xl font-bold mb-4">Images</div>
            <label className="w-full cursor-pointer text-gray-600 hover:border-[#FB2E86] flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
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
              <input className="hidden" type="file" />
            </label>
          </div>
          <div className="flex mt-4 gap-4">
            <div className="w-32 h-32 rounded-md">
              <Image
                className="rounded-md cursor-pointer"
                src={cat}
                alt="cat"
                width={128}
                height={128}
              />
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
            <div className="font-lato w-32 h-32 text-gray-600 border-2 border-gray-300 rounded-md text-center flex justify-center flex-col">
              Empty...
            </div>
          </div>
          <div className="mt-20">
            <div className="text-4xl font-bold mb-4">Tags</div>
            <input className="hidden" />
            <input
              className="w-full h-12 text-[13px] flex justify-center flex-col text-[#757575] px-3 py-0 border border-solid border-[#dadde6] active:border-[#dadde6] active:ring-0 focus:ring-0 focus:border-[#dadde6] outline-none rounded-3"
              type="text"
              value={newTag}
              placeholder="Enter the Tag"
              onChange={onChangeNewTag}
              onKeyDown={enterTag}
            />
            <div className="flex mt-4 gap-2">
              {tags.map((item) => (
                <div
                  key={tags.indexOf(item)}
                  className="cursor-pointer bg-[#f6f2fe] text-[#9061f9] rounded-full px-3 py-2"
                  onClick={onDeleteTag}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <div className="text-4xl font-bold mb-4">Contents</div>
            <textarea
              className="w-full h-60 resize-none text-[13px] text-[#757575] p-3 border border-solid border-[#dadde6] active:border-[#dadde6] active:ring-0 focus:ring-0 focus:border-[#dadde6] outline-none rounded-3"
              placeholder="Enter the Contents"
            ></textarea>
          </div>
          <button className="w-full h-12 border-none outline-none text-white bg-basered rounded-3 font-bold text-[17px] font-lato mt-5 cursor-pointer hover:bg-hoverred">
            Write
          </button>
        </form>
      </div>
    </div>
  );
}
