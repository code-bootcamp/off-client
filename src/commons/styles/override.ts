// 여기는 ant.ui나 다른 타 라이브러리에서 가져온 컴포넌트의 css를 변경시키고싶을때 작성하는 곳입니다!!
import * as B from './basic'
import styled from '@emotion/styled'
import { Drawer, Popover, Tabs } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





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
            box-shadow: -6px 0px 23px #00000029;
            div.ant-drawer-wrapper-body {
                div.ant-drawer-header {
                    border-bottom: none!important;
                    div.ant-drawer-header-title {
                        justify-content: flex-end!important;
                        button.ant-drawer-close {
                            color: ${B.lightGrayColor}!important;
                            font-size: ${B.deskTopFontSizeMiddle}rem!important;
                            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                                font-size: ${B.noteBookFontSizeMiddle}rem!important;
                            }
                            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                                font-size: ${B.bigTabletFontSizeLg}rem!important;
                            }
                            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                                font-size: ${B.smallTabletFontSizeLg}rem!important;
                            }
                            @media (max-width: ${B.mobile - 1}px) {
                                font-size: ${B.mobileFontSizeLg}rem!important;
                            }
                        }
                    }
                }
                div.ant-drawer-body {
                    padding: 0.5rem;
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
export const MyPageTab = styled(Tabs)`
    .ant-tabs-tab-btn{
        font-weight: bold;
        font-size: ${B.deskTopFontSizeSmall}rem;
        color: ${B.strongGrayColor};
    }
    .ant-tabs-nav{
        box-shadow: 10px 0 10px -10px rgba(0,0,0,0.1);
        margin-bottom: 50px !important;
    }

`
export const TabItem = styled(Tabs.TabPane)`

`
export const ItemSlider = styled(Slider)`
    width: 100%;
    height: 100%;
    .slick-dots li button:before
    {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;

        position: absolute;
        top: 0;
        left: 0;

        width: 20px;
        height: 20px;

        content: '•';
        text-align: center;

        opacity: .25;
        color: white;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before
    {
        opacity: .75;
        color: white;
    }
    .slick-slide
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`
