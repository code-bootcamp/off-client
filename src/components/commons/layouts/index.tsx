import { ReactNode } from "react";
import styled from '@emotion/styled'
import * as B from '../../../commons/styles/basic'
import LayoutHeader from "./header/LayoutHeader.container";

interface ILayoutProps {
    children: ReactNode;
}

const LayoutWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

const LayoutBody = styled.div`
    width: 100%;
    padding-top: 1.12rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding-top: 1.5rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding-top: 1.7rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding-top: 2.2rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding-top: 3rem;
    }
`

export default function Layout(props: ILayoutProps) {
    return (
        <LayoutWrapper>
            <LayoutHeader />
            <LayoutBody>
                { props.children }
            </LayoutBody>
        </LayoutWrapper>
    )
}