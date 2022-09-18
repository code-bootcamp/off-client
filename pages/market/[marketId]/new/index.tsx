import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

const FETCH_FRIDGE_FOOD_ONE = gql`
    query fetchFridgeFoodOne($foodId: String!) {
        fetchFridgeFoodOne(foodId: $foodId) {
            id
            name
            price
            expDate
            category {
                id
                name
            }
        }
    }
`

export default function MarketNewPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_FRIDGE_FOOD_ONE, {
        variables: {
            foodId: router.query.marketId
        }
    })

    return (
        <MarketWrite data = { data } />
    )
}