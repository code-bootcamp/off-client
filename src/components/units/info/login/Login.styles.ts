import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic";

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const Title = styled.h1`
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeLg}rem;
    text-align: center;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem;
    }
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`

export const Form = styled.form`
    width: 100%;
`



