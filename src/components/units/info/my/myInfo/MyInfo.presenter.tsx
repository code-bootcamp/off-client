
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import NormalButton from "../../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../../commons/inputs/normalInput/NormalInput.container";
import { InfoCol, InfoRow, UserThumb, Wrapper } from "./MyInfo.styles";

const INFO = [ "email", "name", "nickname", "phone" ]
export default function MyInfoUI(props) {
    const [userInfo]:any = useRecoilState(userInfoState)
    return(
        <Wrapper>
            <InfoRow justify="center" gutter={[0,40]}>
                <InfoCol xl={{span:10}} lg={{span:10}} md={{span:24}} sm={{span:24}} xs={{span:24}} >
                    <UserThumb>
                        {userInfo?.usersimage ? (
                            <img src={`storage.googleapis.com/${userInfo.usersimage}`}/>
                        ) : (
                            <img src="/images/thumb.png"/>
                        )}
                    </UserThumb>
                </InfoCol>
                <InfoCol xl={{span:10}} lg={{span:10}} md={{span:24}} sm={{span:24}} xs={{span:24}} >
                        {INFO.map(( el, i )=>( props.isEdit && (el === props.checkId)
                            ? (
                                <div key = { String(i)} id = { el } >
                                    <NormalInput
                                        type = "text"
                                        name = { el }
                                        placeholder = { `변경하실 ${el}을 적어주세요` }
                                        control = { props.control }
                                    />
                                    <NormalButton title = "확인" color = {"blue"} onClick = { props.onClickCheckValidToken } disabled={!props.isGetToken}/>
                                    <FontAwesomeIcon icon = { faXmark } onClick = { props.onClickCancel }  />
                                </div>
                            )
                            : (
                                <div key = { String(i)} id = { el }>
                                    <span>{ userInfo?.[ el ]}</span>
                                    <FontAwesomeIcon id={ el } icon = { faPen } onClick = { props.onClickToEdit }/>
                                </div>
                            )
                        ))}
                </InfoCol>
            </InfoRow>
        </Wrapper>
    )
}