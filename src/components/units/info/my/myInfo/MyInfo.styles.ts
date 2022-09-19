import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as B from "../../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto 1rem;
    border-radius: 20px;
    padding: 0.5rem;
    box-shadow: 0px 0px 10px -2px ${B.mainColor};
    font-size: ${B.deskTopFontSizeMiddle}rem;
`
export const InfoRow = styled(Row)`
    &:first-of-type{
        /* padding: 0.2rem; */
        /* border: 1px solid black; */
        /* border-radius: 20px; */
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
export const InfoCol = styled(Col)`
    div {
        display: flex;
        justify-content: space-between;
        button {
            width: 20%;
        }
    }
    p {
        font-size: 0.2rem;
        padding: 0 0 0.2rem !important;
    }
    .ant-input {
        height: 0.56rem !important;
        border: none;
        border-bottom: 1px solid ${B.lightGrayColor};
        border-radius: 0px !important;
        margin-bottom: 0.2rem;
        &:focus{
            border-bottom: 1px solid ${B.mainColor};
            box-shadow: none;
        }
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            height: 0.75rem !important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            height: 0.9rem !important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            height: 1.18rem !important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            height: 1.55rem !important;
        }
    }
    &:first-of-type{
        display: flex;
        justify-content: center;

    }
    &:last-of-type{
        div{
            display: flex;
            flex-direction: column;
        }
        span {
            display: block;
            &:first-of-type{
                font-size: ${B.deskTopFontSizeMicro}rem;
                color: ${B.mainColor};
            }
            &:last-of-type{
                line-height: 90%;
                margin-bottom: 0.2rem;
            }
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                &:first-of-type{
                    font-size: ${B.noteBookFontSizeMicro}rem;
                }
                &:last-of-type{

                }
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                &:first-of-type{
                    text-align: center;
                    font-size: ${B.bigTabletFontSizeMicro}rem;
                }
                &:last-of-type{
                    text-align: center;
                }
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                &:first-of-type{
                    text-align: center;
                    font-size: ${B.smallTabletFontSizeMicro}rem;
                }
                &:last-of-type{
                    text-align: center;
                }
            }
            @media (max-width: ${B.mobile - 1}px) {
                &:first-of-type{
                    text-align: center;
                    font-size: ${B.mobileFontSizeMicro}rem;
                }
                &:last-of-type{
                    text-align: center;
                }
            }
        }
    }
`
export const UserThumb = styled.div`
    align-self: center;
    img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${B.mainColor};
        box-shadow: 0.06rem 0.04rem 0.08rem 0.03rem rgba(0,0,0,0.3);
        /* object-fit: cover; */
    }
`