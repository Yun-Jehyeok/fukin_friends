import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";

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
