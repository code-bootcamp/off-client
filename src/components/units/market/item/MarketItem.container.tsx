import MarketItemUI from "./MarketItem.presenter";
import { IMarketItemProps } from "./MarketItem.types";
import { 
    faDrumstickBite, 
    faAppleWhole,
    faCarrot,
    faIceCream,
    faFish,
    faCheese, 
    faSeedling
} from '@fortawesome/free-solid-svg-icons'

export default function MarketItem(props: IMarketItemProps) {
    const getCategoryIcon = (categoryName: string) => {
        let result
        switch(categoryName) {
            case "육류":
                result = faDrumstickBite
                break;
            case "어패류":
                result = faFish
                break;
            case "과일류":
                result = faAppleWhole
                break;
            case "기타":
                result = faSeedling
                break;
            case "냉동식품":
                result = faIceCream
                break;
            case "유제품":
                result = faCheese
                break;
            case "채소류":
                result = faCarrot
                break;
        }

        return result
    }

    return (
        <MarketItemUI data = { props.data } getCategoryIcon = { getCategoryIcon } />
    )
}