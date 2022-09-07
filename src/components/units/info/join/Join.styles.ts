import styled from "@emotion/styled"
import { Row, Col } from "antd";

import Link from "next/link"
import * as B from "../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 1rem 0;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
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
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMiddle}rem;
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

export const HelpLink = styled(Link)`
`

export const FormRow = styled(Row)`
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

export const FormCol = styled(Col)`
    
`