
import MarketItem from "../item/MarketItem.container";
import { Wrapper, Title, TitleInfo, ListWrapper, ItemWrapper } from "./MarketList.styles";

export default function MarketListUI() {
    return(
        <Wrapper>
            <Title>나눔마켓</Title>
            <TitleInfo>OFF회원들과 여러가지 제품을 나눠보세요.</TitleInfo>
            <ListWrapper gutter={[16,40]}>
                {new Array(20).fill("test").map((el,i)=>(
                    <ItemWrapper xl={{span:6}} lg={{span:8}} md={{span:12}} sm={{span:12}} xs={{span:24}} key={i}>
                        <MarketItem el={el} i={i}/>
                    </ItemWrapper>
                ))}
            </ListWrapper>
        </Wrapper>
    )
}