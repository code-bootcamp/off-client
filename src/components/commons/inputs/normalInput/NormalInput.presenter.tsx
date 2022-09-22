import { NormalInput } from "./NormalInput.styles";
import { Controller } from "react-hook-form";
import { INormalInputUIProps } from "./NormalInput.types";

export default function NormalInputUI(props: INormalInputUIProps) {
    return (
        <Controller
        control = { props.control }
        name = { props.name }
        defaultValue = { props.defaultValue }
        render = {({ field: { onChange } }) => (
            <NormalInput type = { props.type } placeholder = { props.placeholder } readOnly = { props.readonly } defaultValue = { props.defaultValue ? props.defaultValue : "" } onChange = {(value) => {
                onChange(value)
            }} />
        )}
        />
    )
}