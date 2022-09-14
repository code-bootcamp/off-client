import { gql } from "@apollo/client";

export const FETCH_CATEGORY = gql`
    query fetchCategory {
        fetchCategory {
            id
            name
        }
    }
`

export const CREATE_FRIDGE_FOOD = gql`
    mutation createFridgeFood($fridgeFoodInput: CreateFridgeFoodInput!) {
        createFridgeFood(fridgeFoodInput: $fridgeFoodInput) {
            id
            name
            price
            expDate
            alarm
        } 
    }
`