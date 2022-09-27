import { NextPage } from "next";
import {
  CopyRight,
  EmailInput,
  Facebook,
  FtBottom,
  FtContainer,
  FtLogo,
  FtTop,
  Instagram,
  SNSContainer,
  Twitter,
} from "./style";

const Footer: NextPage = () => {
  return (
    <FtContainer>
      <FtTop>
        <div>
          <FtLogo>FUKIN FRIENDS</FtLogo>
          <EmailInput>
            <input placeholder="Enter Email Address" />
            <button>Send</button>
          </EmailInput>
        </div>
      </FtTop>
      <FtBottom>
        <div>
          <CopyRight>&copy;&nbsp;FUKINFRIENDS - No Rights Reserved</CopyRight>
          <SNSContainer>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <Twitter></Twitter>
          </SNSContainer>
        </div>
      </FtBottom>
    </FtContainer>
  );
};

export default Footer;
