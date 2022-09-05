import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email:String!, $password:String!){
        login(email:$email, password:$password)
    }
`
export const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
        fetchUserLoggedIn{
            id
            name
            email
            nickname
            phone
        }
    }
`