import { NormalInput } from "./NormalInput.styles";
import { INormalInputUIProps } from "./NormalInput.types";
import { Controller } from "react-hook-form";

export default function NormalInputUI(props: INormalInputUIProps) {
    return (
        <Controller
            control={props.control}
            name="email"
            render={({ field: { onChange } }) => (
                <NormalInput
                        type={ props.type }
                        placeholder = { props.placeholder }
                        // { ...props.register }
                        onChange={(value) => { onChange(value) }}
                />
            )}
        />
    )
}