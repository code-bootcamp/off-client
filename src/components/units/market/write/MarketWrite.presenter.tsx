import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import TextAreaInput from "../../../commons/inputs/textAreaInput/TextAreaInput.container";
import KaKaoMap from "../../../commons/maps/kakao-map";
import NormalSelectBox from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.container";
import PreviewUpload from "../../../commons/uploads/previewUpload/PreviewUpload.container";
import { FormCol, FormRow, Wrapper } from "./MarketWrite.styles";
import { MarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props: MarketWriteUIProps) {
    return (
        <Wrapper>
            <form>
                <FormRow gutter = { 20 }>
                    <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                        <NormalSelectBox name = "category" placeholder = '카테고리를 선택해주세요' category = { props.category?.fetchCategory } control = { props.control } defaultValue = { props.data?.category?.id }/>
                    </FormCol>
                </FormRow>
                <FormRow gutter = { 20 }>
                    <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                        <NormalInput name = "name" type = 'text' placeholder = '상품명을 입력해주세요' control = { props.control } defaultValue = { props.data ? props.data?.name : "" } />
                    </FormCol>
                    <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                        <NormalInput name = "price" type = 'text' placeholder = '가격을 입력해주세요' control = { props.control } defaultValue = { props.data?.price } />
                    </FormCol>
                </FormRow>
                <FormRow gutter = { 20 }>
                    <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                        <TextAreaInput name = "contents" placeholder = '내용을 입력해주세요' control = { props.control } defaultValue = { "" }  />
                    </FormCol>
                </FormRow>
                <FormRow gutter = { 20 }>
                    <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                        {/* <KaKaoMap address = { props.address } /> */}
                    </FormCol>
                    <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                        <FormRow className = "margin-reset">
                            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } className = "is-margin">
                                <NormalButton title = '주소 검색' color = 'blue' onClick = {() => {}} />
                            </FormCol>
                            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } className = "is-margin">
                                <NormalInput name = "salesLocations.address" type = 'text' placeholder = '주소를 입력해주세요' control = { props.control } defaultValue = { "" } />
                            </FormCol>
                            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                                <NormalInput name = "salesLocations.detailAddress" type = 'text' placeholder = '상세주소를 입력해주세요' control = { props.control } defaultValue = { "" } />
                            </FormCol>
                        </FormRow>
                    </FormCol>
                </FormRow>
                <FormRow gutter={20}>
                    { props.fileUrls.map((el: any, index: any) => (
                        <FormCol key = { uuidv4() } xs = { 8 } sm = { 8 } md = { 8 } lg = { 8 } xl = { 6 }>
                            <PreviewUpload
                                index = { index }
                                fileUrl = { el }
                                onChangeFileUrls = { props.onChangeFileUrls }
                            />
                        </FormCol>
                    )) }
                </FormRow>
                <button type = "button" onClick = { props.handleSubmit(props.onClickCreate) }>테스트</button>
            </form>
        </Wrapper>
    )
}