import { gql } from "@apollo/client";

export const FETCH_CATEGORY = gql`
    query fetchCategory {
        fetchCategory {
            id
            name
        }
    }
`

export const FETCH_FRIDGE_FOODS = gql`
    query fetchFridgeFoods($status: String) {
        fetchFridgeFoods(status: $status) {
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

export const UPDATE_FRIDGE_FOODS = gql`
    mutation updateFridgeFoods($fridgeFoodId: String!, $updateFridgeFoodInput: UpdateFridgeFoodInput!, $status: String!) {
        updateFridgeFoods(fridgeFoodId: $fridgeFoodId, updateFridgeFoodInput: $updateFridgeFoodInput, status: $status)
    }
`