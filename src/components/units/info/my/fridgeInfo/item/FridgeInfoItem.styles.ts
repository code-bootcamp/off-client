import styled from "@emotion/styled"
import * as B from "../../../../../../commons/styles/basic"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: 0.2rem 0.5rem;
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3);
    /* margin-bottom: 1rem; */
    div{
        display: flex;
        /* flex-direction: column; */
        font-size: ${ B.deskTopFontSizeMicro }rem;
    }
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        padding: 0.26rem 0.66rem;
        div{
            font-size: ${ B.noteBookFontSizeMicro }rem;
        }
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        padding: 0.32rem 0.8rem;
        div{
            font-size: ${ B.bigTabletFontSizeMicro }rem;
        }
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        flex-direction: row;
        padding: 0.42rem 1rem;
        div{
            font-size: ${ B.smallTabletFontSizeMicro }rem;
        }
        span.name{
            width: 5rem;
        }
        span:not(.name){
            display: none;
        }
    }
    @media (max-width: ${B.mobile - 1}px) {
        flex-direction: row;
        padding: 0.5rem 0.8rem;
        div{
            font-size: ${ B.mobileFontSizeMicro }rem;
        }
        span.name{
            width: 4rem;
        }
        span:not(.name){
            display: none;
        }
    }
    `
export const Info = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
       width: 50%;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
       width: 50%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 50%;
    }
`
export const Status = styled.div`

`
export const Category = styled.div`
    margin-right: 0.1rem;
`
export const Name = styled.div`
    justify-content: center;
    align-items: center;
    margin-right: 0.1rem;
    span{
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
`
export const Price = styled.div`
`
export const ExpDate = styled.div`
    align-self: flex-end;
    color: red;
`



