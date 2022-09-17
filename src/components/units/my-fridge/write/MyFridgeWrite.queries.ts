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
    mutation createFridgeFood($fridgeFoodInput: CreateFridgeFoodInput!, $status: String!) {
        createFridgeFood(fridgeFoodInput: $fridgeFoodInput, status: $status) {
            id
            name
            price
            expDate
            regDate
            alarm
        } 
    }
`

export const UPDATE_FRIDGE_FOODS = gql`
    mutation updateFridgeFoods($fridgeFoodId: String!, $updateFridgeFoodInput: UpdateFridgeFoodInput!, $status: String!) {
        updateFridgeFoods(fridgeFoodId: $fridgeFoodId, updateFridgeFoodInput: $updateFridgeFoodInput, status: $status)
    }
`