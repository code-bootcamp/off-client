export interface MarketWriteProps {
    isMarketCreateModalOpen: boolean
    setIsMarketCreateModalOpen: any
    marketCreateData: any
}

export interface MarketWriteUIProps {
    marketCreateData: any
    isMarketCreateModalOpen: boolean
    formState: any
    control: any
    category: any
    handleSubmit: any
    onClickCancelWriteModal: () => void
}