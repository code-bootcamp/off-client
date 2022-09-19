import { MouseEventHandler } from "react"

export interface IMyFridgeListUIProps {
    winReady: boolean
    isWriteModalOpen: boolean
    isMarketCreateModalOpen: boolean
    isEdit: boolean
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    onClickOpenWriteModal: () => void
    onClickOpenEditModal: (data: any) => () => void
    onClickDeleteItem: (data: any) => () => void
    onClickOpenMarketCreateModal: (data: any) => () => void
    getCategoryIcon: (categoryName: string) => void
    columns: any
    setColumns: any
    setIsWriteModalOpen: any
    setIsMarketCreateModalOpen: any
    setIsEdit: any
    editData: any
    marketCreateData: any
    userInfo: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
    onClickOpenEditModal: (data: any) => void
    onClickOpenMarketCreateModal: (data: any) => () => void
    onClickDeleteItem: (data: any) => void
    getCategoryIcon: (categoryName: string) => void
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
    onClickOpenEditModal: (data: any) => void
    onClickOpenMarketCreateModal: (data: any) => () => void
    onClickDeleteItem: (data: any) => void
    getCategoryIcon: (categoryName: string) => void
}

export interface MyFridgeListItemIsAlarmProps {
    isAlarm: boolean
}