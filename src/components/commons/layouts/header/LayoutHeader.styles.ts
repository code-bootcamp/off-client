import styled from '@emotion/styled'
import { MenuOutlined } from "@ant-design/icons"
import * as B from '../../../../commons/styles/basic'


export const Header = styled.header`
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid ${B.blackColor};
    position: fixed;
    z-index: 999;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.5rem;
    } 
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.7rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        height: 2.2rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 3rem;
    }
`

export const HeaderAlignBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;
    height: 100%;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        
    } 
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0 0.8rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        padding: 0 1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0 1rem;
    }
`

export const Logo = styled.a`
    cursor: pointer;
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeLg}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem;
    } 
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        font-size: ${B.SmallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`

export const MenuBox = styled.div`

`

export const MenuIcon = styled(MenuOutlined)`
    font-size: ${B.deskTopFontSizeLg}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem;
    } 
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeLg}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
        font-size: ${B.SmallTabletFontSizeLg}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeLg}rem;
    }
`
