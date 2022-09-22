import { Row, Col, Alert } from 'antd'
import Marquee from 'react-fast-marquee';
import { InfoAlert, ListAddBtn, ListWrapper, SubTitle, Title, Wrapper } from "./MyFridgeList.styles"
import { IMyFridgeListUIProps } from "./MyFridgeList.types"
import { DragDropContext } from 'react-beautiful-dnd'
import MyFridgeListDroppable from "./MyFridgeListDroppable.presenter"
import MyFridgeWrite from '../write/MyFridgeWrite.container'
import MarketWrite from '../../market/write/MarketWrite.container';

export default function MyFridgeListUI(props: IMyFridgeListUIProps) {
    return (
        <>
            { props.winReady ? 
            <Wrapper>
                <MyFridgeWrite 
                isEdit = { props.isEdit }
                setIsEdit = { props.setIsEdit }
                isWriteModalOpen = { props.isWriteModalOpen } 
                setIsWriteModalOpen = { props.setIsWriteModalOpen } 
                editData = { props.editData }
                />
                <MarketWrite
                isMarketCreateModalOpen = { props.isMarketCreateModalOpen }
                setIsMarketCreateModalOpen = { props.setIsMarketCreateModalOpen }
                marketCreateData = { props.marketCreateData }
                />
                <InfoAlert type = 'info' banner message = {
                    <Marquee gradient = { false }>
                        상품을 추가하신 후 드래그 앤 드롭으로 이용해주세요!!
                    </Marquee>
                } />
                <Title>{ props.userInfo?.nickname }님의 냉장고</Title>
                <Row gutter = { 30 }>
                    <DragDropContext onDragEnd = { result => props.onDragEnd(result, props.columns, props.setColumns) }>
                        { Object.entries(props.columns).map(([columnId, column]: any, index) => {
                            return (
                                <Col xs = { 24 } sm = { 24 } md = { 8 } lg = { 8 } xl = { 8 } key = { columnId }>
                                    <ListWrapper>
                                        <SubTitle>{ column.name }</SubTitle>
                                        <MyFridgeListDroppable 
                                        columnId = { columnId } 
                                        column = { column } 
                                        onClickOpenEditModal = { props.onClickOpenEditModal }
                                        onClickDeleteItem = { props.onClickDeleteItem }
                                        onClickOpenMarketCreateModal = { props.onClickOpenMarketCreateModal }
                                        getCategoryIcon = { props.getCategoryIcon }
                                        />
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