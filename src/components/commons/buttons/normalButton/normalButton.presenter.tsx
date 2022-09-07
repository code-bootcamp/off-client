import { NormalButton } from "./normalButton.styles";
import { INormalButtonUIProps } from "./normalButton.types";

export default function NormalButtonUI(props: INormalButtonUIProps) {
    return (
        <NormalButton 
        type = "button"
        color = { props.color } onClick = { props.onClick }>{ props.title }</NormalButton>
    )
}