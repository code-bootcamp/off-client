import { MouseEventHandler } from "react"

export interface IMyFridgeListUIProps {
    winReady: boolean
    isWriteModalOpen: boolean
    isEdit: boolean
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    onClickOpenWriteModal: () => void
    onClickOpenEditModal: (data: any) => () => void
    onClickDeleteItem: (data: any) => () => void
    columns: any
    setColumns: any
    setIsWriteModalOpen: any
    setIsEdit: any
    editData: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
    onClickOpenEditModal: (data: any) => void
    onClickDeleteItem: (data: any) => void
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
    onClickOpenEditModal: (data: any) => void
    onClickDeleteItem: (data: any) => void
}