import styled from "styled-components";

interface IArrow {
  active: boolean;
}

export const NoticeHeader = styled.div`
  width: 100%;
  height: 286px;
  background-color: #f6f5ff;
  display: flex;
  justify-content: center;

  & > div {
    width: 1177px;
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
  }
`;

export const CreateNotice = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  height: 50px;
  width: 200px;
  background-color: #fb2e86;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  font-size: 17px;
  position: relative;
  top: 16px;

  & a {
    color: white;
  }
  &:hover {
    background-color: #f72182;
  }
`;

export const NoticeHeaderTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;
  color: #101750;
`;

export const NoticeHeaderDesc = styled.div`
  font-family: "Josefin Sans", sans-serif;
  color: #fb2e86;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
`;

export const NoticeBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;

  & > div {
    width: 1177px;
    display: flex;
    justify-content: space-between;
  }
`;

export const NoticeLeft = styled.div`
  width: 870px;
`;
export const NoticeRight = styled.div`
  width: 270px;
`;

export const NoticeItemTitle = styled.div`
  font-size: 30px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bold;
  color: #151875;
`;
export const NoticeItem = styled.div`
  width: 100%;
  margin-bottom: 80px;
  cursor: pointer;

  &:hover ${NoticeItemTitle} {
    text-decoration: underline;
  }
`;
export const NoticeDatePlace = styled.div`
  display: flex;
  margin-top: 12px;
`;
export const NoticePlace = styled.div`
  background-color: #ffe7f9;
  color: #151875;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  border-radius: 2px;
  padding: 4px 36px;
  margin-left: 12px;
