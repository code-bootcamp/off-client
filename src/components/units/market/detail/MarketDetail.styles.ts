import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"
import { Col, Row } from "antd";
import Slider from "react-slick";

export const Wrapper = styled.div`
    padding: 1rem  2rem;
    /* overflow: hidden; */
    .header{
        padding-bottom: 0.2rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid ${B.mainColor};
        .user{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 50%;
            .time{
                margin-left: 0.2rem;
                color: ${B.strongGrayColor};
            }
        }
        div> div{
            font-size: ${B.deskTopFontSizeMicro}rem;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: ${B.noteBookFontSizeMicro}rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: ${B.bigTabletFontSizeMicro}rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: ${B.smallTabletFontSizeMicro}rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: ${B.mobileFontSizeMicro}rem;
            }
        }
        .tool{
            display: flex;
            justify-content: flex-end;
            svg {
                margin-left: 0.2rem;
                font-size: 0.3rem;
                cursor: pointer;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.4rem;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: 0.48rem;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: 0.63rem;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: 0.82rem;
                }
            }
        }
    }
`
export const FormRow = styled(Row)`
`
export const FormCol = styled(Col)`
    label{
        display: block;
        font-size: ${B.deskTopFontSizeMicro}rem;
        color: ${B.strongGrayColor};
        margin-bottom: 0.1rem;
    }
    span{
        display: block;
        font-size: ${B.deskTopFontSizeSmall}rem;
        color: ${B.mainColor};
    }
    p{
        font-size: ${B.deskTopFontSizeSmall}rem;
    }
    div.infoWrapper{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: start;
        div{
            margin-bottom: 0.2rem;
        }
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        label{
        font-size: ${B.noteBookFontSizeMicro}rem;
        }
        span{
            font-size: ${B.noteBookFontSizeSmall}rem;
        }
        p{
            font-size: ${B.noteBookFontSizeSmall}rem;
        }
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        label{
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        span{
            font-size: ${B.bigTabletFontSizeSmall}rem;
        }
        p{
            font-size: ${B.bigTabletFontSizeSmall}rem;
        }
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        label{
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        span{
            font-size: ${B.smallTabletFontSizeSmall}rem;
        }
        p{
            font-size: ${B.smallTabletFontSizeSmall}rem;
        }
        }
    @media (max-width: ${B.mobile - 1}px) {
        label{
            font-size: ${B.mobileFontSizeMicro}rem;
        }
        span{
            font-size: ${B.mobileFontSizeSmall}rem;
        }
        p{
            font-size: ${B.mobileFontSizeSmall}rem;
        }
    }
`
export const Thumb = styled.img`
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 50%;
    margin-right: 0.3rem;
    object-fit: cover;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 0.83rem;
        height: 0.83rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 1rem;
        height: 1rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 1.31rem;
        height: 1.31rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 1.72rem;
        height: 1.72rem;
    }
`
