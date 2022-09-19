import { gql } from "@apollo/client";

export const FETCH_FRIDGE_FOODS = gql`
    query fetchFridgeFoods($page: Int){
        fetchFridgeFoods(page: $page){
            id
            name
            price
            expDate
            regDate
            alarm
            status
            category{
                id
                name
            }
        }
    }
`