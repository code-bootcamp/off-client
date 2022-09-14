import { Row, Col } from 'antd'
import { ListAddBtn, ListWrapper, SubTitle, Wrapper } from "./MyFridgeList.styles"
import { IMyFridgeListUIProps } from "./MyFridgeList.types"
import { DragDropContext } from 'react-beautiful-dnd'
import MyFridgeListDroppable from "./MyFridgeListDroppable.presenter"
import MyFridgeWrite from '../write/MyFridgeWrite.container'

export default function MyFridgeListUI(props: IMyFridgeListUIProps) {
    return (
        <>
            { props.winReady ? 
            <Wrapper>
                <MyFridgeWrite isWriteModalOpen = { props.isWriteModalOpen } setIsWriteModalOpen = { props.setIsWriteModalOpen } />
                <Row gutter = { 30 }>
                    <DragDropContext onDragEnd = { result => props.onDragEnd(result, props.columns, props.setColumns) }>
                        { Object.entries(props.columns).map(([columnId, column]: any, index) => {
                            return (
                                <Col xs = { 24 } sm = { 24 } md = { 8 } lg = { 8 } xl = { 8 } key = { columnId }>
                                    <ListWrapper>
                                        <SubTitle>{ column.name }</SubTitle>
                                        <MyFridgeListDroppable columnId = { columnId } column = { column } />
                                        { column.isCreateBtn && <ListAddBtn onClick = { props.onClickOpenWriteModal }>클릭하여 상품 추가하기 +</ListAddBtn> }
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