`;
export const NoticeDate = styled.div`
  display: flex;

  & > div:first-child {
    width: 16px;
    height: 16px;
    background-color: white;
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.00065 12.6667C8.13251 12.6667 8.2614 12.6276 8.37103 12.5543C8.48066 12.4811 8.56611 12.377 8.61657 12.2551C8.66703 12.1333 8.68023 11.9993 8.65451 11.87C8.62878 11.7406 8.56529 11.6218 8.47206 11.5286C8.37882 11.4354 8.26003 11.3719 8.13071 11.3462C8.00139 11.3204 7.86735 11.3336 7.74553 11.3841C7.62371 11.4346 7.51959 11.52 7.44634 11.6296C7.37308 11.7393 7.33398 11.8682 7.33398 12C7.33398 12.1768 7.40422 12.3464 7.52925 12.4714C7.65427 12.5964 7.82384 12.6667 8.00065 12.6667ZM11.334 12.6667C11.4658 12.6667 11.5947 12.6276 11.7044 12.5543C11.814 12.4811 11.8994 12.377 11.9499 12.2551C12.0004 12.1333 12.0136 11.9993 11.9878 11.87C11.9621 11.7406 11.8986 11.6218 11.8054 11.5286C11.7122 11.4354 11.5934 11.3719 11.464 11.3462C11.3347 11.3204 11.2007 11.3336 11.0789 11.3841C10.957 11.4346 10.8529 11.52 10.7797 11.6296C10.7064 11.7393 10.6673 11.8682 10.6673 12C10.6673 12.1768 10.7376 12.3464 10.8626 12.4714C10.9876 12.5964 11.1572 12.6667 11.334 12.6667ZM11.334 10C11.4658 10 11.5947 9.96092 11.7044 9.88767C11.814 9.81441 11.8994 9.71029 11.9499 9.58848C12.0004 9.46666 12.0136 9.33261 11.9878 9.20329C11.9621 9.07397 11.8986 8.95518 11.8054 8.86195C11.7122 8.76871 11.5934 8.70522 11.464 8.6795C11.3347 8.65377 11.2007 8.66698 11.0789 8.71743C10.957 8.76789 10.8529 8.85334 10.7797 8.96297C10.7064 9.07261 10.6673 9.2015 10.6673 9.33335C10.6673 9.51016 10.7376 9.67973 10.8626 9.80476C10.9876 9.92978 11.1572 10 11.334 10ZM8.00065 10C8.13251 10 8.2614 9.96092 8.37103 9.88767C8.48066 9.81441 8.56611 9.71029 8.61657 9.58848C8.66703 9.46666 8.68023 9.33261 8.65451 9.20329C8.62878 9.07397 8.56529 8.95518 8.47206 8.86195C8.37882 8.76871 8.26003 8.70522 8.13071 8.6795C8.00139 8.65377 7.86735 8.66698 7.74553 8.71743C7.62371 8.76789 7.51959 8.85334 7.44634 8.96297C7.37308 9.07261 7.33398 9.2015 7.33398 9.33335C7.33398 9.51016 7.40422 9.67973 7.52925 9.80476C7.65427 9.92978 7.82384 10 8.00065 10ZM12.6673 2.00002H12.0007V1.33335C12.0007 1.15654 11.9304 0.986973 11.8054 0.861949C11.6804 0.736925 11.5108 0.666687 11.334 0.666687C11.1572 0.666687 10.9876 0.736925 10.8626 0.861949C10.7376 0.986973 10.6673 1.15654 10.6673 1.33335V2.00002H5.33398V1.33335C5.33398 1.15654 5.26375 0.986973 5.13872 0.861949C5.0137 0.736925 4.84413 0.666687 4.66732 0.666687C4.49051 0.666687 4.32094 0.736925 4.19591 0.861949C4.07089 0.986973 4.00065 1.15654 4.00065 1.33335V2.00002H3.33398C2.80355 2.00002 2.29484 2.21073 1.91977 2.58581C1.5447 2.96088 1.33398 3.46959 1.33398 4.00002V13.3334C1.33398 13.8638 1.5447 14.3725 1.91977 14.7476C2.29484 15.1226 2.80355 15.3334 3.33398 15.3334H12.6673C13.1978 15.3334 13.7065 15.1226 14.0815 14.7476C14.4566 14.3725 14.6673 13.8638 14.6673 13.3334V4.00002C14.6673 3.46959 14.4566 2.96088 14.0815 2.58581C13.7065 2.21073 13.1978 2.00002 12.6673 2.00002ZM13.334 13.3334C13.334 13.5102 13.2637 13.6797 13.1387 13.8048C13.0137 13.9298 12.8441 14 12.6673 14H3.33398C3.15717 14 2.9876 13.9298 2.86258 13.8048C2.73756 13.6797 2.66732 13.5102 2.66732 13.3334V7.33335H13.334V13.3334ZM13.334 6.00002H2.66732V4.00002C2.66732 3.82321 2.73756 3.65364 2.86258 3.52862C2.9876 3.40359 3.15717 3.33335 3.33398 3.33335H4.00065V4.00002C4.00065 4.17683 4.07089 4.3464 4.19591 4.47142C4.32094 4.59645 4.49051 4.66669 4.66732 4.66669C4.84413 4.66669 5.0137 4.59645 5.13872 4.47142C5.26375 4.3464 5.33398 4.17683 5.33398 4.00002V3.33335H10.6673V4.00002C10.6673 4.17683 10.7376 4.3464 10.8626 4.47142C10.9876 4.59645 11.1572 4.66669 11.334 4.66669C11.5108 4.66669 11.6804 4.59645 11.8054 4.47142C11.9304 4.3464 12.0007 4.17683 12.0007 4.00002V3.33335H12.6673C12.8441 3.33335 13.0137 3.40359 13.1387 3.52862C13.2637 3.65364 13.334 3.82321 13.334 4.00002V6.00002ZM4.66732 10C4.79917 10 4.92807 9.96092 5.0377 9.88767C5.14733 9.81441 5.23278 9.71029 5.28324 9.58848C5.3337 9.46666 5.3469 9.33261 5.32117 9.20329C5.29545 9.07397 5.23196 8.95518 5.13872 8.86195C5.04549 8.76871 4.9267 8.70522 4.79738 8.6795C4.66806 8.65377 4.53401 8.66698 4.4122 8.71743C4.29038 8.76789 4.18626 8.85334 4.113 8.96297C4.03975 9.07261 4.00065 9.2015 4.00065 9.33335C4.00065 9.51016 4.07089 9.67973 4.19591 9.80476C4.32094 9.92978 4.49051 10 4.66732 10ZM4.66732 12.6667C4.79917 12.6667 4.92807 12.6276 5.0377 12.5543C5.14733 12.4811 5.23278 12.377 5.28324 12.2551C5.3337 12.1333 5.3469 11.9993 5.32117 11.87C5.29545 11.7406 5.23196 11.6218 5.13872 11.5286C5.04549 11.4354 4.9267 11.3719 4.79738 11.3462C4.66806 11.3204 4.53401 11.3336 4.4122 11.3841C4.29038 11.4346 4.18626 11.52 4.113 11.6296C4.03975 11.7393 4.00065 11.8682 4.00065 12C4.00065 12.1768 4.07089 12.3464 4.19591 12.4714C4.32094 12.5964 4.49051 12.6667 4.66732 12.6667Z' fill='%23FFA454'/%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: none;
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
  & > div:last-child {
    background-color: #ffece2;
    color: #151875;
    font-size: 14px;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    border-radius: 2px;
    padding: 4px 36px;
  }
`;
export const NoticeItemDesc = styled.div`
  font-family: "Lato", sans-serif;
  color: #8a8fb9;
  font-size: 16px;
  margin-top: 24px;
`;
export const ReadMore = styled.div`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  margin-top: 24px;
  color: #151875;

  & > div {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #fb2e86;
    margin-left: 4px;
    position: relative;
    top: 9px;
  }
`;

export const NoticeSearch = styled.div`
  width: 100%;

  & > div {
    font-family: "Josefin Sans", sans-serif;
    color: #151875;
    font-weight: bold;
    font-size: 24px;
  }
  & > input {
    width: 100%;
    height: 40px;
    border: 1px solid #bdbdd8;
    outline: none;
    border-radius: 2px;
    padding: 0 40px 0 12px;
    margin-top: 20px;

    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z' stroke='%23CBCBE0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.9996 14L11.0996 11.1' stroke='%23CBCBE0' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-position: center right 12px;
    background-repeat: no-repeat;

    &::placeholder {
      color: #151875;
      opacity: 0.2;
    }
  }
`;

export const ImportantNotice = styled.div`
  width: 100%;
  margin-top: 80px;

  & > div:first-child {
    font-family: "Josefin Sans", sans-serif;
    color: #151875;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 32px;
  }
`;
export const ImportantItem = styled.div`
  margin-bottom: 24px;
  cursor: pointer;

  &:hover > * {
    text-decoration: underline;
  }

  & > div:first-child {
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
    color: #3f509e;
  }
  & > div:last-child {
    font-family: "Lato", sans-serif;
    font-size: 11px;
    color: #8a8fb9;
    margin-top: 8px;
  }
`;

export const NoticePaginationCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 0 8px;
  }
`;

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

export const NoticePaginationLArr = styled.div<IArrow>`
  width: 8px;
  height: 8px;
  border: 1px solid #151875;
  transform: rotate(45deg);
  border-top: none;
  border-right: none;
  position: relative;
  top: 12px;
  cursor: pointer;
  margin-right: 12px;
  pointer-events: ${(props) => (props.active ? "" : "none")};
`;
export const NoticePaginationRArr = styled.div<IArrow>`
  width: 8px;
  height: 8px;
  border: 1px solid #151875;
  transform: rotate(45deg);
  border-bottom: none;
  border-left: none;
  position: relative;
  top: 12px;
  cursor: pointer;
  margin-left: 12px;
  pointer-events: ${(props) => (props.active ? "" : "none")};
`;
