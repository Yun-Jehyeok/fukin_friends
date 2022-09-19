import styled from "styled-components";

export const HomeTopImgContainer = styled.div`
  width: 100%;
  height: 764px;
  background-color: #f2f0ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 53px;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
  position: relative;
`;

export const ItemBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  display: flex;

  &:first-child {
    top: 80px;
    left: 140px;
  }
  &:nth-child(2) {
    top: 120px;
    left: 680px;
  }
  &:nth-child(3) {
    top: 460px;
    left: 740px;
  }
  &:nth-child(4) {
    top: 350px;
    left: 920px;
  }
  &:nth-child(5) {
    top: 520px;
    left: 100px;
  }
  &:nth-child(6) {
    top: 60px;
    right: 80px;
  }
  &:last-child {
    top: 490px;
    right: 200px;
  }

  & > div:first-child {
    width: 300px;
    height: 180px;
    background-color: white;
    padding: 8px;
    box-shadow: 0 0 25px rgb(0 0 0 / 20%);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-left: 12px;

    & > div {
      font-size: 14px;
      color: #8a8fb9;
      text-align: left;
    }
  }
`;
