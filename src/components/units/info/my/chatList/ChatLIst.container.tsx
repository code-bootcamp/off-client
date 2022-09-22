import { useQuery } from "@apollo/client"
import { MouseEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { userInfoState } from "../../../../../commons/store"
import { FETCH_USER_LOGGED_IN } from "../myInfo/MyInfo.queries"
import ChatListUI from "./ChatList.presenter"
import { FETCH_CHATTING_LIST } from "./ChatList.queries"

export default function ChatListContainer() {
    const [toggle, setToggle] = useState(false)
    const [isWriter, setIsWriter] = useState(true)
    const [chatRoomId, setChatRoomId] = useState("")
    const {data} = useQuery(FETCH_CHATTING_LIST)
    const {data:userData} = useQuery(FETCH_USER_LOGGED_IN)
    const onClickToChat = (e:any) => {
        setChatRoomId(e.target.id)
        console.log("22dd",e.target.id)
        setToggle( prev => !prev )
    };
    console.log(data)
    return<ChatListUI
        data = { data }
        toggle = { toggle }
        user = { userData }
        isWriter = {isWriter}
        chatRoomId = { chatRoomId }
        onClickToChat = { onClickToChat }
    />
}