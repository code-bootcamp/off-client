import { ReactNode } from "react";
import styled from '@emotion/styled'
import * as B from '../../../commons/styles/basic'
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";

interface ILayoutProps {
    children: ReactNode;
}

const LayoutWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

const LayoutBody = styled.div`
    width: 100%;
    padding-top: 1.3rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding-top: 1.6rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding-top: 1.8rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding-top: 2.1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding-top: 2.5rem;
    }
`
const SHOW_FOOTER = ["/", "/info/login/", "/info/join/"]
export default function Layout(props: ILayoutProps) {
    const router = useRouter()
    // const isShowFooter = SHOW_FOOTER.includes(router.asPath)
    return (
        <LayoutWrapper>
            <LayoutHeader />
            <LayoutBody>
                { props.children }
            </LayoutBody>
            {/* { isShowFooter && <LayoutFooter/> } */}
        </LayoutWrapper>
    )
}