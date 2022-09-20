import { Draggable } from 'react-beautiful-dnd'
import { MyFridgeListDraggableProps } from './MyFridgeList.types'
import { ListItemHeader, ListItem, ListItemContent, BadgeRibbon } from "./MyFridgeList.styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPen, 
    faXmark,
    faCartShopping
} from '@fortawesome/free-solid-svg-icons'
import { getDate } from '../../../../commons/libraries/utils'

export default function MyFridgeListDraggable(props: MyFridgeListDraggableProps) {
    return (
        <Draggable key = { props.item.id } draggableId = { props.item.id } index = { props.index }>
            {(provided, snapshot) => {
                return (
                    <div ref = { provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps }>
                        <BadgeRibbon isAlarm = { getDate(new Date()) === getDate(props.item.alarm) ? true : false } text = "유효기간 임박" color = 'red'>
                            <ListItem>
                                <ListItemHeader>
                                    <div className = 'category-box'>
                                        <FontAwesomeIcon icon = { props.getCategoryIcon(props.item.category.name) } />
                                        <span>{ props.item.category.name }</span>
                                    </div>
                                </ListItemHeader>
                                <ListItemContent>
                                    <p>{ props.item.name }</p>
                                    <div className = 'content-flex'>
                                        <p className = 'expDate'>{ getDate(props.item.expDate) } 까지</p>
                                        <div className = 'btn-box'>
                                            <FontAwesomeIcon 
                                                icon = { faCartShopping } 
                                                onClick = { props.onClickOpenMarketCreateModal(props.item) }
                                            />
                                            <FontAwesomeIcon 
                                                icon = { faPen } 
                                                onClick = { props.onClickOpenEditModal(props.item) }
                                            />
                                            <FontAwesomeIcon 
                                                icon = { faXmark } 
                                                onClick = { props.onClickDeleteItem(props.item) }
                                            />
                                        </div>
                                    </div>
                                </ListItemContent>
                            </ListItem>
                        </BadgeRibbon>
                    </div>
                )
            }}
        </Draggable>
    )
}