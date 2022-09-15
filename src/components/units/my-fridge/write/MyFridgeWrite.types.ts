export interface MyFridgeWriteProps {
    isEdit: boolean
    setIsEdit: any
    isWriteModalOpen: boolean
    setIsWriteModalOpen: any
    editData: any
}

export interface MyFridgeWriteUIProps {
    isWriteModalOpen: boolean
    formState: any
    control: any
    category: any
    handleSubmit: any
    onClickCreateProduct: (data: any) => void
    onClickCancelWriteModal: () => void
}