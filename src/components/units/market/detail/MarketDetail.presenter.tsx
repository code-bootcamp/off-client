import { from } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { FormCol, FormRow, Thumb, Wrapper } from "./MarketDetail.styles";
import { v4 as uuidv4 } from 'uuid'
import { IMarketDetailUIProps } from "./MarketDetail.types";
import { ItemSlider } from "../../../../commons/styles/override";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import MarketWrite from "../write/MarketWrite.container";
import { timeForCreate } from "../../../../commons/libraries/timeForCreate";

export default function MarketDetailUI (props: IMarketDetailUIProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <Wrapper>
            <FormRow className="header" justify="start" align="middle">
                <FormCol className="user" xs = { 12 } sm = { 12 } md = { 12 } lg = {  12 } xl = { 12 } >
                    <Thumb src={`https://storage.googleapis.com/${props.data?.fetchBoard.user.usersimage?.url}`}/>
                    <div>
                        {props.data?.fetchBoard.user.name}
                    </div>
                    <div className="time">
                        {timeForCreate(props.data?.fetchBoard.regDate)}
                    </div>
                </FormCol>
                <FormCol className="tool" xs = { 12 } sm = { 12 } md = { 12 } lg = {  12 } xl = { 12 } >
                    <FontAwesomeIcon icon = { faPen } onClick = { props.onClickOpenMarketCreateModal(props.data?.fetchBoard) } />
                    <FontAwesomeIcon icon = { faTrash } />
                </FormCol>
            </FormRow>
            <FormRow gutter={[20,20]}>
                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 } >
                    <ItemSlider {...settings} >
                    {
                        props.data?.fetchBoard.boardImage.map(( el: { url:string } ) => (
                            el.url !== ""
                            ?
                            <div key={ uuidv4()} >
                                <img src={`https://storage.googleapis.com/${el.url}`}/>
                            </div>
                            :
                            undefined
                    ))}
                    </ItemSlider>
                </FormCol>
                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 12 } xl = { 12 } >
                    <div className="infoWrapper">
                        <div>
                            <label>상품명</label>
                            <span>{props.data?.fetchBoard.title}</span>
                        </div>
                        <div>
                            <label>유통기한</label>
                            <span>{getDate(props.data?.fetchBoard.expDate)}&nbsp;까지</span>
                        </div>
                        <div>
                            <label>카테고리</label>
                            <span>{props.data?.fetchBoard.category.name}</span>
                        </div>
                        <div>
                            <label>판매자 주소</label>
                            <span>{props.data?.fetchBoard.salesLocation.address +" "+props.data?.fetchBoard.salesLocation.detailAddress}</span>
                        </div>
                        <div>
                            <label>내용</label>
                            <p>{props.data?.fetchBoard.contents}</p>
                        </div>
                    </div>
                </FormCol>
            </FormRow>
        </Wrapper>
    )
}