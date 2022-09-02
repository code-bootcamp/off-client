import styled from "@emotion/styled"
import Link from "next/link"
import * as B from "../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    /* @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 40%;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 50%;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 50%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 80%;
    } */
`

export const Title = styled.h1`
    color: ${B.blackColor};
    font-weight: bold;
    font-size: ${B.deskTopFontSizeLg}rem;
    text-align: center;
    margin: 6rem 0 3rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem;
        margin: 1.6rem 0 0.8rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
        margin: 1.92rem 0 0.96rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
        margin: 2.52rem 0 1.26rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
        margin: 3.31rem 0 1.65rem;
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
    span {
        color: ${B.blackColor};
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.26rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.32rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.42rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.55rem;
        }
    }
    a {
        color: ${B.blackColor};
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.26rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.32rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.42rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.55rem;
        }
    };
    input {
        &:first-of-type{
            margin-right: 1rem;
        }
    }
    button{
        width: 20%;
    }
`

export const HelpLink = styled(Link)`
`
export const ColLine = styled.div`
    width: 0;
    height: ${B.deskTopFontSizeMiddle}rem;
    border: 1px solid ${B.blackColor};
    margin-left: ${B.deskTopFontSizeMiddle}rem;
    margin-right: ${B.deskTopFontSizeMiddle}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        margin-left: ${B.noteBookFontSizeMiddle}rem;
        margin-right: ${B.noteBookFontSizeMiddle}rem;
        height: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        margin-left: ${B.bigTabletFontSizeMiddle}rem;
        margin-right: ${B.bigTabletFontSizeMiddle}rem;
        height: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-left: ${B.smallTabletFontSizeMiddle}rem;
        margin-right: ${B.smallTabletFontSizeMiddle}rem;
        height: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-left: ${B.mobileFontSizeMiddle}rem;
        margin-right: ${B.mobileFontSizeMiddle}rem;
        height: ${B.mobileFontSizeMiddle}rem;
    }
`