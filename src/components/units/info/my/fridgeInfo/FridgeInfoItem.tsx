import styled from "@emotion/styled"
import { getDate } from "../../../../../commons/libraries/utils"

const Wrapper = styled.div`
    display: flex;
`
const Name = styled.div`

`
const Price = styled.div`

`
const ExpDate = styled.div`

`
const Alarm = styled.div`

`
const Status = styled.div`

`
const Category = styled.div`

`
export default function FridgeInfoItem(props) {

    return(
        <Wrapper>
            <Status>
                <span>보관</span>
                {props.data?.fetchFridgeFoods[0].status}
            </Status>
            <Category>
                <span>카테고리</span>
                {props.data?.fetchFridgeFoods[0].category.name}
            </Category>
            <Name>
                <span>상품명</span>
                {props.data?.fetchFridgeFoods[0].name}
            </Name>
            <Price>
                <span>가격</span>
                {props.data?.fetchFridgeFoods[0].price.toLocaleString()}
            </Price>
            <Alarm>{getDate(props.data?.fetchFridgeFoods[0].alarm)}</Alarm>
            <ExpDate>{getDate(props.data?.fetchFridgeFoods[0].expDate)}</ExpDate>
        </Wrapper>
    )
}