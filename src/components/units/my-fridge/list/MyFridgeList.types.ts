import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IMyFridgeListUIProps {
    winReady: boolean
    category: any
    productList: any
    isWriteModalOpen: boolean
    formState: FormState<FieldValues>
    control: any
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickShowWriteModal: () => void
    onClickCancelWriteModal: () => void
    onClickCreateProduct: (data: any) => void
    onDragEnd: (result: any, columns: any, setColumns: any) => void
    columns: any
    setColumns: any
}

export interface MyFridgeListDroppableProps {
    columnId: any
    column: any
}

export interface MyFridgeListDraggableProps {
    item: any
    index: any
}