import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 12px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  flex-grow: 1;
  height: 100%;
  line-height: 28px;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchInput = styled.input`
  width: 480px;
  height: 100%;
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
  top: 40px;
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

  & > a {
    font-size: 14px;
  }
`;
