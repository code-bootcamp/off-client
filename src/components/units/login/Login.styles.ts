import styled from "@emotion/styled";
import * as B from "../../../commons/styles/basic";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const Title = styled.h1`
    font-size: ${B.deskTopFontSizeLg}rem;
    color: ${B.blackColor};
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem;
    }
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        font-size: ${B.SmallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`


