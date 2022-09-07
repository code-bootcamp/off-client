import NormalInputUI from "./NormalInput.presenter";
import { INormalInputProps } from "./NormalInput.types";

export default function NormalInput(props: INormalInputProps) {
    return (
        <NormalInputUI
            control={props.control}
            type={ props.type }
            placeholder = { props.placeholder }
        // register = { props.register }
        />
    )
}
