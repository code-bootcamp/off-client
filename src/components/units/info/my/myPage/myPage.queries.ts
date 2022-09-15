import { gql } from "@apollo/client";

export const FETCH_FRIDGE_FOODS = gql`
    query fetchFridgeFoods($page: Int, $status: String){
        fetchFridgeFoods(page: $page, status: $statue){
            id
            name
            price
            exDate
            regDate
            alarm
            status
        }
    }
`