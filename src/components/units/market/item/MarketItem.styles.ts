import styled from "@emotion/styled"
import * as B from "../../../../commons/styles/basic"
import { Badge } from 'antd';

export const Wrapper = styled.div`
    width: 100%;
    background: ${B.whiteColor};
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3);
    border-radius: 20px;
    cursor: pointer;
    .imageWrapper{
        width: 100%;
        height: 3rem;
        border-radius: 20px 20px 0 0;
        margin-bottom: 0.25rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            height: 3.5rem;
            margin-bottom: 0.33rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            height: 4rem;
            margin-bottom: 0.4rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            height: 7rem;
            margin-bottom: 0.52rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            height: 12rem;
            margin-bottom: 0.69rem;
        }
        .noimage{
            object-fit: contain;
            /* width: 100%;
            height: 80%;
            margin-bottom: 0;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                height: 100%;
                margin-bottom: 0rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                height: 100%;
                margin-bottom: 0rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                height: 100%;
                margin-bottom: 0rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                height: 100%;
                margin-bottom: 0rem;
            } */
        }
    }
`

export const ItemImage = styled.img`
    width: 100%;
    height: 3rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    margin-bottom: 0.25rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 3.5rem;
        margin-bottom: 0.33rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 4rem;
        margin-bottom: 0.4rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 7rem;
        margin-bottom: 0.52rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 12rem;
        margin-bottom: 0.69rem;
    }
`

export const ItemInfo = styled.div`
    padding: 0 0 0.2rem 0.2rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0 0 0.26rem 0.26rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0 0 0.32rem 0.32rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0 0 0.42rem 0.42rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0 0 0.54rem 0.54rem;
    }
    div.info-icon-box {
        display: flex;
        align-items: center;
        svg {
            font-size: 0.3rem;
            margin-right: 0.15rem;
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.5rem;
                margin-right: 0.15rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.7rem;
                margin-right: 0.15rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 1.1rem;
                margin-right: 0.3rem;
            }
        }
        p {
            font-size: 0.3rem;
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.5rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.7rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 1.1rem;
            }
        }
    }
    p {
        &.title {
            font-size: 0.35rem;
            margin: 0.2rem 0;
            font-weight: bold;
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.45rem;
                margin: 0.3rem 0;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.6rem;
                margin: 0.3rem 0;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 1rem;
                margin: 0.6rem 0;
            }
        }
        &.expDate {
            font-size: 0.3rem;
            color: ${B.redColor};
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.4rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.5rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.7rem;
            }
        }
    }
`

export const BadgeRibbon = styled(Badge.Ribbon)`
    font-size: 0!important;
    height: 0!important;
    line-height: 0!important;
    padding: 0.2rem 8px;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.25rem 8px;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.35rem 8px;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0.5rem 8px;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0.7rem 8px;
    }
    span.ant-ribbon-text {
        font-size: 0.25rem!important;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.3rem!important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.4rem!important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.6rem!important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.8rem!important;
        }
    }
`