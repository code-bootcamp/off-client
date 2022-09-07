import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($createUserInput:CreateUserInput!){
        createUser(createUserInput:$createUserInput){
            id
            name
            email
            nickname
            phone
        }
    }
`

export const GET_TOKEN = gql`
    mutation getToken($phone: String!) {
        getToken(phone: $phone)
    }
`

export const CHECK_VALID_TOKEN = gql`
    mutation checkValidToken($phone: String!, $token: String!) {
        checkValidToken(phone: $phone, token: $token)
    }
`