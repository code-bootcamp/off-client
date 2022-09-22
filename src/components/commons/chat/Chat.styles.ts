import styled from "@emotion/styled";
import * as B from "../../../commons/styles/basic"

export const ChatBox = styled.div`
    position: relative;
    .on{
        top: 0vh;
        transition: 0.2s;
    }
    .off{
        top: -100vh;
        transition: 0.2s;
    }
    `
export const Wrapper = styled.form`
    display: block;
    position: absolute;
    width: 40%;
    height: calc(100vh - 2rem);
    /* margin: 0rem auto; */
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 20px;
    box-shadow: 0px 0px 10px -2px black;
    z-index: 100;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        margin: 1rem auto;
        width: 50%;
        height: calc(100vh - 3.6rem);
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        margin: 1rem auto;
        width: 70%;
        height: calc(100vh - 2.8rem);
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        margin: 1rem auto;
        width: 85%;
        height: calc(100vh - 3rem);
    }
    @media (max-width: ${B.mobile - 1}px) {
        margin: 1rem auto;
        width: 85%;
        height: calc(100vh - 4rem);
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.2rem;
    width: 100%;
    height: 1rem;
    border: none;
    border-radius: 20px 20px 0 0;
    background-color: ${B.mainColor} ;
    .to{
        font-size: ${B.deskTopFontSizeMiddle}rem;
        color: ${B.whiteColor};
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 1.3rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.6rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 2.1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.75rem;
    }
`
export const ChatContents = styled.div`
    width: 100%;
    height: calc(100vh - 1.3rem - 1.7rem);
    padding: 10px 10px 0;
    border: none;
    background-color: ${B.whiteColor};
    overflow-y: scroll;
    .left>div{
        background-color: #87cefa;
    }
    .right>div{
        background-color: #dcdcdc;
    }
    /* @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: calc(100vh - 1.3rem - 1.7rem);
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 1.6rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 2.1rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 2.75rem;
    } */
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
    `
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    span{
        font-size: ${B.deskTopFontSizeMicro}rem;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: ${B.noteBookFontSizeMicro}rem;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: ${B.bigTabletFontSizeMicro}rem;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: ${B.smallTabletFontSizeMicro}rem;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: ${B.mobileFontSizeMicro}rem;
        }
    }
`
export const Msg = styled.div`
    max-width: 70%;
    word-break: break-all;
    padding: 10px;
    border-radius: 20px;
    font-size: ${B.deskTopFontSizeMicro}rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem;
    }

`
export const WriteWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.2rem;
    background-color: ${B.mainColor};
    border-radius: 0 0 20px 20px;
`
export const ChatWrite = styled.input`
    width: 80%;
    height: 0.75rem;
    padding: 0.2rem;
    font-size: ${B.deskTopFontSizeMicro}rem;
    border: none;
    border-radius:  20px 20px 20px 20px;
    &:focus{
        outline: none;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 75%;
        height: 0.93rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 75%;
        height: 1.12rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 75%;
        height: 1.47rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 75%;
        height: 1.93rem;
    }
`
export const SubmitBtn = styled.button`
    width: 15%;
    height: 0.7rem;
    border: none;
    border-radius: 20px;
    /* background-color: transparent; */
    background-color: #004CFF;
    color: white;
    font-size: ${B.deskTopFontSizeMicro}rem;
    box-shadow: 0px 0px 10px -2px black;
    cursor: pointer;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 15%;
        height: 0.93rem;
        font-size: ${B.noteBookFontSizeMicro}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 15%;
        height: 1.12rem;
        font-size: ${B.bigTabletFontSizeMicro}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 15%;
        height: 1.47rem;
        font-size: ${B.smallTabletFontSizeMicro}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 15%;
        height: 1.93rem;
        font-size: ${B.mobileFontSizeMicro}rem;
    }
`