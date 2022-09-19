import { faSnowflake } from "@fortawesome/free-regular-svg-icons"
import { faAppleWhole, faCarrot, faCheese, faDrumstickBite, faFish, faSeedling, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { getDate } from "../../../../../../commons/libraries/utils"
import { IFridgeFood } from "../../../../../../commons/types/generated/types"
import { Category, ExpDate, Info, Name, Price, Status, Wrapper } from "./FridgeInfoItem.styles"

interface IFridgeInfoItemProps {
    data: IFridgeFood
}

export default function FridgeInfoItem(props: IFridgeInfoItemProps) {
    const status = (status:string) => {
        if(status === "LIST" ) return "목록"
        if(status === "FRIDGE") return "냉장"
        if(status === "FREEZER") return "냉동"
    }
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
                result = faSnowflake
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
    const [short, setShort] = useState(false)
    const colSize = useMediaQuery({ query: `(max-Width: 330px)`})
    useEffect(()=>{
        if(colSize)setShort(true)
        if(!colSize)setShort(false)
    },[colSize])

    return(
        <Wrapper>
            <Status>
                {status(props.data?.status)}
            </Status>
            <Info>
                <Category>
                    <FontAwesomeIcon icon={ getCategoryIcon(props.data?.category.name) || faSpinner  }/>
                </Category>
                <Name>
                    <span className="name" >{props.data?.name}</span>
                </Name>
                <Price>
                    {props.data?.price.toLocaleString()}<span>&nbsp;원</span>
                </Price>
            </Info>
            <ExpDate>
                {short ? getDate(props.data?.expDate).substring(2) : getDate(props.data?.expDate)}<span>&nbsp;까지</span>
            </ExpDate>
        </Wrapper>
    )
}