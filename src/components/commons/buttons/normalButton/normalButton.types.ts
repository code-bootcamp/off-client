import { ButtonHTMLAttributes } from "react"


export interface INormalButtonContainerProps {
    title: string
    type?: "button" | "submit" | "reset" | undefined
    isActive: boolean
    color: string
}
export interface INormalButtonUIProps {
    title: string
    type?: "button" | "submit" | "reset" | undefined
    isActive: boolean
    color: string
}

export interface INormalButtonStylesProps {
    isActive: boolean
    color: string
}