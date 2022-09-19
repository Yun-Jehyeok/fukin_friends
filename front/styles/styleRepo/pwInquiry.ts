import styled from "styled-components";

export const PwInquiryForm = styled.div`
  width: 530px;
  margin: 0 auto;

  & > div {
    height: fit-content;
    padding: -48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PwInquiryLabel = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: gray;
  font-weight: bold;
  text-align: center;
`;
