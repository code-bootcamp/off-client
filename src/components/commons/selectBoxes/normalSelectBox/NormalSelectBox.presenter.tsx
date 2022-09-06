import { INormalSelectBoxUIProps } from "./NormalSelectBox.types";
import { Select } from "antd";
import { NormalSelectBox } from "./NormalSelectBox.styles";


export default function NormalSelectBoxUI(props: INormalSelectBoxUIProps) {
    const { Option } = Select

    return(
        <NormalSelectBox placeholder = { props.placeholder }>
            { props.category && props.category.map((el) => (
                <Option key = { el.value } value = { el.value }>{ el.name }</Option>
            )) }
        </NormalSelectBox>
    )
}