import { Control, FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginUIProps{
    Controller: any
    control: any
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>
    onClickLogin: (data:any) => Promise<void>;
}
