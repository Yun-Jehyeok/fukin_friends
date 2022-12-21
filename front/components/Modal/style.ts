import { FeedCreatorAndDate } from "components/View/Feed/style";
import styled from "styled-components";

interface IModal {
  open: Boolean;
}

export const ModalCon = styled.div<IModal>`
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;

  & > div {
    width: 100%;
    height: 509px;
    display: flex;
    justify-content: center;
  }
`;

export const ModalWrap = styled.div`
  width: 1170px;
  height: 100%;
  background-color: white;
  display: flex;
  position: relative;
`;

export const ModalImgList = styled.div`
  width: fit-content;
  height: 100%;
  padding: 11px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  & > span {
    border-radius: 3px;
  }
`;

export const ModalMainImg = styled.div`
  height: 487px;
  padding: 11px;
  & > span {
    border-radius: 3px;
  }
`;

export const ModalClose = styled.div`
  width: 18px;
  height: 18px;
  padding: 4px;
  position: absolute;
  top: 7px;
  right: 7px;

  background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: none;
  background-position: center;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    background-color: #f6f2fe;
    color: #9061f9;
  }
`;

export const ModalContent = styled.div`
  width: 549px;
  height: 100%;
  padding: 48px 0 48px 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ModalContentItem = styled.div`
  color: #0d134e;
  font-size: 16px;
  font-family: "Josefin Sans";
  margin-bottom: 16px;
`;

export const ModalCreatorDate = styled(FeedCreatorAndDate)`
  padding: 0;
  padding-bottom: 6px;
`;

export const ModalTagsCon = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  font-family: "Josefin Sans";

  & > div:first-child {
    color: #151875;
    font-weight: bold;
    margin-right: 4px;
  }
`;
