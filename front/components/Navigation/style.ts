import styled from 'styled-components';

export const NavigationContainer = styled.div`
  width: 240px;
  height: calc(100vh - 56px);
  overflow-y: hidden;
  border-right: 1px solid #e8e8e8;
  padding: 16px;

  & > div {
    font-size: 14px;
    display: flex;
  }
  & > div:not(.division) {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 4px;
    line-height: 40px;
    padding-left: 12px;
    cursor: pointer;
  }
  & > div:not(.division):hover {
    color: #5455dd;
    background-color: #eeeefc;
  }
  & > div:not(.division)[data-clicked='true'] {
    color: #5455dd;
    background-color: #eeeefc;
  }
  & > .division {
    font-size: 12px;
    color: #cacaca;
    margin-bottom: 4px;
    margin-top: 24px;
    padding-left: 8px;
    font-weight: bold;
  }
`;

export const IconContainer = styled.div`
  margin-right: 16px;
`;
