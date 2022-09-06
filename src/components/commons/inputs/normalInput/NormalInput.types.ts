import { FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form"

export interface INormalInputProps {
    type: string
    placeholder: string
    // register?: UseFormRegisterReturn<"email"|"password"|"password2"|"name"|"nickname"|"phone"|"token">
    register?: any
}

export interface INormalInputUIProps {
    type: string
    placeholder: string
    // register?: UseFormRegisterReturn<"email"|"password"|"password2"|"name"|"nickname"|"phone"|"token">
    register?: any
}