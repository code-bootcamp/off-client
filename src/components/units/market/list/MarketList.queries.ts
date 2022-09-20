import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            id
            title
            contents
            expDate
            salesLocation {
                id
                address
                detailAddress
            }
            category {
                id
                name
            }
            boardImage {
                id
                url
            }
        }
    }
`