import NormalSelectBoxUI from "./NormalSelectBox.presenter";
import { INormalSelectBoxProps } from "./NormalSelectBox.types";

export default function NormalSelectBox(props: INormalSelectBoxProps) {
    return<NormalSelectBoxUI category={props.category}/>
}