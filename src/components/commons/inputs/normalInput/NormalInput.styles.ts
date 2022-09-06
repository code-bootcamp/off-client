import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid ${B.lightGrayColor};
    padding-bottom: 0.1rem;
    background-color: ${B.whiteColor};
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMicro}rem;
    outline: none;
    &::placeholder{
        color: ${B.lightGrayColor};
    }

    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding-bottom: 0.13rem;
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding-bottom: 0.16rem;
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding-bottom: 0.21rem;
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding-bottom: 0.27rem;
        font-size: ${B.mobileFontSizeMicro}rem;
    }
`