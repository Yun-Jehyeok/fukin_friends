import styled from "styled-components";

export const FtContainer = styled.div`
    width: 100%;
    margin-top: 200px;
`;

export const FtTop = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #EEEFFB;
    display: flex;
    justify-content: center;
    
    & > div {
        width: 1177px;
        padding: 56px 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const FtLogo = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    font-size: 38px;
    position: relative;
    top: 7px;
`;

export const EmailInput = styled.div`
    width: 377px;
    height: 44px;
    border-radius: 3px;
    background-color: white;
    display: flex;
    justify-content: space-between;

    & > input {
        width: 220px;
        height: 44px;
        border-radius: 3px;
        background-color: white;
        padding: 0 24px;
        border: none;
        outline: none;
    }
    & > button {
        width: 135px;
        height: 39px;
        margin-top: 2.5px;
        margin-right: 2.5px;
        background-color: #FB2E86;
        border: none;
        outline: none;
        border-radius: 3px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            background-color: #f72182;
        }
    }
`;

export const FtBottom = styled.div`
    width: 100%;
    height: 53px;
    background-color: #E7E4F8;
    display: flex;
    justify-content: center;

    & > div {
        width: 1177px;
        height: 100%;
        line-height: 53px;
        display: flex;
        justify-content: space-between;
    }
`;

export const CopyRight = styled.div`
    color: #9DA0AE;
    font-family: 'Lato', sans-serif;
`;

export const SNSContainer = styled.div`
    display: flex;
    height: 20px;
    margin-top: 16.5px;

    & > div {
        width: 20px;
        height: 20px;
        background-color: transparent;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }
    & > div:not(:last-child) {
        margin-right: 11px;
    }
