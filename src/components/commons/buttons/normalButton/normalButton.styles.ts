import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalButton = styled.button`
    width: 20%;
    border: none;
    border-radius: 0.1rem;
    background-color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeSmall}rem;
    padding: 0.1rem;
    color: ${B.whiteColor};
    &::placeholder {
        font-size:${B.deskTopFontSizeSmall}rem;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        font-size: ${B.SmallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMiddle}rem;
    }
`