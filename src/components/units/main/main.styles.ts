import styled from "@emotion/styled";
import { Col, Row } from "antd";
import * as B from "../../../commons/styles/basic"

export const Main = styled.main`

`
export const MainRow = styled(Row)`
    /* border: 1px solid red; */
    background: linear-gradient(180deg, #ffffff, #F5F8FF);
    height: calc(100vh - 1.3rem);
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: calc(100vh - 1.6rem );
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 21.6rem
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 24.68rem
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 31.03rem
    }
`
export const MainCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border:  1px solid blue; */
`
export const MainTitleWrapper = styled.div`
    text-align: left;
    margin-right: 100px;
    z-index: 1;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 6.33rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        text-align: center;
        width: 7.6rem;
        margin: 0;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        text-align: center;
        width: 10rem;
        margin: 0;
    }
    @media (max-width: ${B.mobile - 1}px) {
        text-align: center;
        width: 13.1rem;
        margin: 0;
    }
    button{
        width: 100%;
        font-weight: 400;
        font-size: ${B.deskTopFontSizeMicro}rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            height: 0.9rem!important;
            font-size: ${B.noteBookFontSizeMicro}rem
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            height: 1.1rem!important;
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            height: 1.4rem!important;
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            height: 1.9rem!important;
            font-size: ${B.mobileFontSizeMicro}rem;
        }
    }
    `

export const MainTitle = styled.h1`
    font-size: ${B.deskTopFontSizeLg}rem;
    margin-bottom: 0.2rem;
    strong{
        font-weight: bold;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeLg}rem
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
export const SubTitle = styled.h2`
    font-size: ${B.deskTopFontSizeMiddle}rem;
    color: ${B.mainColor};
    margin-bottom: 0.4rem;
    b{
        font-weight: bold;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMiddle}rem
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMiddle}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMiddle}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMiddle}rem;
    }
    `
export const MainImgWrapper = styled.div`
    align-self: flex-end;
    position: relative;
    /* border: 1px solid violet; */
    margin-right: 250px;
    height: 655px;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 10.91rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 11.98rem;
        margin: 0;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 11.23rem;
        margin: 0;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 13.31rem;
        margin: 0;
    }
    `
export const Phone = styled.img`
    position: absolute;
    /* border: 1px solid black; */
    left: 15%;
    bottom: -5%;
    width: 603px;
    height: 799px;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 10.05rem;
        height: 12.31rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 11.04rem;
        height: 13.62rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 10.31rem;
        height: 12.68rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 12.2rem;
        height: 15.17rem;
    }
    `
export const Circle = styled.div`
    border-radius: 50%;
    width: 797px;
    height: 797px;
    /* border: 1px solid black; */
    background-color: #ffffff;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 13.28rem;
        height: 13.28rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 14.58rem;
        height: 14.58rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 13.65rem;
        height: 13.65rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 16.13rem;
        height: 16.13rem;
    }
    `
export const IntroRow = styled(Row)`
    #tc{
        height: 3rem;
        button{
            width: 5rem!important;
            height: 0.7rem!important;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                width: 6rem!important;
                height: 0.8rem!important;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                width: 9.4rem!important;
                height: 1rem!important;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                width: 11rem!important;
                height: 1.2rem!important;
            }
            @media (max-width: ${B.mobile - 1}px) {
                width: 12.63rem!important;
                height: 1.5rem!important;
            }
        }
    }
`
export const IntroCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    width: 5.7rem;
    height: 6.25rem;
    &:last-of-type{
        width: 6.6rem;
    }
    #s> span {
        display: block;
        font-weight: bold;
        font-size: ${B.deskTopFontSizeMiddle}rem;
        margin-bottom: 0.23rem;
        &:nth-of-type(2){
            color: ${B.mainColor};
            margin-bottom: 0.4rem;
        }
        &:nth-of-type(3){
            font-weight: 400;
            font-size: ${B.deskTopFontSizeSmall}rem;
            color: ${B.strongGrayColor};
            margin-bottom: 0.11rem;
        }
        &:last-of-type{
            font-weight: 400;
            font-size: ${B.deskTopFontSizeSmall}rem;
            color: ${B.strongGrayColor};
        }
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: ${B.noteBookFontSizeMiddle}rem;
            &:nth-of-type(2){
                font-size: ${B.noteBookFontSizeMiddle}rem;
            }
            &:nth-of-type(3){
                font-size: ${B.noteBookFontSizeSmall}rem;
            }
            &:last-of-type{
                font-size: ${B.noteBookFontSizeSmall}rem;
            }
        }

        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: ${B.bigTabletFontSizeMiddle}rem;
            &:nth-of-type(2){
                font-size: ${B.bigTabletFontSizeMiddle}rem;
            }
            &:nth-of-type(3){
                font-weight: 400;
                font-size: ${B.bigTabletFontSizeSmall}rem;

                margin-bottom: 0.11rem;
            }
            &:last-of-type{
            font-size: ${B.bigTabletFontSizeSmall}rem;
            }
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            text-align: center;
            font-size: ${B.smallTabletFontSizeMiddle}rem;
            &:nth-of-type(2){
                margin-bottom: 0.4rem;
            }
            &:nth-of-type(3){
                font-weight: 400;
                font-size: ${B.smallTabletFontSizeSmall}rem;

                margin-bottom: 0.11rem;
            }
            &:last-of-type{
            font-size: ${B.smallTabletFontSizeSmall}rem;
            }
        }
        @media (max-width: ${B.mobile - 1}px) {
            text-align: center;
            font-size: ${B.mobileFontSizeMiddle}rem;
            &:nth-of-type(2){
                color: ${B.mainColor};
                margin-bottom: 0.6rem;
            }
            &:nth-of-type(3){
                font-weight: 400;
                font-size: ${B.mobileFontSizeSmall}rem;
                color: ${B.strongGrayColor};
                margin-bottom: 0.11rem;
            }
            &:last-of-type{
            font-size: ${B.mobileFontSizeSmall}rem;
            }
        }

    }
    #t> span {
            display: block;
            font-size: ${B.deskTopFontSizeMiddle}rem;
            color: ${B.whiteColor};
            &:first-of-type{
                font-weight: bold;
                margin-bottom: 0.2rem;
            }
            &:nth-of-type(2){
                margin-bottom: 0.5rem;
                color: ${B.whiteColor};
            }
            &:last-of-type{
                font-size: ${B.deskTopFontSizeSmall}rem;
                color: ${B.strongGrayColor};
            }
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: ${B.noteBookFontSizeMiddle}rem;
                &:last-of-type{
                font-size: ${B.noteBookFontSizeSmall}rem;
                }
            }

            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                text-align: center;
                font-size: ${B.bigTabletFontSizeMiddle}rem;
                &:last-of-type{
                font-size: ${B.bigTabletFontSizeSmall}rem;
                }
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                text-align: center;
                font-size: ${B.smallTabletFontSizeMiddle}rem;
                &:last-of-type{
                font-size: ${B.smallTabletFontSizeSmall}rem;
                }
            }
            @media (max-width: ${B.mobile - 1}px) {
                text-align: center;
                font-size: ${B.mobileFontSizeMiddle}rem;
                &:last-of-type{
                font-size: ${B.mobileFontSizeSmall}rem;
                }
            }
    }
