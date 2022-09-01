import NormalButtonUI from "./normalButton.presenter";

export default function NormalButtonContainer(props) {
    return<NormalButtonUI title={props.title} type={props.type}/>
}