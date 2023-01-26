import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="w-full mt-[200px]">
      <div className="w-full h-fit bg-[#eeeffb] flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <div className="w-default px-0 py-14 flex justify-between">
            <div className="font-bold text-[38px] font-josefin">
              FUKIN FRIENDS
            </div>
            <div className="w-[377px] h-[44px] rounded-3 bg-white flex justify-between relative top-1">
              <input
                className="w-[220px] h-[44px] rounded-3 bg-white px-6 py-0 border-none outline-none"
                placeholder="Enter Email Address"
              />
              <button className="w-[135px] h-[39px] mt-[2.5px] mr-[2.5px] mt- bg-baseRed border-none outline-none rounded-3 text-white font-roboto cursor-pointer hover:bg-hoverRed">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[53px] bg-[#e7e4f8] flex justify-center">
        <div className="w-default h-full leading-[53px] flex justify-between">
          <div className="text-[#9da0ae] font-lato">
            &copy;&nbsp;FUKINFRIENDS - No Rights Reserved
          </div>
          <div className="flex h-5 mt-[16.5px] gap-[11px]">
            <div className="w-5 h-5 bg-fb bg-transparent bg-no-repeat bg-center"></div>
            <div className="w-5 h-5 bg-insta bg-transparent bg-no-repeat bg-center"></div>
            <div className="w-5 h-5 bg-twitter bg-transparent bg-no-repeat bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
