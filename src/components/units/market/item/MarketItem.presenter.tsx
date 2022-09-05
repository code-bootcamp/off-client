import { ItemImage, ItemInfo, Wrapper } from "../item/MarketItem.styles"

export default function MarketListUI(props: any) {
    return(
        <Wrapper>
            <ItemImage src="/images/food.jpeg"/>
            <ItemInfo>
                <span>카테고리</span>
                <span>{props.el+props.i}</span>
                <span>가격</span>
                <span>유통기한</span>
            </ItemInfo>
        </Wrapper>
    )
}