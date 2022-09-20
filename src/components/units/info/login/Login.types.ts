import { FieldValues, FormState, UseFormHandleSubmit } from "react-hook-form";

export interface ILoginUIProps {
    control: any
    handleSubmit: UseFormHandleSubmit<FieldValues>
    formState: FormState<FieldValues>
    onClickLogin: (data:any) => Promise<void>
    onClickGoogleLogin: () => void
    onClickKakaoLogin: () => void
}

export interface ISocialLoginStyleProps {
    bgColor: string
}
