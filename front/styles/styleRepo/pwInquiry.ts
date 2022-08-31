import styled from 'styled-components';

export const PwInquiryContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F4F9FC;
`;

export const PwInquiryForm = styled.div`
  width: 530px;
  margin: 0 auto;
  
  & > div {
    height: fit-content;
    padding: - 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PwInquiryTitle = styled.div`
  font-size: 48px;
  color: #5455dd;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
`;

export const PwInquiryLabel = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: gray;
  font-weight: bold;
  text-align: center;
`;

export const PwInquiryInput = styled.input.attrs({ autoComplete: 'off' })`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  outline: none;
  padding-left: 12px;
  border: 1px solid black;
  font-size: 16px;
`;

export const PwInquiryButton = styled.button`
  width: 100%;
  height: 56px;
  line-height: 56px;
  color: white;
  background-color: #5455dd;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #3D3EBE;
  }
`;