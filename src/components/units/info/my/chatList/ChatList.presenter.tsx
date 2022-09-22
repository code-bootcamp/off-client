import { ListItem, ListWrapper, Wrapper } from "./ChatLIst.styles";
import { v4 as uuidv4} from 'uuid'
import Chat from "../../../../commons/chat/Chat.container";

export default function ChatListUI(props){
    return(
        <Wrapper>
            <Chat
                toggle = { props.toggle }
                user = { props.user }
                isWriter = { props.isWriter }
                chatRoomId = { props.chatRoomId }
            />
            <ListWrapper gutter={[10,20]}>
                    {props.data?.fetchMyChattingList.map((el)=>(
                        <ListItem xl={{span:8}} lg={{span:12}} md={{span:12}} sm={{span:24}} xs={{span:24}} key={ uuidv4() } >
                            <div id={el.chatRoomId} onClick={ props.onClickToChat }>{el.message}</div>
                        </ListItem>
                    ))||<div></div>}
            </ListWrapper>
        </Wrapper>
    )
}