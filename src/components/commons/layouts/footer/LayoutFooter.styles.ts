import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as B from "../../../../commons/styles/basic"

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 1.6rem; */
    padding: 50px 20px;
    background-color: #1290ff;
    font-size: ${B.deskTopFontSizeMicro}rem;
    color: ${B.whiteColor};
    @media (max-width: ${B.mobile - 1}px) {
        padding: 1.72rem 0.69rem;
    }
    #logo{
        font-weight: bold;
        font-size: 50px;
        margin-bottom: 20px;
    }
    #copyright{
        font-size: 12px;
    }
    #corp_area{
        margin-bottom: 10px;
        a{
            font-size: 17px;
            color: ${B.whiteColor};
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.58rem;
            }
            &:not(:first-of-type)::before{
                content: "";
                display: inline-block;
                width: 1px;
                height: 14px;
                margin: 0 8px;
                vertical-align: -1px;
                background-color: white;
                @media (max-width: ${B.mobile - 1}px) {
                    height: 0.48rem;
                    vertical-align: -0.03rem;
                }
            }
        }
    }
`
export const FooterRow = styled(Row)`
    width: 100%;
`
export const FooterCol = styled(Col)`

`