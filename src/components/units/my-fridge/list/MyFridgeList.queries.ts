import { gql } from "@apollo/client";

export const FETCH_CREATED_FRIDGE_FOODS = gql`
    query fetchCreatedFridgeFoods {
        fetchCreatedFridgeFoods {
            id
            name
            price
            expDate
            regDate
            alarm
            status
            fridge
            category
        }
    }
`