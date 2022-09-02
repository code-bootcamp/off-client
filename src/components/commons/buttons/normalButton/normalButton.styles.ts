import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalButton = styled.button`
    width: 100%;
    height: 5rem;
    border: none;
    border-radius: 20px;
    background-color: ${B.mainColor};
    padding: 0.1rem;
    font-size: ${B.deskTopFontSizeMiddle}rem;
    margin-bottom: 1.5rem;
    color: ${B.whiteColor};
    &:hover{
        color: ${B.mainColor};
        background-color: ${B.whiteColor};
        border: 1px solid ${B.mainColor};
        transition: 300ms;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.5rem;
        margin-bottom: 0.4rem;
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.7rem;
        margin-bottom: 0.48rem;
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 2rem;
        margin-bottom: 0.63rem;
        font-size: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.5rem;
        margin-bottom: 0.82rem;
        font-size: ${B.mobileFontSizeMiddle}rem;
    }
`
