import { MouseEventHandler } from "react"

export interface MarketListUIProps {
    data: any
    category: any
    location: any
    onChangeLocation: (value: any) => void
    onChangeCategory: (value: any) => void
    onChangeInput: (value: any) => void
    onClickMoveDetail: any
}