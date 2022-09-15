import { gql } from "@apollo/client";

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

export const UPLOAD_FILE = gql`
    mutation uploadFile($files:[Upload!]!){
        uploadFile(files:$files)
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($updateUserInput: updateUserInput!){
        updateUser(updateUserInput:$updateUserInput){
            id
            name
            email
            nickname
            phone
        }
    }
`