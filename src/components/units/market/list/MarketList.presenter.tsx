import { useForm } from "react-hook-form";
import { NormalInput } from "../../../commons/inputs/normalInput/NormalInput.styles";
import { NormalSelectBox}  from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.styles";
import MarketItem from "../item/MarketItem.container";
import { Wrapper, Title, TitleInfo, SearchBox, ListRow, ListCol, NoSearch } from "./MarketList.styles";
import { MarketListUIProps } from "./MarketList.types";
import { v4 as uuidv4 } from 'uuid'
import { Select, Result } from 'antd';

const { Option } = Select

export default function MarketListUI(props: MarketListUIProps) {
    return(
        <Wrapper>
            <Title>나눔마켓</Title>
            <TitleInfo>OFF회원들과 여러가지 제품을 나눠보세요.</TitleInfo>
            <SearchBox>
                <ListRow gutter = { 20 } justify = "space-between">
                    <ListCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 10 } xl = { 10 }>
                        <ListRow gutter = { 20 }>
                            <ListCol xs = { 24 } sm = { 12 } md = { 12 } lg = { 12 } xl = { 12 } className = "search-col">
                                <NormalSelectBox placeholder = "지역" onChange = { props.onChangeLocation }>
                                    { props.location.map((el: any) => (
                                        <Option key = { uuidv4() } value = { el.name }>{ el.name }</Option>
                                    )) }
                                </NormalSelectBox>
                            </ListCol>
                            <ListCol xs = { 24 } sm = { 12 } md = { 12 } lg = { 12 } xl = { 12 } className = "search-col">
                                <NormalSelectBox placeholder = "카테고리" onChange = { props.onChangeCategory }>
                                    { props.category?.fetchCategory.map((el: any) => (
                                        <Option key = { uuidv4() } value = { el.name }>{ el.name }</Option>
                                    )) }
                                </NormalSelectBox>
                            </ListCol>
                        </ListRow>
                    </ListCol>
                    <ListCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 14 } xl = { 14 } className = "search-col">
                        <NormalInput name = "title" type = 'text' placeholder = '이름을 검색해주세요' onChange = { props.onChangeInput } />
                    </ListCol>
                </ListRow>
            </SearchBox>
            <ListRow gutter = { 20 }>
                { props.data?.length > 0 ? 
                props.data?.map((data: any, index: any) => (
                    <ListCol key = { uuidv4() } xs = { 24 } sm = { 12 } md = { 8 } lg = { 6 } xl = { 6 } className = "list-item" onClick = { props.onClickMoveDetail(data.id) }>
                        <MarketItem data = { data } />
                    </ListCol>
                )) 
                : 
                <NoSearch title = "검색결과가 없습니다"></NoSearch> 
                }
            </ListRow>
        </Wrapper>
    )
}