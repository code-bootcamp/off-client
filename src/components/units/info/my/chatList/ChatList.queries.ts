import { gql } from "@apollo/client";


export const FETCH_CHATTING_LIST = gql`
    query fetchMyChattingList{
        fetchMyChattingList{
            id
            message
            chatRoomId
        }
    }
`