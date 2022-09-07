import { DatePicker, Space } from 'antd';
import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalDatePicker = styled(DatePicker)`
    width: 100%!important;
    border-radius: 8px!important;
    height: 0.7rem!important;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.1rem!important;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.4rem!important;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 1.7rem!important;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.2rem!important;
    }
    div.ant-picker-input {
        input {
            font-weight: bold!important;
            font-size: ${B.deskTopFontSizeMicro}rem!important;
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
        }
    }
`