import NormalSelectBoxUI from "./NormalSelectBox.presenter";
import { INormalSelectBoxProps } from "./NormalSelectBox.types";

export default function NormalSelectBox(props: INormalSelectBoxProps) {
    return (
        <NormalSelectBoxUI 
        name = { props.name }
        control = { props.control }
        placeholder = { props.placeholder } 
        category = { props.category } 
        defaultValue = { props.defaultValue }
        readonly = { props.readonly }
        />
    )
}