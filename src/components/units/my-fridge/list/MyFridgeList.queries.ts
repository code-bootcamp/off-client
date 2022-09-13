import { gql } from "@apollo/client";

export const FETCH_CATEGORY = gql`
    query fetchCategory {
        fetchCategory {
            id
            name
        }
    }
`

export const FETCH_CREATED_FRIDGE_FOODS = gql`
    query fetchCreatedFridgeFoods {
        fetchCreatedFridgeFoods {
            id
            name
            price
            expDate
            regDate
            alarm
            category {
                id
                name
            }
        }
    }
`

export const CREATE_FRIDGE_FOOD = gql`
    mutation createFridgeFood($fridgeFoodInput: CreateFridgeFoodInput!, $status: String) {
        createFridgeFood(fridgeFoodInput: $fridgeFoodInput, status: $status) {
            id
            name
            price
            expDate
            alarm
        } 
    }
`