import styled from '@emotion/styled'
import * as B from '../../../../commons/styles/basic'
import { Row, Col, Modal } from 'antd';

export const Wrapper = styled.div`
    width: 80%;
    margin: 1.5rem auto 1.5rem auto;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 90%;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 90%;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 90%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 90%;
    }
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMiddle};
    margin-bottom: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMiddle}rem;
    }
`

export const ListWrapper = styled.div`
    width: 100%;
`

export const ListBody = styled.ul`
    width: 100%;
`

export const SubTitle = styled.h2`
    font-size: ${B.deskTopFontSizeSmall}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeSmall}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeSmall}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeSmall}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeSmall}rem;
    }
`

export const ListItem = styled.li`
    display: flex;
    box-shadow: 4px 10px 9px #00000014;
    border-radius: 20px;
    margin-bottom: 0.5rem;
`

export const ListImgBox = styled.div`
    img {
        border-radius: 20px 0 0 20px;
    }
`

export const ListInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0.15rem 0;
    p {
        font-size: ${B.deskTopFontSizeMicro}rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: ${B.noteBookFontSizeMicro}rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: ${B.mobileFontSizeMicro}rem;
        }
        &.category {
            font-weight: bold;
            padding-bottom: 0.1rem;
        }
        &.expiryDate {
            color: ${B.mainColor};
        }
    }
`

export const ListAddBtn = styled.button`
    width: 100%;
    height: 2.3rem;
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeMicro}rem;
    font-weight: bold;
    background-color: ${B.whiteColor};
    border: 2px dashed ${B.mainColor};
    border-radius: 20px;
    box-shadow: 4px 10px 9px #00000014;
    cursor: pointer;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMicro}rem;
        height: 2.5rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem;
        height: 4rem;
        margin-bottom: 2rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 2rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 2rem;
    }
`

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