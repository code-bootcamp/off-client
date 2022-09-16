import { RangePickerProps } from "antd/lib/date-picker";
import moment from "moment";
import NormalDatePickerUI from "./NormalDatePicker.presenter";
import { INormalDatePickerProps } from "./NormalDatePicker.types";

export default function NormalDatePicker(props: INormalDatePickerProps) {

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && current < moment().endOf('day');
      };

    return (
        <NormalDatePickerUI 
        name = { props.name }
        control = { props.control }
        placeholder = { props.placeholder } 
        disabledDate = { disabledDate } 
        defaultValue = { props.defaultValue }
        />
    )
}