import styled from 'styled-components';

interface IAuthBtn {
  sendPASuccess: boolean;
}

export const RegisterForm = styled.div`
  width: 530px;
  border-radius: 16px;
  margin: 0 auto;

  & > div {
    height: 100%;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const RegisterAuthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 16px;

  & > div:first-child {
    width: calc(80% - 4px);
  }
  & > div:last-child {
    width: calc(20% - 4px);
  }
`;

export const RegisterAuthBtn = styled.button<IAuthBtn>`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #5455dd;
  text-align: center;
  border: none;
  cursor: ${props => props.sendPASuccess ? "initial" : "pointer"};
  pointer-events: ${props => props.sendPASuccess ? 'none' : ''};
  font-size: 16px;

  &:hover {
    background-color: #3D3EBE;
  }
`;