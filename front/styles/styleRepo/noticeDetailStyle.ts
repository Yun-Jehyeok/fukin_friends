import { NoticeItem } from "components/View/Notice/style";
import styled from "styled-components";

interface ILikeBtn {
  isLiked: boolean;
}

export const NoticeDetailItem = styled(NoticeItem)`
  cursor: initial;

  &:hover > div:first-child {
    text-decoration: none;
  }
`;

export const LikeBtn = styled.div<ILikeBtn>`
  width: 16px;
  height: 16px;
  background: ${(props) => (props.isLiked ? "#ea2027" : "black")};
  position: relative;
  transform: rotate(45deg);
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    background: ${(props) => (props.isLiked ? "#ea2027" : "black")};
  }
  &::before {
    left: -50%;
  }
  &::after {
    top: -50%;
  }
`;

export const CommentContainer = styled.div`
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

export const CommentInput = styled.textarea`
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