`
export const Introduce1 = styled.section`
    /* border: 1px solid red; */
    position: absolute;
    top: 100vh;
    padding: 2rem 0;
    width: 100%;
    background-color: #F9F9F9;
    text-align: center;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        top: 100vh;
        padding: 2rem 0;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        top: calc(21.6rem + 1.8rem);
        padding: 1.6rem 0;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        top: calc(24.68rem + 2.1rem);
        padding: 1.89rem 0;
    }
    @media (max-width: ${B.mobile - 1}px) {
        top: calc(31.03rem + 2.5rem);
        padding: 2.2rem 0;
    }
    span{
        display: block;
        color: ${B.strongGrayColor};
        &:nth-of-type(1){
            font-size: ${B.deskTopFontSizeSmall}rem;
            margin-bottom: 0.15rem;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: ${B.noteBookFontSizeSmall}rem;
                margin-bottom: 0.2rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: ${B.bigTabletFontSizeSmall}rem;
                margin-bottom: 0.24rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: ${B.smallTabletFontSizeSmall}rem;
                margin-bottom: 0.31rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: ${B.mobileFontSizeSmall}rem;
                margin-bottom: 0.41rem;
            }
        }
        &:nth-of-type(2){
            font-size: ${B.deskTopFontSizeSmall}rem;
            margin-bottom: 0.3rem;
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: ${B.noteBookFontSizeSmall}rem;
                margin-bottom: 0.4rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: ${B.bigTabletFontSizeSmall}rem;
                margin-bottom: 0.48rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: ${B.smallTabletFontSizeSmall}rem;
                margin-bottom: 0.63rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: ${B.mobileFontSizeSmall}rem;
                margin-bottom: 0.82rem;
            }
        }
        &:last-of-type{
            color: ${B.blackColor};
            font-size: ${B.deskTopFontSizeMiddle}rem;
            strong{
                font-weight: bold;
                color: ${B.mainColor};
            }
            @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                font-size: ${B.noteBookFontSizeMiddle}rem;
            }
            @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                font-size: ${B.bigTabletFontSizeMiddle}rem;
            }
            @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                font-size: ${B.smallTabletFontSizeMiddle}rem;
            }
            @media (max-width: ${B.mobile - 1}px) {
                font-size: ${B.mobileFontSizeMiddle}rem;
            }
        }
    }
`
export const Introduce2 = styled.section`
    position: absolute;
    top: calc(100vh + 5.9rem);
    padding: 1rem;
    background-color: ${B.whiteColor};
    /* border: 1px solid red; */
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        top: calc(100vh + 6.34rem);
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        top: calc(21.6rem + 7.6rem);
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        top: calc(24.68rem + 9.04rem);
    }
    @media (max-width: ${B.mobile - 1}px) {
        top: calc(31.03rem + 10.59rem);
    }
`
export const Introduce3 = styled.section`
    position: absolute;
    top: calc(100vh + 22.77rem);
    width: 100%;
    padding: 1rem;
    background-color: ${B.blackColor};
    border: 1px solid violet;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        top: calc(100vh + 23.4rem);
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        top: calc(21.6rem + 24.75rem);
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        top: calc(24.68rem + 42.45rem);
    }
    @media (max-width: ${B.mobile - 1}px) {
        top: calc(31.03rem + 46rem);
    }
    span{

    }
`