import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalInput = styled.input`
    width: 100%;
    height: 5rem;
    border-radius: 20px;
    padding-left: 1rem;
    border: 1px solid ${B.grayColor}!important;
    background-color: ${B.whiteColor};
    font-size: ${B.deskTopFontSizeMiddle}rem;
    outline: none;
    margin-bottom: 2.5rem;
    &::placeholder {
        color: ${B.grayColor}!important;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.5rem;
        padding-left: 0.26rem;
        margin-bottom: 0.66rem;
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.7rem;
        padding-left: 0.32rem;
        margin-bottom: 0.8rem;
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 2rem;
        padding-left: 0.42rem;
        margin-bottom: 1.05rem;
        font-size: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.5rem;
        padding-left: 0.55rem;
        margin-bottom: 1.37rem;
        font-size: ${B.mobileFontSizeMiddle}rem;
    }
`