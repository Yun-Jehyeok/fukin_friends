import styled from 'styled-components';

interface IDropdownList {
  groupLength: number;
  isOpen: boolean;
}

export const Wrap = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgb(187 187 187);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100%;
  display: flex;
`;

export const Logo = styled.div`
  width: 200px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
`;

export const Navigation = styled.div`
  width: fit-content;
  display: flex;

  & > div {
    margin-top: 12px;
    height: fit-content;
    line-height: 1;
  }
  & > div:not(:first-child) {
    margin-left: 24px;
    padding-left: 24px;
    border-left: 1px solid #e8e8e8;
  }
`;

export const GroupDropdownContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
`;

export const GroupDropdownTrigger = styled.div`
  width: 216px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  cursor: pointer;
  line-height: 64px;
  z-index: 1;
  background-color: white;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    background-color: #fcfcfc;
    border-bottom: 1px solid #e8e8e8;
  }

  & > div:first-child {
    font-size: 24px;
    font-weight: bold;
  }
  & > div:last-child {
    width: fit-content;
    height: fit-content;
    display: flex;
    position: relative;
    top: 22px;
    right: 24px;
  }
`;

export const DropdownLeftArr = styled.div`
  width: 8px;
  height: 8px;
  border-left: 1px solid #B2B2B2;
  border-top: 1px solid #B2B2B2;
  transform: rotate(-45deg);
`;
export const DropdownRightArr = styled.div`
  width: 8px;
  height: 8px;
  border-right: 1px solid #B2B2B2;
  border-bottom: 1px solid #B2B2B2;
  transform: rotate(-45deg);
`;

export const GroupDropdownList = styled.div<IDropdownList>`
  height: 100%;
  width: fit-content;
  max-width: 600px;
  display: flex;
  position: relative;
  left: ${(props) => props.isOpen ? '0' : `-${140 * props.groupLength + 64}px`};
  transition: left 0.5s ease-out;
  padding: 0 24px 0 12px;
`;

export const GroupDropdownItem = styled.div`
  width: fit-content;
  height: 100%;
  margin-right: 12px;

  & > div {
    width: 140px;
    height: 40px;
    margin-top: 8px;
    padding: 0 12px;
    background-color: #5455dd;
    color: white;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;

    &:hover {
      background-color: #3D3EBE;
    }
  }
`;

export const HeaderRightSection = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 32px;
  margin-top: 12px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #f5f4f7;
  color: gray;
  box-shadow: 0 1px 3px rgb(115 115 115 / 16%);
  outline: none;
  margin-right: 16px;
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const Profile = styled.div`
  width: fit-content;
  height: 32px;
  cursor: pointer;
  margin-top: 12px;

  & > div:first-child {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f5f4f7;
    border: 1px solid #cacaca;

    &:hover {
      box-shadow: 0px 2px 4px rgb(0 0 0 / 8%);
    }
  }
`;

export const DropdownItem = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 64px;
  left: -8px;
  cursor: initial;

  & > div:first-child {
    width: 8px;
    height: 8px;
    position: absolute;
    top: -4px;
    right: -28px;
    border-left: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    background-color: white;
    z-index: 1;
    transform: rotate(45deg);
  }
  & > div:last-child {
    border: 1px solid #e8e8e8;
    background-color: white;
    width: 280px;
    height: 100px;
    position: absolute;
    right: -54px;
    border-radius: 4px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const DropdownProfile = styled.div`
  display: flex;

  & > ${Profile} {
    cursor: initial;
    margin-top: 0;

    & > div:first-child {
      width: 40px;
      height: 40px;
      &:hover {
        box-shadow: none;
      }
    }
  }
  & > div:last-child {
    margin-left: 16px;
    font-size: 14px;

    & > div:first-child {
      font-weight: bold;
    }
    & > div:last-child {
      font-size: 13px;
      margin-top: 3px;
    }
  }
`;

export const Logout = styled.div`
  width: fit-content;
  cursor: pointer;
  color: #5455dd;
  font-size: 12px;
`;

export const LoginText = styled.div`
  height: 100%;
  line-height: 32px;
  margin-top: 12px;

  & > a {
    font-size: 14px;
  }
`;
