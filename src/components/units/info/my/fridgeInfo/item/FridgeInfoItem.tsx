import { getDate } from "../../../../../../commons/libraries/utils"
import { IFridgeFood } from "../../../../../../commons/types/generated/types"
import { Alarm, Category, Date, ExpDate, Info, Name, Price, Status, Wrapper } from "./FridgeInfoItem.styles"

interface IFridgeInfoItemProps {
    data: IFridgeFood
}

export default function FridgeInfoItem(props: IFridgeInfoItemProps) {
    const status = (status:string) => {
        if(status === "LIST" ) return "목록"
        if(status === "FRIDGE") return "냉장"
        if(status === "FREEZER") return "냉동"
    }
    return(
        <Wrapper>
            <Info>
                <Status>
                    <span>보관</span>
                    {status(props.data?.status)}
                </Status>
                <Category>
                    <span>카테고리</span>
                    {props.data?.category.name}
                </Category>
                <Name>
                    <span>상품명</span>
                    {props.data?.name}
                </Name>
                <Price>
                    <span>가격</span>
                    {props.data?.price.toLocaleString()}
                </Price>
            </Info>
            <Date>
                <Alarm>
                    <span>알림기한</span>
                    {getDate(props.data?.alarm)}
                </Alarm>
                <ExpDate>
                    <span>유통기한</span>
                    {getDate(props.data?.expDate)}
                </ExpDate>
            </Date>
        </Wrapper>
    )
}