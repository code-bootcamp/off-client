export interface MyFridgeWriteProps {
    isWriteModalOpen: boolean
    setIsWriteModalOpen: any
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