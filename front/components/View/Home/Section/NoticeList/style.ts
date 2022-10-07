import styled from "styled-components";

interface IList {
  activeIdx: number;
}

export const NoticeListCont = styled.div`
  width: 100%;
  margin-top: 200px;
`;

export const Title = styled.div`
  font-size: 40px;
  color: #151875;
  font-weight: bold;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 53px;
`;

export const ItemTitle = styled.div`
  width: 100%;
  height: 60%;
  background-color: #f6f7fb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif;
`;

export const Desc = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > div {
    height: fit-content;
  }
`;

export const ListCont = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;

  & > div {
    width: 100%;
    max-width: 1192px;
    overflow: hidden;
  }
`;

export const List = styled.div<IList>`
  display: flex;
  width: fit-content;
  height: 384px;
  display: flex;
  justify-content: center;
  position: relative;
  left: ${(props) => (props.activeIdx === 0 ? 12 : -1188)}px;
  transition: left 0.8s cubic-bezier(0.24, 0.77, 0.32, 0.95);

  & > div {
    width: 270px;
    height: 360px;
    margin-right: 30px;
    color: white;
    box-shadow: 0 0 12px rgb(0 0 0 / 10%);
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    top: 12px;

    &:hover {
      border: 1px solid #2f1ac4;
    }
    &:hover ${Desc} {
      background-color: #2f1ac4;

      & * {
        color: white;
      }
    }
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

export const DSCTitle = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #fb2e86;
  font-weight: bold;
`;

export const Attendees = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & > div {
    width: fit-content;
    display: flex;
  }
`;
export const Attendee = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 8px;
  }
  & > img {
    border-radius: 50%;
  }
`;
export const DSCPlace = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  color: #151875;
  margin-top: 12px;
`;

export const DSCDate = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  color: #151875;
  margin-top: 8px;
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;

  & > div {
    width: fit-content;
    display: flex;
  }
`;

export const PaginationItem = styled.div`
  width: 16px;
  height: 4px;
  background-color: #febad7;
  border-radius: 10px;
  margin-right: 6px;
  cursor: pointer;

  &[data-active="true"] {
    width: 24px;
    background-color: #fb2e86;
  }

  &:last-child {
    margin-right: 0;
  }
`;
