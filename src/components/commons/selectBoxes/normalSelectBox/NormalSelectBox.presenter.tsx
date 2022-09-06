import { NormalSelectBox } from "./NormalSelectBox.styles";


export default function NormalSelectBoxUI(props:any) {
    const { Option }:any = NormalSelectBox
    return(
        <NormalSelectBox defaultValue={props.defaultValue} onChange={props.handleChange}>
            {props.category.map((el:string)=>{
                <Option value={`${el}`}>{el}</Option>
            })}
        </NormalSelectBox>
    )
}