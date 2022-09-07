import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface IJoinUIProps{
    control: any
    handleSubmit: UseFormHandleSubmit<FieldValues>
    formState: FormState<FieldValues>
    onClickSubmit: (data:any) => Promise<void>
    onClickGetToken: () => void
}
