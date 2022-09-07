import { FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form"

export interface INormalInputProps {
    control: any
    type: string
    placeholder: any
    // register?: UseFormRegisterReturn<"email"|"password"|"password2"|"name"|"nickname"|"phone"|"token">
    // register?: any
}

export interface INormalInputUIProps {
    control: any
    type: string
    placeholder: any
    // register?: UseFormRegisterReturn<"email"|"password"|"password2"|"name"|"nickname"|"phone"|"token">
    // register?: any
}