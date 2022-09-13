import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  position: sticky;
  top: -44px;
  z-index: 1;
  box-shadow: 0 2px 5px rgb(0 0 0 / 8%);  

  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
    padding: 19px 0;
    background-color: white;
  }
`;

export const HeaderTop = styled.div`
  width: 100%;
  height: 44px;
  background-color: #7E33E0;
  display: flex;
  justify-content: center;

  & > div {
    width: 1177px;
    height: 100%;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    
    & > div {
      display: flex;
    }
  }
`;

export const HeaderTopItem = styled.div`
  color: #f1f1f1;
  display: flex;
  font-family: 'Josefin Sans', sans-serif;

  & > div {
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 12px;
  }
`;

export const Email = styled(HeaderTopItem)`
  margin-right: 24px;

  & > div {
    margin-right: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='12' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6666 0.666626H2.33325C1.80282 0.666626 1.29411 0.87734 0.919038 1.25241C0.543966 1.62749 0.333252 2.13619 0.333252 2.66663V9.33329C0.333252 9.86372 0.543966 10.3724 0.919038 10.7475C1.29411 11.1226 1.80282 11.3333 2.33325 11.3333H11.6666C12.197 11.3333 12.7057 11.1226 13.0808 10.7475C13.4559 10.3724 13.6666 9.86372 13.6666 9.33329V2.66663C13.6666 2.13619 13.4559 1.62749 13.0808 1.25241C12.7057 0.87734 12.197 0.666626 11.6666 0.666626ZM2.33325 1.99996H11.6666C11.8434 1.99996 12.013 2.0702 12.138 2.19522C12.263 2.32025 12.3333 2.48981 12.3333 2.66663L6.99992 5.91996L1.66659 2.66663C1.66659 2.48981 1.73682 2.32025 1.86185 2.19522C1.98687 2.0702 2.15644 1.99996 2.33325 1.99996ZM12.3333 9.33329C12.3333 9.5101 12.263 9.67967 12.138 9.8047C12.013 9.92972 11.8434 9.99996 11.6666 9.99996H2.33325C2.15644 9.99996 1.98687 9.92972 1.86185 9.8047C1.73682 9.67967 1.66659 9.5101 1.66659 9.33329V4.18663L6.65325 7.23329C6.7546 7.2918 6.86956 7.32261 6.98659 7.32261C7.10361 7.32261 7.21857 7.2918 7.31992 7.23329L12.3333 4.18663V9.33329Z' fill='white'/%3E%3C/svg%3E%0A");
  }
`;
export const Phone = styled(HeaderTopItem)`
  margin-right: 24px;

  & > div {
    margin-right: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.0441 13.666H10.0627C10.4147 13.666 10.7474 13.5274 10.9994 13.2754L12.8074 11.4674C12.8694 11.4055 12.9185 11.332 12.9521 11.2512C12.9856 11.1703 13.0029 11.0836 13.0029 10.996C13.0029 10.9085 12.9856 10.8218 12.9521 10.7409C12.9185 10.66 12.8694 10.5866 12.8074 10.5247L10.1407 7.85804C10.0789 7.79608 10.0054 7.74692 9.92453 7.71338C9.84365 7.67984 9.75695 7.66257 9.6694 7.66257C9.58184 7.66257 9.49514 7.67984 9.41427 7.71338C9.33339 7.74692 9.25992 7.79608 9.19806 7.85804L8.1354 8.92071C7.64273 8.77404 6.7234 8.44071 6.14073 7.85804C5.55806 7.27537 5.22473 6.35604 5.07806 5.86337L6.14073 4.80071C6.20269 4.73885 6.25185 4.66538 6.28539 4.5845C6.31893 4.50363 6.3362 4.41693 6.3362 4.32937C6.3362 4.24182 6.31893 4.15512 6.28539 4.07425C6.25185 3.99337 6.20269 3.9199 6.14073 3.85804L3.47406 1.19137C3.34661 1.07108 3.17799 1.00406 3.00273 1.00406C2.82747 1.00406 2.65885 1.07108 2.5314 1.19137L0.724063 2.99937C0.47073 3.25271 0.328063 3.60071 0.333396 3.95604C0.34873 4.90537 0.600063 8.20271 3.19873 10.8014C5.7974 13.4 9.09473 13.6507 10.0441 13.666V13.666ZM3.0034 2.60537L4.7274 4.32937L3.8654 5.19137C3.78695 5.2696 3.72933 5.36621 3.69777 5.47241C3.66622 5.5786 3.66173 5.691 3.68473 5.79937C3.70073 5.87604 4.09206 7.69404 5.19873 8.80071C6.3054 9.90737 8.1234 10.2987 8.20006 10.3147C8.30843 10.3378 8.42087 10.3334 8.52708 10.3018C8.6333 10.2703 8.72991 10.2126 8.80806 10.134L9.67006 9.27204L11.3941 10.996L10.0567 12.3327C9.22473 12.3187 6.37806 12.0954 4.1414 9.85804C1.8974 7.61404 1.68006 4.75737 1.66673 3.94204L3.0034 2.60537ZM12.3327 6.33271H13.6661C13.6661 2.91271 11.0841 0.333374 7.6594 0.333374V1.66671C10.3674 1.66671 12.3327 3.62871 12.3327 6.33271V6.33271Z' fill='white'/%3E%3C/svg%3E%0A");  
  }
