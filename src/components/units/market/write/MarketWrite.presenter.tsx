import { AddressInput, FormCol, FormRow, WriteModal } from "./MarketWrite.styles";
import { MarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";
import PreviewUpload from "../../../commons/uploads/previewUpload/PreviewUpload.container";
import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import TextAreaInput from "../../../commons/inputs/textAreaInput/TextAreaInput.container";
import NormalSelectBox from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.container";
import KaKaoMap from "../../../commons/maps/kakao-map";
import NormalDatePicker from "../../../commons/datepickers/normalDatePicker/NormalDatePicker.container";
import { getDate } from "../../../../commons/libraries/utils";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import Error from "../../../commons/error";

export default function MarketWriteUI(props: MarketWriteUIProps) {
    return (
        <>
            <WriteModal title = "나눔마켓 등록"
            visible = { props.isMarketCreateModalOpen }
            footer = { null }
            maskClosable = { false }
            destroyOnClose = { true }
            >
                <form>
                    <FormRow gutter={10}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalSelectBox name = "category" placeholder = '카테고리를 선택해주세요' category = { props.category?.fetchCategory } control = { props.control } defaultValue = { props.marketCreateData?.category?.id }/>
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalInput name = "name" type = 'text' placeholder = '상품명을 입력해주세요' control = { props.control } defaultValue = { props.marketCreateData ? props.marketCreateData?.name : "" } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalDatePicker name = "expDate" placeholder = '유효기간을 설정해주세요' control = { props.control } defaultValue = { props.editData?.expDate ? getDate(props.editData.expDate) : getDate(props.marketCreateData?.expDate) } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalInput name = "price" type = 'text' placeholder = '가격을 입력해주세요' control = { props.control } defaultValue = { props.marketCreateData?.price } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10} >
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } >
                            <TextAreaInput name = "contents" placeholder = '내용을 입력해주세요' control = { props.control } defaultValue = { "" }  />
                            <Error message = { props.formState.errors.contents?.message }/>
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <KaKaoMap address = { props.address } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <div className="address" >
                                <NormalButton title = '주소 검색' color = 'blue' onClick = {props.onClickAddressOpen} />
                                <AddressInput type = 'text' placeholder = '주소를 입력해주세요' value={props.address} readOnly />
                                <Error message = { props.formState.errors.address?.message }/>
                                <AddressInput type = 'text' placeholder = '상세주소를 입력해주세요' {...props.register("detailAddress")} defaultValue = { "" } />
                                {props.isAddressOpen && (
                                    <Modal
                                        title="주소 검색"
                                        visible={true}
                                        onOk={props.onClickAddressOpen}
                                        onCancel={props.onClickAddressOpen}
                                    >
                                        <DaumPostcodeEmbed onComplete={props.onCompletePostcode} />
                                    </Modal>
                                )}
                            </div>
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10} >
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } >
                            <div className="imageWrapper">
                                { props.fileUrls.map((el: any, index: any) => (
                                    <PreviewUpload
                                        key = { uuidv4() }
                                        index = { index }
                                        fileUrl = { el }
                                        onChangeFileUrls = { props.onChangeFileUrls }
                                    />
                                ))}
                            </div>
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10} >
                    <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalButton title = { "등록" } color = 'blue' onClick = { props.handleSubmit(props.onClickSubmit)} />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalButton title = '취소' color = 'red' onClick = { props.onClickCancelWriteModal } />
                        </FormCol>
                    </FormRow>
                </form>
            </WriteModal>
        </>
    )
}