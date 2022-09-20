import TextAreaInputUI from "./TextAreaInput.presenter";
import { ITextAreaInputProps } from "./TextAreaInput.types";

export default function TextAreaInput(props: ITextAreaInputProps) {
    return (
        <TextAreaInputUI
        // type = { props.type }
        name = { props.name }
        placeholder = { props.placeholder }
        defaultValue = { props.defaultValue }
        control = { props.control }
        />
    )
}
