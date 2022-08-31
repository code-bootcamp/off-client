import { ReactNode } from "react";
import styled from '@emotion/styled'
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