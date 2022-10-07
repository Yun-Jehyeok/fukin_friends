import { NextPage } from "next";
import {
  CopyRight,
  EmailInp,
  Facebook,
  FtBottom,
  FtCont,
  FtLogo,
  FtTop,
  Instagram,
  SNSCont,
  Twitter,
} from "./style";

const Footer: NextPage = () => {
  return (
    <FtCont>
      <FtTop>
        <div>
          <FtLogo>FUKIN FRIENDS</FtLogo>
          <EmailInp>
            <input placeholder="Enter Email Address" />
            <button>Send</button>
          </EmailInp>
        </div>
      </FtTop>
      <FtBottom>
        <div>
          <CopyRight>&copy;&nbsp;FUKINFRIENDS - No Rights Reserved</CopyRight>
          <SNSCont>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <Twitter></Twitter>
          </SNSCont>
        </div>
      </FtBottom>
    </FtCont>
  );
};

export default Footer;
