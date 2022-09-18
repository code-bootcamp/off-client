import styled from "@emotion/styled"
import { Row, Col } from "antd";
import * as B from "../../../../commons/styles/basic"


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
    &.is-margin {
        margin-bottom: 0.5rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.6rem;
    }
`