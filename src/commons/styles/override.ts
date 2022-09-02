// 여기는 ant.ui나 다른 타 라이브러리에서 가져온 컴포넌트의 css를 변경시키고싶을때 작성하는 곳입니다!!
import * as B from './basic'
import styled from '@emotion/styled'
import { Drawer } from 'antd';

export const MenuDrawer = styled(Drawer)`
    div.ant-drawer-content-wrapper {
        width: 40%!important;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            width: 50%!important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            width: 60%!important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            width: 70%!important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            width: 80%!important;
        }
        div.ant-drawer-content {
            background: linear-gradient(#58DBED, #A2F1F5)!important;
            border-radius: 30px 0 0 30px;
            div.ant-drawer-wrapper-body {
                div.ant-drawer-header {
                    border-bottom: none!important;
                    div.ant-drawer-header-title {
                        justify-content: flex-end!important;
                        button.ant-drawer-close {
                            color: ${B.whiteColor}!important;
                            font-size: ${B.deskTopFontSizeMiddle}rem!important;
                            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                                font-size: ${B.noteBookFontSizeMiddle}rem!important;
                            }
                            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                                font-size: ${B.bigTabletFontSizeMiddle}rem!important;
                            }
                            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                                font-size: ${B.smallTabletFontSizeMiddle}rem!important;
                            }
                            @media (max-width: ${B.mobile - 1}px) {
                                font-size: ${B.mobileFontSizeMiddle}rem!important;
                            }
                        }
                    }
                }
                div.ant-drawer-body {
                    padding: 3rem!important;
                    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                        padding: 0.5rem!important;
                    }
                    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                        padding: 0.8rem!important;
                    }
                    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                        padding: 1.2rem!important;
                    }
                    @media (max-width: ${B.mobile - 1}px) {
                        padding: 1.4rem!important;
                    }
                }
            }
        }
    }
`

