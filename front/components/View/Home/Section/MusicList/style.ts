import styled from "styled-components";

export const MuListCont = styled.div`
  width: 100%;
  margin-top: 112px;
`;

export const MuTitle = styled.div`
  font-size: 40px;
  color: #151875;
  font-weight: bold;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 53px;
`;

export const MuList = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const MuItem = styled.div`
  width: 120px;
  height: fit-content;
  margin-right: 24px;
`;

export const MuDesc = styled.div`
  width: 100%;
  margin-top: 8px;

  & > div {
    font-size: 14px;
  }
  & > div:last-child {
    color: gray;
  }
`;
