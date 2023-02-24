import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface IHeader {
  title: string;
  desc: string;
  url?: string;
  url_title?: string;
}

export default function ViewHeader({ title, desc, url, url_title }: IHeader) {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const preventScroll = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const { body } = document;

    if (openModal) {
      body.addEventListener("wheel", preventScroll, { passive: false });
    }
    return () => {
      body.removeEventListener("wheel", preventScroll);
    };
  }, [openModal]);

  const handleSubmit = useCallback(() => {
    handleModal();
  }, []);

  return (
    <div className="w-full h-[286px] bg-[#f6f5ff] flex justify-center">
      <div className="w-default mt-[90px] flex justify-between">
        <div>
          <div className="text-4xl font-bold font-josefin text-[#101750]">
            {title}
          </div>
          <div className="font-josefin text-baseRed text-base font-medium mt-6">
            {desc}
          </div>
        </div>
        {url ? (
          title === "Album Page" ? (
            <div
              className="cursor-pointer text-white hover:text-white hover:bg-hoverRed outline-none border-none h-[50px] w-[200px] flex justify-center flex-col text-center bg-baseRed font-josefin font-bold text-4.25 relative top-4"
              onClick={handleModal}
            >
              {url_title}
            </div>
          ) : (
            <div className="cursor-pointer hover:bg-hoverRed outline-none border-none h-[50px] w-[200px] flex justify-center flex-col text-center bg-baseRed font-josefin font-bold text-4.25 relative top-4">
              <Link href={url}>
                <a className="text-white hover:text-white">{url_title}</a>
              </Link>
            </div>
          )
        ) : (
          ""
        )}
      </div>
      {openModal ? (
        <div
          className={`w-screen h-screen z-50 bg-[rgba(0,0,0,0.3)] flex fixed top-0 left-0 flex-col mx-auto my-0 justify-center`}
        >
          <div className="w-full h-[509px] flex justify-center">
            <div className="w-fit h-fit bg-white relative p-10">
              <div
                className="w-4.5 h-4.5 p-1 absolute top-[7px] right-[7px] bg-close bg-no-repeat bg-center cursor-pointer hover:rounded-full hover:bg-[#f6f2fe] hover:text-[#9061f9]"
                onClick={handleModal}
              ></div>
              <div className="w-56 h-fit">
                <label
                  className={`w-full cursor-pointer text-gray-600 flex items-center justify-center border-2 border-dashed border-[#FB2E86] h-48 rounded-md`}
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
                  />
                </label>
              </div>
              <button
                className="w-full mt-2 bg-baseRed text-white py-2 rounded-sm"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
