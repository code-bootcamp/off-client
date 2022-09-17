import styled from "@emotion/styled";
import * as B from "../../../../commons/styles/basic"
import { INormalButtonStylesProps } from "./normalButton.types";

export const NormalButton = styled.button`
    display: block!important;
    width: 100%;
    height: 0.7rem!important;
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
    background-color: ${(props:INormalButtonStylesProps)=>{
        if(props.color==="blue"){
            return B.mainColor
        } else if(props.color==="red"){
            return B.redColor
        } else if(props.color==="gray"){
            return B.whiteColor
        }
    }};
    color: ${(props:INormalButtonStylesProps)=>{
        if(props.color==="blue"){
            return B.whiteColor
        } else if(props.color==="red"){
            return B.whiteColor
        } else if(props.color==="gray"){
            return B.strongGrayColor
        }
    }};
    border-radius: 8px;
    padding: 0;
    font-weight: bold;
    font-size: ${B.deskTopFontSizeMicro}rem;
    user-select: none;
    cursor: pointer;
    &:disabled{
        opacity: 50%;
        pointer-events: none;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.1rem!important;
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.4rem!important;
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 1.7rem!important;
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.2rem!important;
        font-size: ${B.mobileFontSizeMicro}rem;
    }
`
