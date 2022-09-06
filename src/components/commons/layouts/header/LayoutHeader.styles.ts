import styled from '@emotion/styled'
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons"
import * as B from '../../../../commons/styles/basic'


export const Header = styled.header`
    width: 100%;
    height: 1.3rem;
    position: fixed;
    background-color: ${B.whiteColor};
    box-shadow: 0px 8px 16px #0000000A;
    z-index: 999;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.6rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.8rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 2.1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.5rem;
    }
`

export const HeaderAlignBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 0.7rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0 0.8rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0 1rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0 1.5rem;
    }
`

export const LogoBox = styled.div`
   
`
export const Logo = styled.a`
    display: block;
    cursor: pointer;
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeMiddle}rem;
    font-weight: bold;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
    &:hover {
        color: ${B.mainColor};
    }
`

export const MenuBox = styled.div`

`

export const MenuIcon = styled(MenuOutlined)`
    display: block;
    font-size: ${B.deskTopFontSizeSmall}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`

export const MenuWrapper = styled.ul`

`

export const MenuItem = styled.li`
    font-size: ${B.deskTopFontSizeSmall}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem;
        margin-bottom: 0.7rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
        margin-bottom: 1rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeLg}rem;
        margin-bottom: 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
        margin-bottom: 1.3rem;
    }
    a {
        color: ${B.lightGrayColor};
        &:hover {
            color: ${B.mainColor};
        }
    }
`

export const LogoLink = styled(Link)`

`

export const MenuLink = styled(Link)`

`