`;
export const Facebook = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='9.70874' cy='9.70874' r='9.70874' fill='%23151875'/%3E%3Cpath d='M10.8201 13.9791V9.7352H12.2519L12.4647 8.07358H10.8201V7.0152C10.8201 6.53571 10.9537 6.20743 11.6419 6.20743H12.5139V4.726C12.0896 4.68054 11.6631 4.65858 11.2365 4.66024C9.97095 4.66024 9.10208 5.4328 9.10208 6.85105V8.07047H7.67969V9.73209H9.10519V13.9791H10.8201Z' fill='white'/%3E%3C/svg%3E%0A");
`;
export const Instagram = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='9.70874' r='9.70874' fill='%23151875'/%3E%3Cpath d='M14.2444 7.40715C14.2392 7.01499 14.1658 6.62671 14.0275 6.25971C13.9075 5.95015 13.7243 5.669 13.4896 5.43425C13.2548 5.1995 12.9737 5.01629 12.6641 4.89635C12.3018 4.76035 11.9191 4.68681 11.5322 4.67887C11.0341 4.6566 10.8762 4.65039 9.6117 4.65039C8.34723 4.65039 8.18516 4.65039 7.69066 4.67887C7.30395 4.68687 6.92139 4.76041 6.55927 4.89635C6.24966 5.01621 5.96847 5.19938 5.73371 5.43415C5.49895 5.66891 5.31577 5.9501 5.19591 6.25971C5.05964 6.62172 4.98626 7.00436 4.97895 7.3911C4.95668 7.88974 4.94995 8.04767 4.94995 9.31214C4.94995 10.5766 4.94995 10.7382 4.97895 11.2332C4.98671 11.6205 5.05972 12.0026 5.19591 12.3656C5.31597 12.6751 5.49928 12.9562 5.73413 13.1909C5.96897 13.4255 6.25018 13.6086 6.55979 13.7284C6.92092 13.8699 7.30354 13.9487 7.69118 13.9615C8.18982 13.9837 8.34775 13.9905 9.61222 13.9905C10.8767 13.9905 11.0388 13.9905 11.5333 13.9615C11.9201 13.9538 12.3029 13.8805 12.6652 13.7445C12.9746 13.6244 13.2557 13.4412 13.4905 13.2064C13.7252 12.9717 13.9084 12.6906 14.0285 12.3811C14.1647 12.0187 14.2377 11.6365 14.2455 11.2487C14.2677 10.7506 14.2745 10.5927 14.2745 9.32767C14.2734 8.06321 14.2734 7.90269 14.2444 7.40715ZM9.60859 11.7033C8.28613 11.7033 7.21481 10.632 7.21481 9.30955C7.21481 7.98709 8.28613 6.91576 9.60859 6.91576C10.2435 6.91576 10.8523 7.16796 11.3013 7.61689C11.7502 8.06581 12.0024 8.67468 12.0024 9.30955C12.0024 9.94442 11.7502 10.5533 11.3013 11.0022C10.8523 11.4511 10.2435 11.7033 9.60859 11.7033ZM12.0977 7.38541C11.7885 7.38541 11.5395 7.13583 11.5395 6.82722C11.5395 6.75395 11.5539 6.6814 11.5819 6.61371C11.61 6.54602 11.6511 6.48451 11.7029 6.4327C11.7547 6.3809 11.8162 6.3398 11.8839 6.31176C11.9516 6.28372 12.0241 6.26929 12.0974 6.26929C12.1707 6.26929 12.2432 6.28372 12.3109 6.31176C12.3786 6.3398 12.4401 6.3809 12.4919 6.4327C12.5437 6.48451 12.5848 6.54602 12.6129 6.61371C12.6409 6.6814 12.6553 6.75395 12.6553 6.82722C12.6553 7.13583 12.4057 7.38541 12.0977 7.38541Z' fill='white'/%3E%3Cpath d='M9.60866 10.8643C10.4674 10.8643 11.1636 10.1681 11.1636 9.30935C11.1636 8.45057 10.4674 7.75439 9.60866 7.75439C8.74989 7.75439 8.05371 8.45057 8.05371 9.30935C8.05371 10.1681 8.74989 10.8643 9.60866 10.8643Z' fill='white'/%3E%3C/svg%3E%0A");
`;
export const Twitter = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10.2913' cy='9.70874' r='9.70874' fill='%23151875'/%3E%3Cpath d='M15.932 5.66303C15.4996 5.85461 15.0351 5.98406 14.5468 6.04257C15.0507 5.74111 15.4276 5.26664 15.6073 4.70769C15.1339 4.98885 14.6159 5.18675 14.0756 5.2928C13.7123 4.9049 13.2311 4.64779 12.7068 4.5614C12.1824 4.475 11.6441 4.56415 11.1756 4.815C10.707 5.06586 10.3344 5.46438 10.1156 5.9487C9.89676 6.43302 9.84395 6.97604 9.96535 7.49345C9.00623 7.44529 8.06795 7.196 7.2114 6.76175C6.35485 6.3275 5.59919 5.718 4.99345 4.9728C4.78633 5.33008 4.66723 5.74432 4.66723 6.18549C4.667 6.58264 4.7648 6.9737 4.95196 7.32399C5.13912 7.67428 5.40984 7.97295 5.74011 8.19351C5.35708 8.18133 4.98251 8.07783 4.64756 7.89164V7.9227C4.64752 8.47972 4.84019 9.0196 5.19289 9.45073C5.54559 9.88186 6.03659 10.1777 6.58257 10.288C6.22725 10.3842 5.85472 10.3983 5.49312 10.3294C5.64717 10.8087 5.94723 11.2278 6.35131 11.5281C6.75538 11.8284 7.24324 11.9948 7.74658 12.004C6.89213 12.6748 5.83688 13.0386 4.7506 13.037C4.55817 13.0371 4.36591 13.0258 4.1748 13.0034C5.27745 13.7123 6.561 14.0886 7.87189 14.0871C12.3094 14.0871 14.7353 10.4118 14.7353 7.22419C14.7353 7.12063 14.7327 7.01604 14.7281 6.91248C15.1999 6.57123 15.6072 6.14867 15.9309 5.66458L15.932 5.66303Z' fill='white'/%3E%3C/svg%3E%0A");
`;