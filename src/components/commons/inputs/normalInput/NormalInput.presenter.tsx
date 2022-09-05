import { NormalInput } from "./NormalInput.styles";
import { INormalInputUIProps } from "./NormalInput.types";

export default function NormalInputUI(props: INormalInputUIProps) {
    return (
        <NormalInput
        type={ props.type }
        placeholder = { props.placeholder }
        { ...props.register }
        />
    )
}