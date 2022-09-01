import { NormalButton } from "./normalButton.styles";

export default function NormalButtonUI(props) {
    return<NormalButton type={props.type}>{props.title}</NormalButton>
}