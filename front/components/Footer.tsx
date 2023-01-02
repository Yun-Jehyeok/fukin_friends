import { NextPage } from "next";
import { Facebook, Instagram, Twitter } from "styles/styleRepo/icons";

const Footer: NextPage = () => {
  return (
    <div className="w-full mt-[200px]">
      <div className="w-full h-fit bg-[#eeeffb] flex justify-center">
        <div className="w-default px-0 py-14">
          <div className="font-bold text-[38px] relative top-[7px] font-josefin">
            FUKIN FRIENDS
          </div>
          <div className="w-[377px] h-[44px] rounded-[3px] bg-white flex justify-between">
            <input
              className="w-[220px] h-[44px] rounded-[3px] bg-white px-6 py-0 border-none outline-none"
              placeholder="Enter Email Address"
            />
            <button className="w-[135px] h-[39px] mt-[2.5px] mr-[2.5px] bg-basered border-none outline-none rounded-[3px] text-white font-roboto cursor-pointer hover:bg-[#f72182]">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[53px] bg-[#e7e4f8] flex justify-center">
        <div className="w-default h-full leading-[53px] flex justify-between">
          <div className="text-[#9da0ae] font-lato">
            &copy;&nbsp;FUKINFRIENDS - No Rights Reserved
          </div>
          <div className="flex h-5 mt-[16.5px] gap-[11px]">
            <Facebook className="w-[20px] h-5 bg-transparent bg-no-repeat bg-center"></Facebook>
            <Instagram className="w-[20px] h-5 bg-transparent bg-no-repeat bg-center"></Instagram>
            <Twitter className="w-[20px] h-5 bg-transparent bg-no-repeat bg-center"></Twitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
