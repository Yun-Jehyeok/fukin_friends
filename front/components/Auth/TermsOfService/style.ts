import styled from "styled-components";

export const TOSContainer = styled.div`
    width: 100%;
    min-width: 1320px;
    height: 100%;
    padding: 96px 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #F4F9FC;
`;

export const TOSWrap = styled.div`
    width: 40%;
    margin: 0 auto;
`;

export const TOSLogo = styled.div`
    font-size: 48px;
    color: #5455dd;
    font-weight: bold;
    text-align: center;
    margin-bottom: 48px;
`;

export const TOSLabel = styled.div`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;

    & > span:first-child {
        margin-right: 8px;
        cursor: pointer;

        & > span {
            top: 5px;
        }
    }
    & > span:last-child {
        font-size: 16px;
        color: #5455dd;
        position: relative;
        bottom: 2px;
    }
`;

export const TOSBox = styled.div`
    width: 100%;
    padding: 16px;
    background-color: white;
    border: 1px solid #e8e8e8;
    color: black;
    font-size: 14px;
    max-height: 120px;
    overflow-y: scroll;
    margin-bottom: 24px;
    line-height: 20px;
`;

export const TOSLastLabel = styled.div`
    font-size: 14px;
    color: #282828;
    margin-bottom: 16px;

    & > span {
        text-decoration: underline;
    }
`;

export const TOSButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TOSButton = styled.button`
    width: calc(50% - 8px);
    height: 56px;
    color: white;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;

    &:first-child {
        background-color: #8E8E8E;

        &:hover {
            background-color: gray;
        }
    }
    &:last-child {
        background-color: #5455dd;

        &:hover {
            background-color: #3D3EBE;
        }
    }
`;

export const ErrMsg = styled.div`
    width: 100%;
    height: 24px;
    font-size: 14px;
    color: red;
    margin-bottom: 8px;
`;