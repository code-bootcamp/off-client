import { NormalInput } from "./NormalInput.styles";
import { INormalInputUIProps } from "./NormalInput.types";

export default function NormalInputUI(props: INormalInputUIProps) {
    return (
        <NormalInput 
        placeholder = { props.placeholder } 
        />  
    )
}