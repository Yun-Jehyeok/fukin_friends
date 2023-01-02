import styled from "styled-components";

export const NoticePaginationBtn = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 50%;
  background-color: white;
  color: #151875;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  font-size: 18px;

  &:first-child {
    color: #fb2e86;
  }
  &.active {
    color: #fb2e86;
  }
  &:hover {
    background-color: #eeeffb;
  }
`;
