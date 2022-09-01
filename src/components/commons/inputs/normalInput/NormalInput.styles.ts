import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormaInput=styled.input`
    width: 20%;
    border: 1px solid ${B.grayColor};
    border-radius: 0.1rem;
    font-size: ${B.deskTopFontSizeSmall}rem;
    padding: 0.1rem;
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