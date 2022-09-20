import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as B from "../../../../commons/styles/basic"

export const Footer = styled.footer`
    width: 100%;
    background-color: ${B.mainColor};
    color: ${B.whiteColor};
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div.align-box {
        width: 100%;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 3.5rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 3.5rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 4.3rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 6rem;
    }
`

export const FooterTop = styled.div`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid ${B.whiteColor};
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 70%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 80%;
    }
    p {
        &.main-title {
            font-weight: bold;
            font-size: 0.5rem;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.7rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.8rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.9rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 1.1rem;
            }
        }
        &.sub-title {
            font-size: 0.2rem;
            padding: 0.1rem 0 0.2rem 0;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: 0.3rem;
                padding: 0.2rem 0 0.3rem 0;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: 0.35rem;
                padding: 0.2rem 0 0.3rem 0;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: 0.35rem;
                padding: 0.2rem 0 0.4rem 0;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: 0.45rem;
                padding: 0.2rem 0 0.5rem 0;
            }
        }
    }
`

export const FooterBody = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 0.2rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding-top: 0.3rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding-top: 0.3rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding-top: 0.4rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding-top: 0.5rem;
    }
    p {
        padding: 0 0.15rem;
        font-size: 0.2rem;
        cursor: pointer;
        border-right: 1px solid ${B.whiteColor};
        &:last-of-type {
            border-right: none;
        }
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            padding: 0 0.2rem;
            font-size: 0.3rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            padding: 0 0.2rem;
            font-size: 0.3rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            padding: 0 0.2rem;
            font-size: 0.4rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            padding: 0 0.3rem;
            font-size: 0.5rem;
        }
    }
`

export const FooterBottom = styled.div`
    padding-top: 0.2rem;
    text-align: center;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding-top: 0.3rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding-top: 0.3rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding-top: 0.4rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding-top: 0.5rem;
    }
    p {
        font-size: 0.15rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 0.2rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 0.25rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 0.25rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 0.3rem;
        }
    }
`