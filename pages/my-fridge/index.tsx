import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Row, Col, Modal } from 'antd';
import * as B from '../../src/commons/styles/basic'
import NormalInput from '../../src/components/commons/inputs/normalInput/NormalInput.container';
import NormalDatePicker from '../../src/components/commons/datepickers/normalDatePicker/NormalDatePicker.container';
import NormalSelectBox from '../../src/components/commons/selectBoxes/normalSelectBox/NormalSelectBox.container';


const Wrapper = styled.div`
    width: 80%;
    margin: 1.5rem auto 1.5rem auto;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 90%;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 90%;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 90%;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 90%;
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
        height: 2.5rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        font-size: ${B.bigTabletFontSizeMicro}rem;
        height: 4rem;
        margin-bottom: 2rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        font-size: ${B.smallTabletFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 2rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        font-size: ${B.mobileFontSizeMicro}rem;
        height: 4.5rem;
        margin-bottom: 2rem;
    }
`

const WriteModal = styled(Modal)`
    width: 80%!important;
    top: 50%!important;
    transform: translateY(-50%)!important;
    padding-bottom: 0!important;
    div.ant-modal-content {
        box-shadow: 0px 21px 22px #00000026!important;
        border-radius: 20px!important;
        button.ant-modal-close {
            display: none!important;
        }
        div.ant-modal-header {
            border-radius: 20px!important;
            border-bottom: none!important;
            padding: 0.5rem!important;
            div.ant-modal-title {
                font-size: ${B.deskTopFontSizeSmall}rem!important;
                color: ${B.blackColor}!important;
                font-weight: bold!important;
                @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
                    font-size: ${B.noteBookFontSizeSmall}rem!important;
                }
                @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
                    font-size: ${B.bigTabletFontSizeSmall}rem!important;
                }
                @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
                    font-size: ${B.smallTabletFontSizeSmall}rem!important;
                }
                @media (max-width: ${B.mobile - 1}px) {
                    font-size: ${B.mobileFontSizeSmall}rem!important;
                }
            }
        }
        div.ant-modal-body {
            padding: 0.5rem!important;
        }
    }
`

const CATEGORY = [
    { name: "테스트1", value: "test1" },
    { name: "테스트2", value: "test2" },
    { name: "테스트3", value: "test3" },
    { name: "테스트4", value: "test4" },
]

export default function myFridgePage() {

    const [productList, setProductList] = useState([])
    const [isChange, setIsChange] = useState(false)
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)

    useEffect(() => {
        setProductList(JSON.parse(localStorage.getItem("productList") || "[]"))
    }, [isChange])

    const onClickShowWriteModal = () => {
        setIsWriteModalOpen(true)
    }

    const onClickCancelWriteModal = () => {
        setIsWriteModalOpen(false)
    }

    

    return (
        <Wrapper>
            <WriteModal title = "상품 등록하기" visible = { isWriteModalOpen } onCancel = { onClickCancelWriteModal } footer = { null }>
                <form>
                    <Row gutter={20}>
                        <Col xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput type = 'text' placeholder = '상품명을 입력해주세요' />
                        </Col>
                        <Col xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput type = 'text' placeholder = '가격을 입력해주세요' />
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalSelectBox category = { CATEGORY } />
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker placeholder = '유효기간을 설정해주세요' />
                        </Col>
                        <Col xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker placeholder = '유효기간 임박일을 설정해주세요' />
                        </Col>
                    </Row>
                </form>
            </WriteModal>
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
                        <ListAddBtn onClick = { onClickShowWriteModal }>클릭하여 상품 추가하기 +</ListAddBtn>
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