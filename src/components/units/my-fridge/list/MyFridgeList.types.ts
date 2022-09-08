import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IMyFridgeListUIProps{
    productList: any
    isWriteModalOpen: boolean
    formState: FormState<FieldValues>
    control: any
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickShowWriteModal: () => void
    onClickCancelWriteModal: () => void
    onClickCreateProduct: (data: any) => void
}