import { ListItem, ListWrapper, Wrapper } from "./FridgeInfo.styles";
import FridgeInfoItem from "./item/FridgeInfoItem";
import { v4 as uuidv4} from 'uuid'
import { IFridgeInfoUIProps } from "./FridgeInfo.types";
import NormalButton from "../../../../commons/buttons/normalButton/normalButton.container";
import InfiniteScroll from "react-infinite-scroller";

export default function FridgeInfoUI(props: IFridgeInfoUIProps) {
    return(
        <Wrapper>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onFetchMore}
                    hasMore={true}
                    useWindow={true}
                >
            <ListWrapper gutter={[10,20]}>
                    {props.data?.fetchFridgeFoods.map((el)=>(
                        <ListItem xl={{span:8}} lg={{span:12}} md={{span:12}} sm={{span:24}} xs={{span:24}} key={ uuidv4() }>
                            <FridgeInfoItem data={ el }/>
                            {/* <div>test</div> */}
                        </ListItem>
                    ))||<div></div>}
            </ListWrapper>
                </InfiniteScroll>
            <NormalButton title="냉장고 관리하러 가기" color="blue" onClick={ props.onClickToFridge }/>
        </Wrapper>
    )
}