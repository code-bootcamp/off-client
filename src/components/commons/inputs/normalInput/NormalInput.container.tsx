import NormalInputUI from "./NormalInput.presenter";
import { INormalInputProps } from "./NormalInput.types";

export default function NormalInput(props: INormalInputProps) {
    return (
        <NormalInputUI 
        type = { props.type }
        name = { props.name } 
        placeholder = { props.placeholder } 
        control = { props.control } 
        />
    )
}
