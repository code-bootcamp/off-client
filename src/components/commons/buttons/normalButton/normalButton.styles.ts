import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalButton = styled.button`
    width: 100%;
    border: 1px solid ${B.mainColor};
    border-radius: 8px;
    background-color: ${B.mainColor};
    padding: 0.2rem 0;
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMicro}rem;
    margin-bottom: 0.3rem;
    color: ${B.whiteColor};
    cursor: pointer;
    &:hover{
        color: ${B.mainColor};
        background-color: ${B.whiteColor} ;
        transition: 290ms;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.26rem 0;
        margin-bottom: 0.4rem;
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.32rem 0;
        margin-bottom: 0.48rem;
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0.42rem 0;
        margin-bottom: 0.63rem;
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0.55rem 0;
        margin-bottom: 0.82rem;
        font-size: ${B.mobileFontSizeMicro}rem;
    }
`
