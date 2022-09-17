import { gql } from "@apollo/client";

export const FETCH_FRIDGE_FOODS = gql`
    query {
        fetchFridgeFoods{
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