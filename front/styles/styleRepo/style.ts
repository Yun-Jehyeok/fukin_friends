import styled from 'styled-components';

interface INavbar {
  isOpen: boolean;
}

// App
export const AppContainer = styled.div`
  width: 100%;
  min-width: 1200px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
`;

export const ContentWrap = styled.div`
  width: 100%;
  position: relative;
`;

export const Navbar = styled.div<INavbar>`
  width: 18px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => props.isOpen ? '-9px' : '-10px'};
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;

  & > div {
    width: 1px;
    height: 100%;
    background-color: #e8e8e8;
    transition: all 0.3s cubic-bezier(0.24, 0.77, 0.32, 0.95);
  }

  &:hover > div {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const NeedLogin = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;