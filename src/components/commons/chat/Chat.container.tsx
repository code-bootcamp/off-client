import ChatUI from "./Chat.presenter";
import io, { Socket } from "socket.io-client"
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, roomIdState } from "../../../commons/store";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { FETCH_CHAT_HISTORY } from "./Chat.queries";
import { useForm } from "react-hook-form";


export default function Chat(props){
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [accessToken] = useRecoilState(accessTokenState);
    const [roomId] = useRecoilState(roomIdState)
    const router = useRouter();
    const [nickname, setNickName] = useState<string | undefined>("");
    const [room, setRoom] = useState<string>("");
    const [userId, setUserId] = useState<string | undefined>("");
    const [resultMsg, setResultMsg] = useState<string[]>([]);
    const { data } = useQuery(FETCH_CHAT_HISTORY, {
        variables: { chatRoomId: room },

    });
    console.log("123",data)

    const url = "https://freshfridge.shop/chat"
    const socket: Socket = useMemo(()=> io(url, { transports: ["websocket"] }),[])


    //  const socket: Socket = io(url);

  const delay = (ms:number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });



  useEffect(() => {
      if(props.isWriter){
          setUserId(props.user?.fetchUserLoggedIn.id);
          setRoom(props.chatRoomId);
          setNickName(props.user?.fetchUserLoggedIn.nickname);
        }else{
            setUserId(props.user?.fetchUserLoggedIn.id);
            setRoom(`${String(router.query.marketId).split("-")[0]}:${userId?.split("-")[0]}`);
            setNickName(props.user?.fetchUserLoggedIn.nickname);

        }
        console.log("userId:",userId,"room:",room,"nickname:",nickname)
    },[props.user,props.toggle]);

    const onClickSubmit = async (data:any) => {
        if(!room)return console.log("noRoom!!")
        console.log("전송할때",data)
        const message = await data.contents;
        socket.emit('message', userId, room, router.query.marketId)
        socket.emit('send', room, userId, message);
        resetField("contents");
    };
    console.log("??",userId, room, router.query.marketId)
    useEffect(() => {
        socket.on(room, (data) => {
            console.log('socket-on', data)
            setResultMsg((prev:string[]) => [...prev, data]);
        })
    }, [room]);
    const onKeyDown = (event:KeyboardEvent) => (data:any) => {
    if (event.key === "Enter") {
      onClickSubmit(data);
    }
  };

    return<ChatUI
        toggle = {props.toggle}
        onClickSubmit = { onClickSubmit }
        onKeyDown = { onKeyDown }
        register = { register }
        handleSubmit = { handleSubmit }
        data = { data }
        accessToken = { accessToken }
        resultMsg = { resultMsg }
        messagesEndRef = { messagesEndRef }
        userId = { userId }
        nickname = { nickname }
    />
}