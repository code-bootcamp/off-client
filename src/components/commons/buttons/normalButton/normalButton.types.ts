import { ButtonHTMLAttributes } from "react"


export interface INormalButtonContainerProps {
    title: string
    color: string
    onClick: () => void
}
export interface INormalButtonUIProps {
    title: string
    color: string
    onClick: () => void
}

export interface INormalButtonStylesProps {
    color: string
}