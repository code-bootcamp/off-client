import { FormCol, FormRow, WriteModal } from "./MyFridgeWrite.styles";
import NormalButton from "../../../commons/buttons/normalButton/normalButton.container"
import NormalDatePicker from "../../../commons/datepickers/normalDatePicker/NormalDatePicker.container"
import Error from "../../../commons/error"
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container"
import NormalSelectBox from "../../../commons/selectBoxes/normalSelectBox/NormalSelectBox.container"
import { MyFridgeWriteUIProps } from "./MyFridgeWrite.types";
import { getDate } from "../../../../commons/libraries/utils";

export default function MyFridgeWriteUI(props: MyFridgeWriteUIProps) {
    return (
        <>
            <WriteModal title = { props.isEdit ? "상품 수정" : "상품 등록" }
            visible = { props.isWriteModalOpen }
            footer = { null }
            maskClosable = { false } 
            destroyOnClose = { true }
            >
                <form>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput name = "name" type = 'text' placeholder = '상품명을 입력해주세요' control = { props.control } defaultValue = { props.editData.name ? props.editData.name : "" } />
                            <Error message = { props.formState.errors.name?.message } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalInput name = "price" type = 'text' placeholder = '가격을 입력해주세요' control = { props.control } defaultValue = { props.editData.price ? props.editData.price : null } />
                            <Error message = { props.formState.errors.price?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalSelectBox name = "category" placeholder = '카테고리를 선택해주세요' category = { props.category?.fetchCategory } control = { props.control } defaultValue = { props.editData.category?.id ? props.editData.category?.id : undefined } />
                            <Error message = { props.formState.errors.category?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20}>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker name = "expDate" placeholder = '유효기간을 설정해주세요' control = { props.control } defaultValue = { props.editData.expDate ? getDate(props.editData.expDate) : "" } />
                            <Error message = { props.formState.errors.expDate?.message } />
                        </FormCol>
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalDatePicker name = "alarm" placeholder = '유효기간 임박일을 설정해주세요' control = { props.control } defaultValue = { props.editData.alarm ? getDate(props.editData.alarm) : "" } />
                            <Error message = { props.formState.errors.alarm?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={20} className = "margin-reset">
                        <FormCol xs = { 24 } sm = { 24 } md = { 12 } lg = { 12 } xl = { 12 }>
                            <NormalButton title = { props.isEdit ? "수정" : "등록" } color = 'blue' onClick = { props.isEdit ? props.handleSubmit(props.onClickUpdateProduct) : props.handleSubmit(props.onClickCreateProduct)} />
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
