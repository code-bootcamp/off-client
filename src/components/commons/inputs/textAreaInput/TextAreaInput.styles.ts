import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"
import { Input } from "antd";

const { TextArea } = Input


export const TextAreaInput = styled(TextArea)`
    display: block!important;
    width: 100%!important;
    background-color: ${B.whiteColor}!important;
    font-weight: bold!important;
    font-size: ${B.deskTopFontSizeMicro}rem!important;
    border-radius: 8px!important;
    &::placeholder{
        color: ${B.lightGrayColor}!important;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMicro}rem!important;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem!important;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem!important;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem!important;
    }
`