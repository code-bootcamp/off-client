// 여기는 ant.ui나 다른 타 라이브러리에서 가져온 컴포넌트의 css를 변경시키고싶을때 작성하는 곳입니다!!
import * as B from './basic'
import styled from '@emotion/styled'
import { Drawer } from 'antd';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper-bundle.css'



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

export const RowSwiper = styled(Swiper)`
    .swiper-container {
        width: 100%;
        /* padding-top: 50px;
        padding-bottom: 50px; */
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 3.4rem;
        height: fit-content;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: fit-content;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        .swiper-slide {
            width: 4.53rem;
        }
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        .swiper-slide {
            width: 5.44rem;
        }
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        .swiper-slide {
            width: 7rem;
        }
    }
    @media (max-width: ${B.mobile - 1}px) {
        .swiper-slide {
            width: 6rem;
        }
    }
`
export const ColSwiper = styled(Swiper)`
    width: 6rem;
    .swiper-container {
        width: 100%;
        /* padding-top: 50px;
        padding-bottom: 50px; */
    }

    .swiper-slide {
        background-position: left;
        background-size: cover;
        width: 5rem;
        height: fit-content;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: fit-content;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 8rem;
        .swiper-slide {
            width: 6.66rem;
            height: fit-content;
        }
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 9.8rem;
        .swiper-slide {
            width: 8rem;
            height: fit-content;
        }
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 12.63rem;
        .swiper-slide {
            width: 10.52rem;
            height: fit-content;
        }
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 16.55rem;
        .swiper-slide {
            width: 13.79rem;
            height: fit-content;
        }
    }
`

// export const ColSlider = styled(Slider)`
//     width: 8.75rem;
//     height: 6.25rem;
//     /* margin: 0.2rem; */
//     overflow: hidden;
//     div > img {
//         width: 3.75rem;
//         height: 4.75rem;
//     }
//     .slick-track{

//     }
//     .slick-list{
//         top: 10%;
//         /* width: fit-content; */
//         height: 100%;
//     }
//     .slide{
//         position: absolute;
//         transform: scale(0.8);
//         transition: transform  300ms;
//         /* opacity: 0.5 ; */

//     }
//     .slide.activeSlide{
//         position: absolute;
//         transform:  scale(1);
//         transition: transform 300ms;
//         /* opacity: 1; */
//         z-index: 10;
//     }
//     .slick-slide.slick-active.slick-current{

//     }
// `