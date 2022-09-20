import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
    query fetchBoard($id: String!){
        fetchBoard(id: $id){
            id
            title
            contents
            expDate
            status
            salesLocation{
                address
                detailAddress
            }
            regDate
            user{
                name
                usersimage{
                    url
                }
            }
            category{
                name
            }
            boardImage{
                url
            }
        }
    }
`