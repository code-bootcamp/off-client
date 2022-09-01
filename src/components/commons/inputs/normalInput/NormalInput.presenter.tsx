import { NormaInput } from "./NormalInput.styles";

export default function NormalInputUI(props) {
    return<NormaInput title={props.title} type={props.type} {...props.register} placeholder={props.placeholder} defaultValue={props.defaultValue}/>
}