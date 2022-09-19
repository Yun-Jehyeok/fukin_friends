import styled from "styled-components";

interface ISlideContainer {
  slideIdx: string;
}

export const GroupWrap = styled.div`
  width: 480px;
  margin: 0 auto;
`;

export const GroupTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  margin-bottom: 32px;
`;

export const SlideContainer = styled.div<ISlideContainer>`
  position: relative;
  transition: all 0.5s ease-out;
  width: 300vw;
  display: flex;
  left: ${(props) =>
    props.slideIdx === "0" ? "0" : props.slideIdx === "1" ? "-100vw" : "0"};
`;

export const SlideItem = styled.div`
  width: calc(100% / 3);
  height: fit-content;
`;

export const GroupFormTitle = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 12px;
  color: gray;
`;

export const GroupInput = styled.input`
  outline: none;
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 48px;
  padding-left: 16px;
`;

export const SelectedMemberList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 32px;

  & > div {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 0 12px;
  }
`;

export const SelectedItem = styled.div`
  width: 50px;
  height: fit-content;
  cursor: pointer;
  position: relative;

  & > div:first-child {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: #e8e8e8;
    margin-left: 5px;
    margin-bottom: 8px;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
  & > span {
    width: 16px !important;
    height: 16px !important;
    position: absolute !important;
    top: 0;
    right: 0;
  }
`;

export const MemberList = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  border: 1px solid #e8e8e8;
  border-top: none;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const MemberItem = styled.div`
  border-bottom: 1px solid #e8e8e8;
  height: 60px;
  line-height: 60px;
  background-color: transparent;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & > div:first-child {
    display: flex;
  }
`;

export const MemberImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: #e8e8e8;
  margin-top: 15px;
  margin-right: 8px;
`;

export const MemberName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const SelectMember = styled.button`
  background-color: #5455dd;
  width: 50px;
  height: 24px;
  margin-top: 18px;
  border: none;
  outline: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;

export const NoSearchResult = styled.div`
  font-size: 14px;
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const GroupErrMsg = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 8px;
`;

export const GroupButton = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;

  & > button {
    width: 480px;
    height: 40px;
    border: 4px;
    outline: none;
    border: none;
    color: white;
    background-color: #5455dd;
    margin-top: 8px;
    cursor: pointer;

    &:hover {
      background-color: #3d3ebe;
    }
  }
`;

export const GroupButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;

  & > div {
    width: calc(50% - 4px);
  }

  & > div:first-child > button {
    background-color: #8e8e8e;

    &:hover {
      background-color: gray;
    }
  }
`;

export const GroupInfo = styled.div`
  text-align: center;

  & > div:first-child {
    font-size: 18px;
    font-weight: bold;
  }
  & > div:last-child {
    font-size: 16px;
    margin-top: 8px;
  }
`;
