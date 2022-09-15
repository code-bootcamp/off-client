import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as B from "../../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    font-size: ${B.deskTopFontSizeMiddle}rem;
    /* @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 58%;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 70%;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 90%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 91%;
    } */
`
export const InfoRow = styled(Row)`
`
export const InfoCol = styled(Col)`
    &:first-of-type{
        display: flex;
        justify-content: center;
    }
    div {
        display: flex;
        justify-content: space-between;
        button {
            width: 20%;
        }
    }
    .ant-input {
        border: none;
        border-bottom: 1px solid ${B.lightGrayColor};
        border-radius: 0px !important;
        &:focus{
            border-bottom: 1px solid ${B.mainColor};
            box-shadow: none;
        }
    }

    span {
            display: block;
    }
    svg {
            font-size: 0.2rem;
            color: ${B.lightGrayColor};
            margin-left: 0.2rem;
            cursor: pointer;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.25rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.3rem;
                margin-left: 0.3rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.5rem;
                margin-left: 0.5rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.6rem;
                margin-left: 0.6rem;
            }
    }
`
export const UserThumb = styled.div`
    img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${B.mainColor};
        /* object-fit: cover; */
    }
`