import styled from "styled-components";

export const AbListCont = styled.div`
  width: 100%;
  margin-top: 160px;
`;

export const AbTitle = styled.div`
  font-size: 40px;
  color: #151875;
  font-weight: bold;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 53px;
`;

export const AbList = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const AbItem = styled.div`
  width: calc(1129 / 3) px;
  height: 280px;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
  & img {
    border-radius: 16px;
  }
`;