`;
export const Language = styled(HeaderTopItem)`
  margin-right: 24px;
  cursor: pointer;

  & > div {
    margin-left: 8px;
    border: 1px solid #f1f1f1;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    position: relative;
    top: 2px;
  }
`;
export const Login = styled(HeaderTopItem)`
  cursor: pointer;

  & > div:last-child {
    margin-left: 8px;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00277 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z' fill='white'/%3E%3Cpath d='M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z' fill='white'/%3E%3C/svg%3E%0A");  
  }
  & a {
    color: #f1f1f1;
  }
`;

export const Logout = styled.div`
  width: fit-content !important;
  color: #f1f1f1;
  margin-top: 0 !important;
`;

export const HeaderContainer = styled.div`
  width: 1177px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-size: 34px;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  padding-top: 5px;
`;

export const Navigation = styled.div`
  width: fit-content; 
  height: 100%;
  display: flex;
  margin-left: 96px;

  & > div {
    height: 100%;
    line-height: 40px;
    font-family: 'Lato', sans-serif;  
    cursor: pointer;
    transition: color 0.15s linear;

    &:hover {
      color: #FB2E86;
    }
  }

  & > div[data-active="true"] {
    color: #FB2E86;
  }
  & > div:not(:first-child) {
    margin-left: 35px;
  }
`;

export const Search = styled.div`
  width: 317px;
  height: 40px;
  border: 1px solid #e7e6ef;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 1px 3px rgb(115 115 115 / 16%);
  display: flex;

  & > input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: white;
    padding: 0 16px;
  }
  & > div {
    width: 51px;
    height: 40px;
    position: relative;
    bottom: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #FB2E86;
    background-image: url("data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.7099 19.2899L16.9999 15.6099C18.44 13.8143 19.1374 11.5352 18.9487 9.2412C18.76 6.94721 17.6996 4.81269 15.9854 3.27655C14.2713 1.74041 12.0337 0.919414 9.73283 0.982375C7.43194 1.04534 5.24263 1.98747 3.61505 3.61505C1.98747 5.24263 1.04534 7.43194 0.982375 9.73283C0.919414 12.0337 1.74041 14.2713 3.27655 15.9854C4.81269 17.6996 6.94721 18.76 9.2412 18.9487C11.5352 19.1374 13.8143 18.44 15.6099 16.9999L19.2899 20.6799C19.3829 20.7736 19.4935 20.848 19.6153 20.8988C19.7372 20.9496 19.8679 20.9757 19.9999 20.9757C20.1319 20.9757 20.2626 20.9496 20.3845 20.8988C20.5063 20.848 20.6169 20.7736 20.7099 20.6799C20.8901 20.4934 20.9909 20.2442 20.9909 19.9849C20.9909 19.7256 20.8901 19.4764 20.7099 19.2899ZM9.9999 16.9999C8.61544 16.9999 7.26206 16.5894 6.11091 15.8202C4.95977 15.051 4.06256 13.9578 3.53275 12.6787C3.00293 11.3996 2.86431 9.99214 3.13441 8.63427C3.4045 7.27641 4.07119 6.02912 5.05016 5.05016C6.02912 4.07119 7.27641 3.4045 8.63427 3.13441C9.99214 2.86431 11.3996 3.00293 12.6787 3.53275C13.9578 4.06256 15.051 4.95977 15.8202 6.11091C16.5894 7.26206 16.9999 8.61544 16.9999 9.9999C16.9999 11.8564 16.2624 13.6369 14.9497 14.9497C13.6369 16.2624 11.8564 16.9999 9.9999 16.9999Z' fill='url(%23paint0_linear_210_1287)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_210_1287' x1='0.979004' y1='0.979004' x2='24.4288' y2='15.376' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F3F9FF'/%3E%3Cstop offset='1' stop-color='%23F1F0FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;