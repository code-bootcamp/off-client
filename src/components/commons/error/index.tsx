import styled from "@emotion/styled";
import * as B from "../../../commons/styles/basic";


interface ErrorProps {
    message: any
}

const ErrorMessage = styled.p`
    color: ${B.redColor};
    font-size: 0.2rem;
    padding-top: 10px;
    padding-left: 12px;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: 0.25rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: 0.3rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: 0.4rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: 0.5rem;
    }
`

export default function Error(props: ErrorProps) {
    return (
        <ErrorMessage>
            { props.message }
        </ErrorMessage>
    )
}
