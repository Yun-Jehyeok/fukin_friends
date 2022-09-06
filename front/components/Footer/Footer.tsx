import { NextPage } from 'next';
import { FtBottom, FtContainer, FtLogo, FtTop } from './style';

const Footer: NextPage = () => {
  return (
    <FtContainer>
        <FtTop>
            <div>
                <FtLogo>FUKIN FRIENDS</FtLogo>
            </div>
        </FtTop>
        <FtBottom></FtBottom>
    </FtContainer>
  );
};

export default Footer;
