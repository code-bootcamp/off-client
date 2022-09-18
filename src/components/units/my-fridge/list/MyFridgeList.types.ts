import { MouseEventHandler } from "react"

export interface IMyFridgeListUIProps {
    winReady: boolean
    isWriteModalOpen: boolean
    isEdit: boolean
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    onClickOpenWriteModal: () => void
    onClickOpenEditModal: (data: any) => () => void
    onClickDeleteItem: (data: any) => () => void
    onClickMoveMarketCreate: (id: string) => () => void
    getCategoryIcon: (categoryName: string) => void
    columns: any
    setColumns: any
    setIsWriteModalOpen: any
    setIsEdit: any
    editData: any
    userInfo: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
    onClickOpenEditModal: (data: any) => void
    onClickDeleteItem: (data: any) => void
    onClickMoveMarketCreate: (id: string) => () => void
    getCategoryIcon: (categoryName: string) => void
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
    onClickOpenEditModal: (data: any) => void
    onClickDeleteItem: (data: any) => void
    onClickMoveMarketCreate: (id: string) => () => void
    getCategoryIcon: (categoryName: string) => void
}

export interface MyFridgeListItemIsAlarmProps {
    isAlarm: boolean
}