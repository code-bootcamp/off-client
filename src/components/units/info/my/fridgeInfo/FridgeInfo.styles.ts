import styled from "@emotion/styled";
import * as B from "../../../../../commons/styles/basic"
export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto 1rem;
    /* border: 1px solid black; */
    border-radius: 20px;
    padding: 0.5rem;
    box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.3);
    font-size: ${B.deskTopFontSizeMiddle}rem;
    /* @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
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
    } */
`