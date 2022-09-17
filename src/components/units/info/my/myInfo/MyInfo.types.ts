import { ChangeEvent, RefObject } from "react"
import { Control, FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form"

export interface IMyInfoProps {
    control: Control<FieldValues, any>
    handleSubmit: UseFormHandleSubmit<FieldValues>
    formState: FormState<FieldValues>
    isEdit: boolean
    checkId: string
    onClickToEdit: (e:any) => void
    onClickCancel: (e:any) => void
    fileRef: RefObject<HTMLInputElement>
    onClickImageEdit: () => void
    onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void
    imageUrl: string
    onClickUpdate: (data: any) => Promise<void>
}






