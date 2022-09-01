import NormalInputUI from "./NormalInput.presenter";

export default function NormalInputContainer(props) {
      return(
          <NormalInputUI title={props.title} type={props.type} {...props.register} placeholder={props.placeholder} defaultValue={props.defaultValue}/>
          );
}
