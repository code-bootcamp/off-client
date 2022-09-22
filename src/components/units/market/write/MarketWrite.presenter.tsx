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
                            <NormalSelectBox name = "category" readonly = { true } placeholder = '카테고리를 선택해주세요' category = { props.category?.fetchCategory } control = { props.control } defaultValue = { props.marketCreateData?.category?.id }/>
                            { props.formState.errors.category?.message && <Error message = { props.formState.errors.category?.message }/> }
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalInput readonly = { true } name = "name" type = 'text' placeholder = '상품명을 입력해주세요' control = { props.control } defaultValue = { props.marketCreateData ? props.marketCreateData?.name : "" } />
                            { props.formState.errors.name?.message && <Error message = { props.formState.errors.name?.message }/> }
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalDatePicker readonly = { true } name = "expDate" placeholder = '유효기간을 설정해주세요' control = { props.control } defaultValue = { props.editData?.expDate ? getDate(props.editData.expDate) : getDate(props.marketCreateData?.expDate) } />
                            { props.formState.errors.expDate?.message && <Error message = { props.formState.errors.expDate?.message }/> }
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 } >
                            <NormalInput readonly = { true } name = "price" type = 'text' placeholder = '가격을 입력해주세요' control = { props.control } defaultValue = { props.marketCreateData?.price } />
                            { props.formState.errors.price?.message && <Error message = { props.formState.errors.price?.message }/> }
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10} >
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } >
                            <TextAreaInput name = "contents" placeholder = '내용을 입력해주세요' control = { props.control } defaultValue = { "" }  />
                            { props.formState.errors.contents?.message && <Error message = { props.formState.errors.contents?.message }/> }
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={10}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <KaKaoMap address = { props.address } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <FormRow className = "address-row">
                                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } className = "address-input">
                                    <NormalButton title = '주소 검색' color = 'blue' onClick = {props.onClickAddressOpen} />
                                </FormCol>
                                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } className = "address-input">
                                    <AddressInput type = 'text' placeholder = '주소를 입력해주세요' value={props.address} readOnly />
                                    { props.formState.errors.address?.message && <Error message = { props.formState.errors.address?.message }/> }
                                </FormCol>
                                <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                                    <AddressInput type = 'text' placeholder = '상세주소를 입력해주세요' {...props.register("detailAddress")} defaultValue = { "" } />
                                </FormCol>
                            </FormRow>
                            { props.isAddressOpen && (
                                <Modal
                                    title="주소 검색"
                                    visible={true}
                                    onOk={props.onClickAddressOpen}
                                    onCancel={props.onClickAddressOpen}
                                    >
                                    <DaumPostcodeEmbed onComplete={props.onCompletePostcode} />
                                </Modal>
                            )}
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
                            <NormalButton title = "등록" color = 'blue' onClick = { props.handleSubmit(props.onClickSubmit)} />
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