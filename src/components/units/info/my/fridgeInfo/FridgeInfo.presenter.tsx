import { Wrapper } from "./FridgeInfo.styles";
import FridgeInfoItem from "./FridgeInfoItem";

export default function FridgeInfoUI(props) {
    return(
        <Wrapper>
            <FridgeInfoItem data={props.data}/>
        </Wrapper>
    )
}