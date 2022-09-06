import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '@atlaskit/css-reset';
import { Row, Col } from 'antd';
import * as B from '../../src/commons/styles/basic'


const Wrapper = styled.div`
    width: 80%;
    margin: 1.5rem auto 1.5rem auto;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 90%;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
       
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        
    }
    @media (max-width: ${B.mobile - 1}px) {
        
    }
`

const ListWrapper = styled.div`
    width: 100%;
`

const ListBody = styled.ul`
    width: 100%;
`

const Title = styled.h1`
    font-size: ${B.deskTopFontSizeSmall}rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        font-size: ${B.noteBookFontSizeSmall}rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeSmall}rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeSmall}rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeSmall}rem;
    }
`

const ListItem = styled.li`
    display: flex;
    box-shadow: 4px 10px 9px #00000014;
    border-radius: 20px;
    margin-bottom: 0.5rem;
`

const ListImgBox = styled.div`
    img {
        border-radius: 20px 0 0 20px;
    }
`

const ListInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0.15rem 0;
    p {
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
        &.category {
            font-weight: bold;
            padding-bottom: 0.1rem;
        }
        &.expiryDate {
            color: ${B.mainColor};
        }
    }
`

const ListAddBtn = styled.button`
    width: 100%;
    height: 2.3rem;
    color: ${B.mainColor};
    font-size: ${B.deskTopFontSizeMicro}rem;
    font-weight: bold;
    background-color: ${B.whiteColor};
    border: 2px dashed ${B.mainColor};
    border-radius: 20px;
    box-shadow: 4px 10px 9px #00000014;
    cursor: pointer;
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

export default function myFridgePage() {

    const [productList, setProductList] = useState([])
    const [isChange, setIsChange] = useState(false)

    useEffect(() => {
        setProductList(JSON.parse(localStorage.getItem("productList") || "[]"))
    }, [isChange])

    

    return (
        <Wrapper>
            <Row gutter={30}>
                <Col xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 }>
                    <ListWrapper>
                        <Title>목록</Title>
                        <ListBody>
                            <ListItem>
                                <Row gutter={20}>
                                    <Col span = { 10 }>
                                        <ListImgBox>
                                            <img src='/images/food.jpeg' alt = "img" />
                                        </ListImgBox>
                                    </Col>
                                    <Col span = { 14 }>
                                        <ListInfoBox>
                                            <div>
                                                <p className = 'category'>카테고리</p>
                                                <p className = 'name'>이름</p>
                                            </div>
                                            <div>
                                                <p className = 'expiryDate'>유통기한</p>
                                            </div>
                                        </ListInfoBox>
                                    </Col>
                                </Row>
                            </ListItem>
                            <ListItem>
                                <Row gutter={20}>
                                    <Col span = { 10 }>
                                        <ListImgBox>
                                            <img src='/images/food.jpeg' alt = "img" />
                                        </ListImgBox>
                                    </Col>
                                    <Col span = { 14 }>
                                        <ListInfoBox>
                                            <div>
                                                <p className = 'category'>카테고리</p>
                                                <p className = 'name'>이름</p>
                                            </div>
                                            <div>
                                                <p className = 'expiryDate'>유통기한</p>
                                            </div>
                                        </ListInfoBox>
                                    </Col>
                                </Row>
                            </ListItem>
                        </ListBody>
                        <ListAddBtn>클릭하여 상품 추가하기 +</ListAddBtn>
                    </ListWrapper>
                </Col>
                <Col xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 }>
                    <ListWrapper>
                        <Title>냉동</Title>
                        <ListBody>
                            <ListItem>
                                <Row gutter={20}>
                                    <Col span = { 10 }>
                                        <ListImgBox>
                                            <img src='/images/food.jpeg' alt = "img" />
                                        </ListImgBox>
                                    </Col>
                                    <Col span = { 14 }>
                                        <ListInfoBox>
                                            <div>
                                                <p className = 'category'>카테고리</p>
                                                <p className = 'name'>이름</p>
                                            </div>
                                            <div>
                                                <p className = 'expiryDate'>유통기한</p>
                                            </div>
                                        </ListInfoBox>
                                    </Col>
                                </Row>
                            </ListItem>
                        </ListBody>
                    </ListWrapper>
                    <ListWrapper>
                        <Title>냉장</Title>
                        <ListBody>
                            <ListItem>
                                <Row gutter={20}>
                                    <Col span = { 10 }>
                                        <ListImgBox>
                                            <img src='/images/food.jpeg' alt = "img" />
                                        </ListImgBox>
                                    </Col>
                                    <Col span = { 14 }>
                                        <ListInfoBox>
                                            <div>
                                                <p className = 'category'>카테고리</p>
                                                <p className = 'name'>이름</p>
                                            </div>
                                            <div>
                                                <p className = 'expiryDate'>유통기한</p>
                                            </div>
                                        </ListInfoBox>
                                    </Col>
                                </Row>
                            </ListItem>
                        </ListBody>
                    </ListWrapper>
                </Col>
            </Row>
        </Wrapper>
    )
}