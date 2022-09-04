import styled from "@emotion/styled"
import * as B from "../../../../commons/styles/basic"

export const Wrapper = styled.div`
    width: 100%;
    background: ${B.whiteColor};
    box-shadow: 4px 10px 9px #00000014;
    border-radius: 20px;
`
export const ItemImage = styled.img`
    width: 100%;
    height: 50%;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    margin-bottom: 0.25rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
       margin-bottom: 0.33rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        margin-bottom: 0.4rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin-bottom: 0.52rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin-bottom: 0.69rem;
    }
`
export const ItemInfo = styled.p`
    padding: 0 0 0.2rem 0.2rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            padding: 0 0 0.26rem 0.26rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            padding: 0 0 0.32rem 0.32rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            padding: 0 0 0.42rem 0.42rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            padding: 0 0 0.54rem 0.54rem;
        }
    span{
            display: block;
            margin-bottom: 0.1rem;
            font-size: ${B.deskTopFontSizeMicro}rem;
            &:first-of-type{
                font-weight: bold;
            }
            &:last-of-type{
                color: ${B.mainColor};
            }
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            margin-bottom: 0.13rem;
            font-size: ${B.noteBookFontSizeMicro}rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            margin-bottom: 0.16rem;
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            margin-bottom: 0.21rem;
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            margin-bottom: 0.27rem;
            font-size: ${B.mobileFontSizeMicro}rem;
        }
    }
`