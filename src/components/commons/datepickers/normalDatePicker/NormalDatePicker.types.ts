export interface INormalDatePickerProps {
    name: string
    control: any
    placeholder: string
    defaultValue?: any
}

export interface INormalDatePickerUIProps {
    name: string
    control: any
    disabledDate: (date: any) => boolean
    placeholder: string
    defaultValue?: any
}