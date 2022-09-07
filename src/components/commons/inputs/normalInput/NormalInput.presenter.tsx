import { NormalInput } from "./NormalInput.styles";
import { Controller } from "react-hook-form";
import { INormalInputUIProps } from "./NormalInput.types";

export default function NormalInputUI(props: INormalInputUIProps) {
    return (
        <Controller 
        control = { props.control } 
        name = { props.name } 
        render = {({ field: { onChange } }) => (
            <NormalInput type = { props.type } placeholder = { props.placeholder } onChange = {(value) => {
                onChange(value)
            }} />
        )}
        />
    )
}