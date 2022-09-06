import { INormalSelectBoxUIProps } from "./NormalSelectBox.types";
import { Select } from "antd";



export default function NormalSelectBoxUI(props: INormalSelectBoxUIProps) {
    const { Option } = Select

    return(
        <Select style = {{ width: "100%" }}>
            { props.category && props.category.map((el) => (
                <Option key = { el.value } value = { el.value }>{ el.name }</Option>
            )) }
        </Select>
    )
}