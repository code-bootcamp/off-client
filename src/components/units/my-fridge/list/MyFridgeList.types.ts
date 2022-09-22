import { MouseEventHandler } from "react"

export interface IMyFridgeListUIProps {
    winReady: boolean
    isWriteModalOpen: boolean
    isMarketCreateModalOpen: boolean
    isEdit: boolean
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    onClickOpenWriteModal: () => void
    onClickOpenEditModal: any
    onClickDeleteItem: any
    onClickOpenMarketCreateModal: (data: any) => () => void
    getCategoryIcon: any
    columns: any
    setColumns: any
    setIsWriteModalOpen: any
    setIsMarketCreateModalOpen: any
    setIsEdit: any
    editData: any
    editColumnId: any
    marketCreateData: any
    userInfo: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
    onClickOpenEditModal: any
    onClickOpenMarketCreateModal: (data: any) => () => void
    onClickDeleteItem: any
    getCategoryIcon: any
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
    onClickOpenEditModal: any
    onClickOpenMarketCreateModal: (data: any) => () => void
    onClickDeleteItem: any
    getCategoryIcon: any
    columnId: any
}

export interface MyFridgeListItemIsAlarmProps {
    isAlarm: boolean
}