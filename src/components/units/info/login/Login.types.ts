import { Control, FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginUIProps{
    // register: UseFormRegister<FieldValues>
    control: Control<FieldValues, any>
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>
    onClickLogin: (data:any) => Promise<void>;
}
