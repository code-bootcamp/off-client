import styled from "@emotion/styled";
import { Row, Col } from "antd";
import Link from "next/link";
import * as B from "../../../../commons/styles/basic";

export const Wrapper = styled.div`
    width: 50%;
    margin: 2rem auto;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 55%;
        margin: 3.5rem auto;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 70%;
        margin: 5rem auto;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 80%;
        margin: 7rem auto;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 80%;
        margin: 9.5rem auto;
    }
`

export const Title = styled.h1`
    color: ${B.blackColor};
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMiddle}rem;
    text-align: start;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`

export const TitleInfo = styled.p`
    width: 100%;
    font-size: ${B.deskTopFontSizeMicro}rem;
    border-bottom: 2px solid ${B.mainColor};
    color: ${B.strongGrayColor};
    padding: 0.3rem 0;
    margin-bottom: 0.3rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMicro}rem;
        padding: 0.4rem 0;
        margin-bottom: 0.4rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem;
        padding: 0.5rem 0;
        margin-bottom: 0.5rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem;
        padding: 0.5rem 0;
        margin-bottom: 0.5rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem;
        padding: 0.5rem 0;
        margin-bottom: 0.5rem;
    }
`

export const Form = styled.form`
    width: 100%;
`

export const RowBox = styled.div`
    display: flex;
    align-self: flex-start;
    a{
        font-weight: bold;
        font-size: ${B.deskTopFontSizeMicro}rem;
        text-decoration: underline;
        color: ${B.mainColor};
        &:first-of-type{
            margin-right: 0.25rem;
        }
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: ${B.noteBookFontSizeMicro}rem;
            &:first-of-type{
            margin-right: 0.33rem;
        }
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: ${B.bigTabletFontSizeMicro}rem;
            &:first-of-type{
            margin-right: 0.4rem;
        }
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: ${B.smallTabletFontSizeMicro}rem;
            &:first-of-type{
            margin-right: 0.52rem;
        }
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: ${B.mobileFontSizeMicro}rem;
            &:first-of-type{
            margin-right: 0.69rem;
        }
        }
    }
`

export const HelpLink = styled(Link)`
`

export const FormRow = styled(Row)`
    
`

export const FormCol = styled(Col)`
    margin-bottom: 0.3rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        margin-bottom: 0.4rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        margin-bottom: 0.5rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.7rem;
    }
`