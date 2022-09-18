import { Controller } from "react-hook-form";
import { TextAreaInput } from "./TextAreaInput.styles";
import { ITextAreaInputUIProps } from "./TextAreaInput.types";

export default function TextAreaInputUI(props: ITextAreaInputUIProps) {
    return (
        <Controller
        control = { props.control }
        name = { props.name }
        defaultValue = { props.defaultValue }
        render = {({ field: { onChange } }) => (
            <TextAreaInput rows = { 4 } placeholder = { props.placeholder } defaultValue = { props.defaultValue } onChange = {(value) => {
                onChange(value)
            }} />
        )}
        />
    )
}
