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
                { props.category && props.category.map((el: any) => (
                    <Option key = { el.id } value = { el.id }>{ el.name }</Option>
                )) }
            </NormalSelectBox>
        )}
        />
    )
}