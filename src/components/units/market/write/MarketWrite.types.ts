export interface MarketWriteProps {
    data: any
}

export interface MarketWriteUIProps {
    data: any
    category: any
    control: any
    address: string
    fileUrls: any
    onChangeFileUrls: (fileUrl: string, index: number) => void
    handleSubmit: any
    onClickCreate: (data: any) => void
}