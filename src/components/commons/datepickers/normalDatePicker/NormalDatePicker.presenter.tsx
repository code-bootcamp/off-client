import { NormalDatePicker } from "./NormalDatePicker.styles";
import { INormalDatePickerUIProps } from "./NormalDatePicker.types";
import { Controller } from "react-hook-form";


export default function NormalDatePickerUI(props: INormalDatePickerUIProps) {
    return (
        <Controller 
        control = { props.control } 
        name = { props.name }
        render = {({ field: { onChange } }) => (
            <NormalDatePicker 
            placeholder = { props.placeholder } 
            format = "YYYY-MM-DD"
            disabledDate = { props.disabledDate } 
            onChange = {(value) => { onChange(value) }}
            />
        )}
        />
    )
}