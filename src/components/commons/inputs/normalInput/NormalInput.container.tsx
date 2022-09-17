import NormalInputUI from "./NormalInput.presenter";
import { INormalInputProps } from "./NormalInput.types";

export default function NormalInput(props: INormalInputProps) {
    return (
        <NormalInputUI
        type = { props.type }
        name = { props.name }
        placeholder = { props.placeholder }
        defaultValue = { props.defaultValue }
        control = { props.control }
        />
    )
}
