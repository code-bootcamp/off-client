
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { phoneNumber } from "../../../../../commons/libraries/phone";
import { userInfoState } from "../../../../../commons/store";
import NormalButton from "../../../../commons/buttons/normalButton/normalButton.container";
import Error from "../../../../commons/error";
import NormalInput from "../../../../commons/inputs/normalInput/NormalInput.container";
import { InfoCol, InfoRow, UserThumb, Wrapper } from "./MyInfo.styles";
import { IMyInfoProps } from "./MyInfo.types";

const INFO = [
        { name: "아이디", value: "email" },
        { name: "이름", value: "name" },
        { name: "닉네임", value: "nickname" },
        { name: "전화번호", value: "phone" },
    ]
const EDIT = [
        { name: "아이디", value: "email" },
        { name: "이름", value: "name" },
        { name: "닉네임", value: "nickname" },
        { name: "전화번호", value: "phone" },
        { name: "비밀번호", value: "password" },
        { name: "비밀번호확인", value: "passwordRe" },
    ]
export default function MyInfoUI(props:IMyInfoProps) {
    const [userInfo, setUserInfo]:any = useRecoilState(userInfoState)

    return(
        <Wrapper>
            <InfoRow justify="end" >
                    {props.isEdit
                        ? <FontAwesomeIcon icon = { faXmark } onClick = { props.onClickCancel }  />
                        : <FontAwesomeIcon icon = { faPen } onClick = { props.onClickToEdit }/>
                    }
            </InfoRow>
            <InfoRow justify="center" gutter={[0,40]}>
                <InfoCol xl={{span:10}} lg={{span:10}} md={{span:24}} sm={{span:24}} xs={{span:24}} >
                    <UserThumb>
                        { props.isEdit
                            ?
                            <div>
                                    { props.imageUrl
                                        ? <img src={props.imageUrl}/>
                                        : (
                                            userInfo?.usersimage
                                            ? <img src={`https://storage.googleapis.com/${userInfo.usersimage.url}`}/>
                                            : <img src="/images/thumb.png"/>
                                            )

                                    }
                                    <FontAwesomeIcon icon = { faPen } onClick = { props.onClickImageEdit }/>
                                    <input
                                        style={{ display: "none" }}
                                        type="file"
                                        id={"thumb"}
                                        ref={props.fileRef}
                                        onChange={props.onChangeFile}
                                    />
                                </div>
                            :
                                <div>
                                    {userInfo?.usersimage
                                        ? <img src={`https://storage.googleapis.com/${userInfo.usersimage.url}`}/>
                                        : <img src="/images/thumb.png"/>
                                    }
                                </div>
                        }
                    </UserThumb>
                </InfoCol>
                <InfoCol xl={{span:10}} lg={{span:10}} md={{span:24}} sm={{span:24}} xs={{span:24}} >
                        { props.isEdit
                            ? <form>
                                { EDIT.map(( el, i )=>(
                                    <div key = { String(i)} id = { el.value } >
                                        <span>{ el.name }</span>
                                        <NormalInput
                                            type = { el.value === "password" || el.value === "passwordRe" ? "password" : "text" }
                                            name = { el.value }
                                            placeholder = { el.name }
                                            control = { props.control }
                                            defaultValue = { userInfo?.[ el.value ] }
                                        />
                                        <Error message = { props.formState.errors?.[el?.value]?.message } />
                                    </div>
                                ))}
                                <NormalButton title = "확인" color = {"blue"} onClick = { props.handleSubmit(props.onClickUpdate) } disabled={!props.formState.isValid}/>
                            </form>
                            : INFO.map(( el, i )=>(
                                    <div key = { String(i)} id = { el.value }>
                                        <span>{ el.name }</span>
                                        { el.value!=="phone"
                                            ? <span>{ userInfo?.[ el.value ] }</span>
                                            : <span>{ phoneNumber(userInfo?.[ el.value ]) }</span>
                                        }
                                    </div>
                                )
                            )}
                </InfoCol>
            </InfoRow>
        </Wrapper>
    )
}