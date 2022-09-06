import { DatePicker, Space } from 'antd';
import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"

export const NormalDatePicker = styled(DatePicker)`
    width: 100%!important;
    div.ant-picker-input {
        border-radius: 10px!important;
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