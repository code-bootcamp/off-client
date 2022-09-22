import { FieldValues, UseFormRegister } from "react-hook-form"

export interface MarketWriteProps {
    isMarketCreateModalOpen: boolean
    setIsMarketCreateModalOpen: any
    marketCreateData: any
}

export interface MarketWriteUIProps {
    marketCreateData: any
    isMarketCreateModalOpen: boolean
    formState: any
    register: UseFormRegister<FieldValues>
    control: any
    category: any
    handleSubmit: any
    onClickCancelWriteModal: () => void
    fileUrls: string[]
    onChangeFileUrls: (fileUrl: string, index: number) => void
    onClickAddressOpen: () => void
    onClickSubmit: (data: any) => Promise<void>
    onCompletePostcode: (data: any) => void
    isAddressOpen: boolean
    address: string
}