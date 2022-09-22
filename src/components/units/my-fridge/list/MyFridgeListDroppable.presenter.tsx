import { Droppable } from 'react-beautiful-dnd'
import { MyFridgeListDroppableProps } from './MyFridgeList.types'
import MyFridgeListDraggable from './MyFridgeListDraggable.presenter'
import { v4 as uuidv4 } from 'uuid'

export default function MyFridgeListDroppable(props: MyFridgeListDroppableProps) {
    return (
        <Droppable droppableId = { props.columnId } key = { props.columnId }>
            {(provided, snapshot) => {
                return (
                    <div {...provided.droppableProps} ref = {provided.innerRef}>
                        { props.column.items?.map((item: any, index: any) => {
                            return (
                                <MyFridgeListDraggable 
                                key = { uuidv4() } 
                                item = { item } 
                                index = { index } 
                                onClickOpenEditModal = { props.onClickOpenEditModal }
                                onClickDeleteItem = { props.onClickDeleteItem }
                                onClickOpenMarketCreateModal = { props.onClickOpenMarketCreateModal }
                                getCategoryIcon = { props.getCategoryIcon }
                                columnId = { props.columnId }
                                />
                            )
                        }) }
                        { provided.placeholder }
                    </div>
                )
            }}
        </Droppable>
    )
}