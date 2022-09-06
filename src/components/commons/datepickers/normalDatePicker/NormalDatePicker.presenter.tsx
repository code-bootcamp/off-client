import { NormalDatePicker } from "./NormalDatePicker.styles";
import { INormalDatePickerUIProps } from "./NormalDatePicker.types";

export default function NormalDatePickerUI(props: INormalDatePickerUIProps) {
    return (
        <NormalDatePicker 
        placeholder = { props.placeholder }
        format = "YYYY-MM-DD"
        disabledDate = { props.disabledDate } 
        />
    )
}