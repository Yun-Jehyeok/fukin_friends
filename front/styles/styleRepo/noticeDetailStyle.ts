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

// export const LikeBtn = styled.div<ILikeBtn>`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-top: -40px;

//   & > div {
//     width: 16px;
//     height: 16px;
//     background: ${(props) => (props.isLiked ? "#ea2027" : "black")};
//     position: relative;
//     transform: rotate(45deg);
//     cursor: pointer;

//     &::before,
//     &::after {
//       content: "";
//       width: 16px;
//       height: 16px;
//       position: absolute;
//       border-radius: 50%;
//       background: ${(props) => (props.isLiked ? "#ea2027" : "black")};
//     }
//     &::before {
//       left: -50%;
//     }
//     &::after {
//       top: -50%;
//     }
//   }
// `;

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

export const CommentEditInput = styled.textarea`
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

export const CommentPaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 0 8px;
  }
`;

export const CommentPaginationBtn = styled.div`
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 50%;
  background-color: white;
  color: #151875;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;

  &:first-child {
    color: #fb2e86;
  }
  &:hover {
    background-color: #eeeffb;
  }
`;
