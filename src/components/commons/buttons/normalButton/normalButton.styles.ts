import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"
import { INormalButtonStylesProps } from "./normalButton.types";

export const NormalButton = styled.button`
    width: 100%;
    border: 1px solid
        ${(props:INormalButtonStylesProps)=>{
        if(props.color==="blue"){
            return B.mainColor
        } else if(props.color==="red"){
            return B.redColor
        } else if(props.color==="gray"){
            return B.strongGrayColor
        }
    }};
    border-radius: 8px;
    background-color: ${(props:INormalButtonStylesProps)=>{
        if(props.color==="blue"){
            return B.mainColor
        } else if(props.color==="red"){
            return B.redColor
        } else if(props.color==="gray"){
            return B.whiteColor
        }
    }};
    padding: 0.2rem 0;
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMicro}rem;
    color: ${(props:INormalButtonStylesProps)=>{
        if(props.color==="blue"){
            return B.whiteColor
        } else if(props.color==="red"){
            return B.whiteColor
        } else if(props.color==="gray"){
            return B.strongGrayColor
        }
    }};
    cursor: pointer;

    &:active{
        opacity: 70%;
        transition: 250ms;
    }

    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.26rem 0;
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.32rem 0;
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        padding: 0.42rem 0;
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        padding: 0.55rem 0;
        font-size: ${B.mobileFontSizeMicro}rem;
    }
`
