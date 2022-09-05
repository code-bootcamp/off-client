import { NormalButton } from "./normalButton.styles";
import { INormalButtonUIProps } from "./normalButton.types";

export default function NormalButtonUI(props: INormalButtonUIProps) {
    return<NormalButton type={props.type} > {props.title} </NormalButton>
}