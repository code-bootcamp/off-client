import { ButtonHTMLAttributes } from "react"


export interface INormalButtonContainerProps {
    title: string
    type: "button" | "submit" | "reset" | undefined
    isActive: boolean
}
export interface INormalButtonUIProps {
    title: string
    type: "button" | "submit" | "reset" | undefined
    isActive: boolean
}