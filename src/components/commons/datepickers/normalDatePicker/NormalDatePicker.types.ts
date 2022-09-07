export interface INormalDatePickerProps {
    name: string
    control: any
    placeholder: string
}

export interface INormalDatePickerUIProps {
    name: string
    control: any
    disabledDate: (date: any) => boolean
    placeholder: string
}