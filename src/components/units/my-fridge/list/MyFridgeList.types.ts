import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IMyFridgeListUIProps {
    winReady: boolean
    isWriteModalOpen: boolean
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    onClickOpenWriteModal: () => void
    columns: any
    setColumns: any
    setIsWriteModalOpen: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
}