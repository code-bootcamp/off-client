import { getDate } from "../../../../commons/libraries/utils"
import { BadgeRibbon, ItemImage, ItemInfo, Wrapper } from "../item/MarketItem.styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MarketListUI(props: any) {
    return (
        <BadgeRibbon text = { props.data?.salesLocation?.address.slice(0, 2) } color = '#1290FF'>
            <Wrapper>
                <ItemImage src = {`https://storage.googleapis.com/${props.data?.boardImage?.[0].url}`} />
                <ItemInfo>
                    <div className = "info-icon-box">
                        <FontAwesomeIcon icon = { props.getCategoryIcon(props.data?.category.name) } />
                        <p>{ props.data?.category.name }</p>
                    </div>
                    <p className = "title">{ props.data?.title }</p>
                    <p className = "expDate">{ getDate(props.data?.expDate) } 까지</p>
                </ItemInfo>
            </Wrapper>
        </BadgeRibbon>
    )
}