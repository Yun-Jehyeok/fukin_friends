import styled from "styled-components";

interface IModal {
  isOpen: boolean;
}

export const CreateNoticeTitle = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const CreateNoticeDesc = styled.div`
  color: #9096b2;
  font-size: 17px;
  font-family: "Lato", sans-serif;
  margin-bottom: 40px;
  text-align: center;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border: 1px solid #dadde6;
  outline: none;
  margin-bottom: 12px;
  border-radius: 3px;
`;

export const LocDateCont = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;

  & > * {
    padding: 0 12px;
    border: 1px solid #dadde6;
    outline: none;
    border-radius: 3px;
  }
`;

export const LocationInput = styled.div`
  width: calc(80% - 4px);
  height: 100%;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #757575;
`;
export const DateInput = styled.input`
  width: calc(20% - 4px);
  height: 100%:
`;

export const LocationModal = styled.div<IModal>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.28);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: -122px;

  & > div {
    width: 50% !important;
    margin: 0 auto;
  }
`;

export const EditorButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  color: white;
  background-color: #fb2e86;
  border-radius: 3px;
  font-weight: bold;
  font-size: 17px;
  font-family: "Lato", sans-serif;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f72182;
  }
`;

export const ModalCloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > div {
    color: white;
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 8px;
  }
`;
