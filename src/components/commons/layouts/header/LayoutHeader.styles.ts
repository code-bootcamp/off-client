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
        
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        
    }
    @media (max-width: ${B.mobile - 1}px) {
        
    }
`

export const HeaderAlignBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 0.7rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
       
    }
    @media (max-width: ${B.mobile - 1}px) {
        
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
        
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        
    }
    @media (max-width: ${B.mobile - 1}px) {
        
    }
`

export const MenuBox = styled.div`

`

export const MenuIcon = styled(MenuOutlined)`
    display: block;
    font-size: ${B.deskTopFontSizeMiddle}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        
    }
    @media (max-width: ${B.mobile - 1}px) {
        
    }
`

export const MenuWrapper = styled.ul`

`

export const MenuItem = styled.li`
    
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
       
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
       
    }
    @media (max-width: ${B.mobile - 1}px) {
        
    }
`

export const LogoLink = styled(Link)`
`

export const MenuLink = styled(Link)`

`
