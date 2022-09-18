import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"
import { Select } from "antd";

export const NormalSelectBox = styled(Select)`
    width: 100%;
    display: block!important;
    font-size: ${B.deskTopFontSizeMicro}rem!important;
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
    div.ant-select-selector {
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
        span {
            font-weight: bold!important;
            &.ant-select-selection-search {
                input {
                    display: block!important;
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
                }
            }
            &.ant-select-selection-item {
                line-height: 0.7rem!important;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    line-height: 1.1rem!important;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    line-height: 1.4rem!important;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    line-height: 1.7rem!important;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    line-height: 2.2rem!important;
                }
            }
            &.ant-select-selection-placeholder {
                color: ${B.lightGrayColor}!important;
                line-height: 0.7rem!important;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    line-height: 1.1rem!important;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    line-height: 1.4rem!important;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    line-height: 1.7rem!important;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    line-height: 2.2rem!important;
                }
            }
        }
    }
`