import styled from "@emotion/styled"
import * as B from "../../../../../../commons/styles/basic"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    padding: 0.5rem;
    box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.3);
    margin-bottom: 1rem;
    div{
        display: flex;
        /* flex-direction: column; */
        font-size: ${ B.deskTopFontSizeMiddle }rem;
    }
    span{
        font-size: ${ B.deskTopFontSizeMicro }rem;
    }
`
export const Info = styled.div`
    justify-content: space-evenly;
`
export const Status = styled.div`
    flex-direction: column;
`
export const Category = styled.div`
    flex-direction: column;
`
export const Name = styled.div`
    flex-direction: column;
`
export const Price = styled.div`
    flex-direction: column;
`
export const Date = styled.div`
    justify-content: space-evenly;
    div{
        align-items: center;
    }
    span{
        margin-right: 0.5rem;
    }
`
export const ExpDate = styled.div`
    color: red;
`
export const Alarm = styled.div`
    color: blue;
`



