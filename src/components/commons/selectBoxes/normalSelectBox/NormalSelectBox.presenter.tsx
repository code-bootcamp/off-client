import { INormalSelectBoxUIProps } from "./NormalSelectBox.types";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import { NormalSelectBox } from "./NormalSelectBox.styles";


export default function NormalSelectBoxUI(props: INormalSelectBoxUIProps) {
    const { Option } = Select

    return (
        <Controller 
        control = { props.control } 
        name = { props.name }
        render = {({ field: { onChange } }) => (
            <NormalSelectBox placeholder = { props.placeholder } onChange = {(value) => { onChange(value) }}>
                { props.category && props.category.map((el) => (
                    <Option key = { el.value } value = { el.value }>{ el.name }</Option>
                )) }
            </NormalSelectBox>
        )}
        />
    )
}