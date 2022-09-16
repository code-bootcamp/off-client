export interface MyFridgeWriteProps {
    isEdit: boolean
    setIsEdit: any
    isWriteModalOpen: boolean
    setIsWriteModalOpen: any
    editData: any
}

export interface MyFridgeWriteUIProps {
    editData: any
    isEdit: boolean
    isWriteModalOpen: boolean
    formState: any
    control: any
    category: any
    handleSubmit: any
    onClickCreateProduct: (data: any) => void
    onClickUpdateProduct: (data: any) => void
    onClickCancelWriteModal: () => void
}