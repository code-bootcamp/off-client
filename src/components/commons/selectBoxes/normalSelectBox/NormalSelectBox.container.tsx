import NormalSelectBoxUI from "./NormalSelectBox.presenter";

export default function NormalSelectBox(props:any) {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    return<NormalSelectBoxUI handleChange={props.handleChange} category={props.category}/>
}