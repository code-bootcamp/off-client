import { gql } from "@apollo/client"

export const FETCH_CHAT_HISTORY = gql`
    query fetchChatHistory($chatRoomId: String!){
        fetchChatHistory(chatRoomId: $chatRoomId){
            id
            message
            createAt
            chatRoomId
            user{
                id
                email
                nickname
            }
        }
    }
`