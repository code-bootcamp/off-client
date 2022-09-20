import styled from '@emotion/styled'
import * as B from '../../../../commons/styles/basic'
import { Row, Col, Modal } from 'antd';

export const WriteModal = styled(Modal)`
    width: 80%!important;
    top: 50vh!important;
    transform: translateY(-50vh)!important;
    padding-bottom: 0!important;
    margin: 1rem auto;
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        top: 50% !important;
    }
    @media (max-width: ${B.mobile - 1}px) {
        top: 50% !important;
    }
    div.ant-modal-content {
        box-shadow: 0px 21px 22px #00000026!important;
        border-radius: 20px!important;
        button.ant-modal-close {
            display: none!important;
        }
        div.ant-modal-header {
            border-radius: 20px!important;
            border-bottom: none!important;
            padding: 0.5rem 0.5rem 0 0.5rem!important;
            div.ant-modal-title {
                font-size: ${B.deskTopFontSizeSmall}rem!important;
                color: ${B.blackColor}!important;
                font-weight: bold!important;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    font-size: ${B.noteBookFontSizeSmall}rem!important;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: ${B.bigTabletFontSizeSmall}rem!important;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: ${B.smallTabletFontSizeSmall}rem!important;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: ${B.mobileFontSizeSmall}rem!important;
                }
            }
        }
        div.ant-modal-body {
            padding: 0.5rem 0.5rem!important;
        }
    }
`
export const AddressInput = styled.input`
    display: block!important;
    width: 100%!important;
    height: 0.7rem!important;
    background-color: ${B.whiteColor}!important;
    font-weight: bold!important;
    font-size: ${B.deskTopFontSizeMicro}rem!important;
    border: 1px solid ${B.lightGrayColor};
    border-radius: 8px!important;
    padding: 4px 11px;
    &:hover {
        border: 1px solid ${B.mainColor};
    }
    &:focus {
        outline: none;
        border: 1px solid ${B.mainColor};
    }
    &::placeholder{
        color: ${B.lightGrayColor}!important;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.1rem!important;
        font-size: ${B.noteBookFontSizeMicro}rem!important;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.4rem!important;
        font-size: ${B.bigTabletFontSizeMicro}rem!important;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 1.7rem!important;
        font-size: ${B.smallTabletFontSizeMicro}rem!important;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.2rem!important;
        font-size: ${B.mobileFontSizeMicro}rem!important;
    }
`

export const FormRow = styled(Row)`
    margin-bottom: 0.6rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0;
    }
`

export const FormCol = styled(Col)`
    .imageWrapper{
        display: flex;
        div, img{
            margin-right: 0.6rem;
        }
    }
    .address{
        input:not(:last-of-type), button{
            margin-bottom: 0.6rem;
        }
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.6rem;
    }
`