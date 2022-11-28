import { NoticeItem } from "components/View/Notice/style";
import styled from "styled-components";

// 상세 페이지
export const NoticeDetailItem = styled(NoticeItem)`
  cursor: initial !important;

  &:hover > div:first-child {
    text-decoration: none;
  }
`;

export const NoticeControllerBtnCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 36px;

  & > div {
    display: flex;
  }
`;

export const NoticeControllerBtn = styled.div`
  cursor: pointer;
  margin-left: 8px;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #808080;

  & a {
    color: #808080;
  }
`;

export const CommentCont = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 64px;

  & > div:first-child {
    font-size: 24px;
    color: #151875;
    font-weight: bold;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 12px;
  }
`;

export const CommentInp = styled.textarea`
  width: 100%;
  height: 64px;
  border: 1px solid #8a8fb9;
  padding: 12px;
  outline: none;
  font-family: "Lato", sans-serif;
  resize: none;

  &::placeholder {
    font-family: "Lato", sans-serif;
  }
`;

export const CommentContents = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 48px;

  & > div {
    margin-bottom: 36px;
  }
`;

export const CommentSubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: #fb2e86;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #f72182;
  }
`;

export const CommentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CommentCreator = styled.div`
  font-size: 18px;
  color: #151875;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CommentBtn = styled.div`
  display: flex;

  & > div {
    font-size: 14px;
    font-family: "Lato", sans-serif;
    color: gray;
    margin-left: 8px;
    cursor: pointer;
  }
`;

export const CommentEditInp = styled.textarea`
  width: 100%;
  height: 80px;
  border: 1px solid #8a8fb9;
  padding: 12px;
  outline: none;
  font-family: "Lato", sans-serif;
  resize: none;
  border-radius: 3px;

  &::placeholder {
    font-family: "Lato", sans-serif;
  }
`;

export const CommentEditModeBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  & > div {
    font-size: 14px;
    font-family: "Lato", sans-serif;
    color: gray;
    margin-left: 8px;
    cursor: pointer;

    &:hover {
      color: #fb2e86;
    }
  }
`;

export const CommentContent = styled.div`
  font-size: 16px;
  color: #3f509e;
  font-family: "Lato", sans-serif;
  margin-bottom: 8px;
`;

export const CommentDate = styled.div`
  font-size: 14px;
  color: #8a8fb9;
  font-family: "Lato", sans-serif;
`;
