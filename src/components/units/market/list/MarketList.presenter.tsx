import { useForm } from "react-hook-form";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import NormalSelectBox from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.container";
import MarketItem from "../item/MarketItem.container";
import { Wrapper, Title, TitleInfo, SearchBox, ListRow, ListCol } from "./MarketList.styles";
import { MarketListUIProps } from "./MarketList.types";
import { v4 as uuidv4 } from 'uuid'

export default function MarketListUI(props: MarketListUIProps) {
    const { control, handleSubmit, formState, reset } = useForm({
        mode: "onChange",
    })

    return(
        <Wrapper>
            <Title>나눔마켓</Title>
            <TitleInfo>OFF회원들과 여러가지 제품을 나눠보세요.</TitleInfo>
            <SearchBox>
                <ListRow gutter = { 20 } justify = "space-between">
                    <ListCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 10 } xl = { 10 }>
                        <ListRow gutter = { 20 }>
                            <ListCol xs = { 24 } sm = { 12 } md = { 12 } lg = { 12 } xl = { 12 } className = "search-col">
                                <NormalSelectBox name = "location" placeholder = '지역' category = {[]} control = { control } defaultValue = { undefined } />
                            </ListCol>
                            <ListCol xs = { 24 } sm = { 12 } md = { 12 } lg = { 12 } xl = { 12 } className = "search-col">
                                <NormalSelectBox name = "location" placeholder = '카테고리' category = {[]} control = { control } defaultValue = { undefined } />
                            </ListCol>
                        </ListRow>
                    </ListCol>
                    <ListCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 } className = "search-col">
                        <NormalInput name = "title" type = 'text' placeholder = '이름을 검색해주세요' control = { control } defaultValue = { "" } />
                    </ListCol>
                </ListRow>
            </SearchBox>
            <ListRow gutter = { 20 }>
                { props.data?.fetchBoards.map((data: any, index: any) => (
                    <ListCol key = { uuidv4() } xs = { 24 } sm = { 12 } md = { 8 } lg = { 6 } xl = { 6 } className = "list-item">
                        <MarketItem data = { data } />
                    </ListCol>
                )) }
            </ListRow>
        </Wrapper>
    )
}