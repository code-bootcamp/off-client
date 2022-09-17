import { Wrapper } from "./FridgeInfo.styles";
import FridgeInfoItem from "./item/FridgeInfoItem";
import { v4 as uuidv4} from 'uuid'
import { IFridgeInfoUIProps } from "./FridgeInfo.types";
import NormalButton from "../../../../commons/buttons/normalButton/normalButton.container";

export default function FridgeInfoUI(props: IFridgeInfoUIProps) {
    return(
        <Wrapper>
            {
                props.data?.fetchFridgeFoods.map((el)=>(
                    <FridgeInfoItem key={uuidv4()} data={el}/>
                ))
            }
            <NormalButton title="냉장고 관리하러 가기" color="blue" onClick={ props.onClickToFridge }/>
        </Wrapper>
    )
}