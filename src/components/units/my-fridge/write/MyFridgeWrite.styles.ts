import styled from '@emotion/styled'
import * as B from '../../../../commons/styles/basic'
import { Row, Col, Modal } from 'antd';

export const WriteModal = styled(Modal)`
    width: 80%!important;
    top: 50%!important;
    transform: translateY(-50%)!important;
    padding-bottom: 0!important;
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

export const FormRow = styled(Row)`
    margin-bottom: 0.5rem;
    &.margin-reset {
        margin-bottom: 0!important;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0;
    }
`

export const FormCol = styled(Col)`
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.6rem;
    }
`