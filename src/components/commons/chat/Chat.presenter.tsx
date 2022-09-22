import { ChatBox, ChatContents, ChatWrite, Header, LeftSide, Msg, RightSide, SubmitBtn, Wrapper, WriteWrapper } from "./Chat.styles";
import { v4 as uuidv4 } from 'uuid'
export default function ChatUI(props: any) {
    return(
        <ChatBox>
            <Wrapper className={props.toggle ? "on" : "off" } onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <Header>
                    <div className="to">ㅇㅇㅇ</div>
                </Header>
                <ChatContents>
                    {props.data?.fetchChatHistory.map((el: any)=>(
                        <div key={uuidv4()} >
                                {el.user.id===props.userId
                                    ? (
                                        <RightSide className="right">
                                            <Msg ref={props.messagesEndRef} >
                                                {el.message}
                                            </Msg>
                                        </RightSide>
                                    )
                                    : (
                                        <LeftSide className="left">
                                            <span>ㅇㅇㅇ</span>
                                            <Msg ref={props.messagesEndRef}>
                                                {`${el.user.nickname}: ${el.message}`}
                                            </Msg>
                                        </LeftSide>
                                    )
                                }
                        </div>
                    ))}
                     {props.resultMsg.map((el: any) => (
                        <div key={uuidv4()}>
                            {el[0] === props.nickname ? (
                            <RightSide>
                                <Msg ref={props.messagesEndRef}>{el[1]}</Msg>
                            </RightSide>
                            ) : (
                            <LeftSide>
                                <Msg
                                ref={props.messagesEndRef}
                                >{`${el[0]}: ${el[1]}`}</Msg>
                            </LeftSide>
                            )}
                        </div>
                        ))}
                </ChatContents>
                <WriteWrapper>
                    <ChatWrite
                        type="text"
                        onKeyDown={props.onKeyDown}
                        {...props.register("contents")}
                        />
                    <SubmitBtn  >
                        전송
                    </SubmitBtn>
                </WriteWrapper>
            </Wrapper>
        </ChatBox>
    )
}