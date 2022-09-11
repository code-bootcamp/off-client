import NormalButton from "../../../commons/buttons/normalButton/normalButton.container"
import NormalDatePicker from "../../../commons/datepickers/normalDatePicker/NormalDatePicker.container"
import Error from "../../../commons/error"
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container"
import NormalSelectBox from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.container"
import { Row, Col } from 'antd'
import { FormCol, FormRow, ListAddBtn, ListBody, ListImgBox, ListInfoBox, ListItem, ListWrapper, SubTitle, Wrapper, WriteModal } from "./MyFridgeList.styles"
import { IMyFridgeListUIProps } from "./MyFridgeList.types"
import { CATEGORY } from "../../../../commons/libraries/siteConfig"
import { v4 as uuidv4 } from 'uuid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'




export default function MyFridgeListUI(props: IMyFridgeListUIProps) {
    console.log(props.columns)

    return (
        <>
            { props.winReady ? 
            <Wrapper>
            <WriteModal title = "상품 등록하기"
            visible = { props.isWriteModalOpen }
            footer = { null }
            maskClosable = { false }>
                <form>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput name = "name" type = 'text' placeholder = '상품명을 입력해주세요' control = { props.control } />
                            <Error message = { props.formState.errors.name?.message } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput name = "price" type = 'text' placeholder = '가격을 입력해주세요' control = { props.control } />
                            <Error message = { props.formState.errors.price?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalSelectBox name = "category" placeholder = '카테고리를 선택해주세요' category = { CATEGORY } control = { props.control } />
                            <Error message = { props.formState.errors.category?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker name = "expDate" placeholder = '유효기간을 설정해주세요' control = { props.control } />
                            <Error message = { props.formState.errors.expDate?.message } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker name = "alarm" placeholder = '유효기간 임박일을 설정해주세요' control = { props.control } />
                            <Error message = { props.formState.errors.alarm?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20} className = "margin-reset">
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalButton title = '등록' color = 'blue' onClick = { props.handleSubmit(props.onClickCreateProduct) } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalButton title = '취소' color = 'red' onClick = { props.onClickCancelWriteModal } />
                        </FormCol>
                    </FormRow>
                </form>
            </WriteModal>
            <Row gutter={30}>
                <DragDropContext onDragEnd = { result => props.onDragEnd(result, props.columns, props.setColumns) }>
                    { Object.entries(props.columns).map(([ columnId, column]: any, index) => {
                        return (
                            <Col xs = { 24 } sm = { 24 } md = { 24 } lg = { 8 } xl = { 8 } key = { columnId }>
                                <ListWrapper>
                                    <SubTitle>{ column.name }</SubTitle>
                                    <Droppable droppableId = { columnId } key = { columnId }>
                                        {(provided, snapshot) => {
                                            return (
                                                <div {...provided.droppableProps} ref = {provided.innerRef}>
                                                    { column.items.map((item: any, index: any) => {
                                                        return (
                                                            <Draggable key = { item.id } draggableId = { item.id } index = { index }>
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <ListItem ref = { provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps }>
                                                                            <Row gutter={20}>
                                                                                <Col span = { 10 }>
                                                                                    <ListImgBox>
                                                                                        <img src='/images/food.jpeg' alt = "img" />
                                                                                    </ListImgBox>
                                                                                </Col>
                                                                                <Col span = { 14 }>
                                                                                    <ListInfoBox>
                                                                                        <div>
                                                                                            <p className = 'category'>{ item.category }</p>
                                                                                            <p className = 'name'>{ item.name }</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p className = 'expiryDate'>{ item.expDate }</p>
                                                                                        </div>
                                                                                    </ListInfoBox>
                                                                                </Col>
                                                                            </Row>
                                                                        </ListItem>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )
                                                    }) }
                                                    { provided.placeholder }
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </ListWrapper>
                            </Col>
                        )
                    }) }
                </DragDropContext>
            </Row>
        </Wrapper>
             : 
             null 
             }
        </>
    )
}