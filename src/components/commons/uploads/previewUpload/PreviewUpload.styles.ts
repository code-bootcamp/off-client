import styled from "@emotion/styled"
import * as B from "../../../../commons/styles/basic"

export const UploadBox = styled.div`
    width: 100%;
    height: 3.2rem;
    background-color: ${B.whiteColor};
    color: ${B.mainColor};
    border: 2px dashed ${B.mainColor};
    border-radius: 20px;
    text-align: center;
    line-height: 3.2rem;
    cursor: pointer;
    font-size: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        height: 5rem;
        line-height: 5rem;
        font-size: 0.6rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        height: 5rem;
        line-height: 5rem;
        font-size: 0.6rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        height: 5rem;
        line-height: 5rem;
        font-size: 0.6rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        height: 5rem;
        line-height: 5rem;
        font-size: 0.6rem;
    }
`

export const PreviewImg = styled.img`
    width: 78px;
    height: 78px;
    margin-right: 25px;
    cursor: pointer;
`

export const UploadFileHidden = styled.input`
    display: none;
`