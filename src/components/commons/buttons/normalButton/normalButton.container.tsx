import NormalButtonUI from "./normalButton.presenter";
import { INormalButtonContainerProps } from "./normalButton.types";

export default function NormalButton(props:INormalButtonContainerProps) {
    return (
        <NormalButtonUI 
        title = { props.title } 
        color = { props.color } 
        onClick = { props.onClick }
        />
    )
}