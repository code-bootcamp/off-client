import styled from "@emotion/styled"
import Link from "next/link"
import * as B from "../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 50%;
    margin: 0 auto;
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
    margin: 2rem 0 0.2rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
        margin: 2.67rem 0 0.26rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMiddle}rem;
        margin: 3.2rem 0 0.32rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMiddle}rem;
        margin: 4.21rem 0 0.42rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMiddle}rem;
        margin: 5.51rem 0 0.55rem;
    }
`
export const TitleInfo = styled.p`
    width: 100%;
    font-size: ${B.deskTopFontSizeMicro}rem;
    border-bottom: 2px solid ${B.mainColor};
    color: ${B.strongGrayColor};
    padding: 0 0 0.2rem 0;
    margin: 0 0 0.5rem 0;
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
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RowBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 500;
    span {
        margin-right: 0.2rem;
        font-size: ${B.deskTopFontSizeMicro}rem;
        color: ${B.mainColor};
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            margin-right: 0.26rem;
            font-size: ${B.noteBookFontSizeMicro}rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            margin-right: 0.32rem;
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            margin-right: 0.42rem;
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            margin-right: 0.55rem;
            font-size: ${B.mobileFontSizeMicro}rem;
        }
    }
    a {
        font-size: ${B.deskTopFontSizeMicro}rem;
        text-decoration: underline;
        color: ${B.mainColor};
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
    };
    input {
        &:first-of-type{
            margin-right: 0.25rem;
        }
    }
    button{
        width: 20%;
        font-weight: 400;
    }
`

export const HelpLink = styled(Link)`
`