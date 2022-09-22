import styled from '@emotion/styled'
import * as B from '../../../../commons/styles/basic'
import { Row, Col, Modal, Alert, Badge } from 'antd';
import { MyFridgeListItemIsAlarmProps } from './MyFridgeList.types';


export const Wrapper = styled.div`
    width: 80%;
    margin: 0.8rem auto;
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
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: 0.9rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: 1rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`

export const ListWrapper = styled.div`
    width: 100%;
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3);
    border-radius: 20px;
    padding: 0.3rem;
    ul, li {
        list-style: none;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 1.5rem;
    }
`

export const ListBody = styled.ul`
    width: 100%;
    list-style: none;
`

export const SubTitle = styled.h2`
    font-size: ${B.deskTopFontSizeSmall}rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${B.mainColor};
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeSmall}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeSmall}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeSmall}rem;
    }
`

export const ListItem = styled.li`
    list-style: none;
    box-shadow: 4px 10px 9px #00000014;
    border-radius: 20px;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.3rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.35rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0.75rem;
    }
`

export const ListItemHeader = styled.div`
    width: 100%;
    margin-bottom: 0.2rem;
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.4rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.5rem;
    }
    div {
        display: flex;
        align-items: center;
        &.category-box {
            span {
                font-size: 0.25rem;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    font-size: 0.3rem;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: 0.3rem;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: 0.6rem;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: 0.7rem;
                }
            }
            svg {
                font-size: 0.3rem;
                margin-right: 0.15rem;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    font-size: 0.4rem;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: 0.45rem;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: 0.75rem;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: 0.9rem;
                }
            }
        }
    }
    span, svg {
        display: block;
    }
`

export const ListItemContent = styled.div`
    p {
        font-size: 0.3rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.35rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.35rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
    }
    div.content-flex {
        display: flex;
        justify-content: space-between;
        p.expDate {
            font-size: 0.2rem;
            color: ${B.redColor};
            margin-bottom: 0!important;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.3rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.25rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.5rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.6rem;
            }
        }
        div.btn-box {
            display: flex;
            svg {
                display: block;
                font-size: 0.2rem;
                color: ${B.lightGrayColor};
                margin-left: 0.2rem;
                cursor: pointer;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    font-size: 0.25rem;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: 0.3rem;
                    margin-left: 0.3rem;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: 0.5rem;
                    margin-left: 0.5rem;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: 0.6rem;
                    margin-left: 0.6rem;
                }
            }
        }
    }
`

export const ListAddBtn = styled.button`
    width: 100%;
    height: 1.6rem;
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeMicro}rem;
    font-weight: bold;
    background-color: ${B.whiteColor};
    border: 2px dashed ${B.mainColor};
    border-radius: 20px;
    box-shadow: 4px 10px 9px #00000014;
    /* box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3); */
    cursor: pointer;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMicro}rem;
        height: 2rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem;
        height: 2rem;
        margin-bottom: 0.3rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 0.5rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 0.5rem;
    }
`

export const WriteModal = styled(Modal)`
    width: 80%!important;
    top: 50%!important;
    transform: translateY(-50%)!important;
    padding-bottom: 0!important;
    div.ant-modal-content {
        box-shadow: 0px 21px 22px #00000026!important;
        /* box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3); */
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

export const InfoAlert = styled(Alert)`
    border-radius: 15px!important;
    margin-bottom: 0.8rem!important;
    display: flex!important;
    align-items: center!important;
    padding: 15px!important;
    span.anticon {
        display: block;
        font-size: 0.5rem!important;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.7rem!important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.7rem!important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.8rem!important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.9rem!important;
        }
    }
    div.ant-alert-content {
        div.ant-alert-message {
            font-size: 0.2rem!important;
            color: ${B.mainColor}!important;
            font-weight: bold!important;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.3rem!important;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.3rem!important;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.4rem!important;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.5rem!important;
            }
        }
    }
`

export const BadgeRibbon = styled(Badge.Ribbon)`
    display: ${(props: MyFridgeListItemIsAlarmProps) => props.isAlarm ? "block" : "none"};
    font-size: 0!important;
    height: 0!important;
    line-height: 0!important;
    padding: 0.15rem 8px;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.25rem 8px;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.25rem 8px;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0.35rem 8px;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0.45rem 8px;
    }
    span.ant-ribbon-text {
        font-size: 0.2rem!important;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.25rem!important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.25rem!important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.4rem!important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.5rem!important;
        }
    }
`