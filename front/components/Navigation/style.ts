import styled from 'styled-components';

interface INavContainer {
  isOpen: boolean;
}

export const NavigationContainer = styled.div<INavContainer>`
  width: ${(props) => props.isOpen ? '240px' : '0px'};
  height: calc(100vh - 56px);
  border-right: 1px solid #e8e8e8;
  padding: ${(props) => props.isOpen ? '12px' : '12px 0'};
  padding-top: 24px;
  position: relative;
  overflow: hidden;
  transition: all 1s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

export const NavItem = styled.div`
  font-size: 14px;
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-bottom: 4px;
  line-height: 40px;
  padding-left: 12px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: #5455dd;
    background-color: #eeeefc;
  }

  &[data-clicked='true'] {
    color: #5455dd;
    background-color: #eeeefc;
  }
`;

export const DivisionItem = styled.div`
  font-size: 13px;
  color: #cacaca;
  margin-bottom: 4px;
  margin-top: 24px;
  padding-left: 8px;
`;

export const IconContainer = styled.div`
  margin-right: 16px;
`;