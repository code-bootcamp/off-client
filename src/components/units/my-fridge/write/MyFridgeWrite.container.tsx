import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import MyFridgeWriteUI from "./MyFridgeWrite.presenter";
import { CREATE_FRIDGE_FOOD, FETCH_CATEGORY, UPDATE_FRIDGE_FOODS } from "./MyFridgeWrite.queries";
import { getDate } from '../../../../../src/commons/libraries/utils';
import * as yup from "yup"
import { FETCH_FRIDGE_FOODS } from "../list/MyFridgeList.queries";
import { message } from "antd";
import { MyFridgeWriteProps } from "./MyFridgeWrite.types";
import { useEffect } from "react";

const schema = yup.object({
    name: yup.string().required("상품명은 필수입니다"),
    price: yup.number().typeError("숫자를 입력해주세요").required("가격은 필수입니다"),
    expDate: yup.string().nullable(true).required("유효기간 설정은 필수입니다"),
    alarm: yup.string().nullable(true).required("유효기간임박 설정은 필수입니다"),
    category: yup.string().required("카테고리는 필수입니다")
})

export default function MyFridgeWrite(props: MyFridgeWriteProps) {
    const { control, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    useEffect(() => {
        if(props.isEdit) {
            reset({
                name: props.editData.name,
                price: props.editData.price,
                expDate: props.editData.expDate,
                alarm: props.editData.alarm,
                category: props.editData.category?.id
            })
        } else {
            reset({
                name: "",
                price: null,
                expDate: null,
                alarm: null,
                category: ""
            })
        }
    }, [props.isEdit, props.editData])
    
    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    const [createFridgeFood] = useMutation(CREATE_FRIDGE_FOOD)
    const [updateFridgeFoods] = useMutation(UPDATE_FRIDGE_FOODS)

    const onClickCancelWriteModal = () => {
        props.setIsWriteModalOpen(false)
        props.setIsEdit({})
        reset({
            name: "",
            price: null,
            expDate: null,
            alarm: null,
            category: ""
        })
    }

    const onClickCreateProduct = async (data: any) => {
        try {
            await createFridgeFood({
                variables: {
                    fridgeFoodInput: {
                        name: data.name,
                        price: data.price,
                        expDate: getDate(data.expDate),
                        alarm: getDate(data.alarm),
                        category: data.category
                    },
                    status: "LIST"
                },
                refetchQueries: [
                    {
                        query: FETCH_FRIDGE_FOODS,
                        variables: {
                            status: "LIST"
                        }
                    },
                ]
            })
            props.setIsWriteModalOpen(false)
            message.success("등록에 성공하셨습니다")
        } catch(error) {
            message.error("등록에 실패하셨습니다")
        }
    }

    const onClickUpdateProduct = async (data: any) => {
        try {
            await updateFridgeFoods({
                variables: {
                    fridgeFoodId: props.editData.id,
                    updateFridgeFoodInput: {
                        name: data.name,
                        price: data.price,
                        expDate: getDate(data.expDate),
                        alarm: getDate(data.alarm),
                        category: data.category
                    },
                    status: props.editData.status
                },
                refetchQueries: [
                    {
                        query: FETCH_FRIDGE_FOODS,
                        variables: {
                            status: props.editData.status
                        }
                    }
                ]
            })
            props.setIsWriteModalOpen(false)
            message.success("수정에 성공했습니다")
        } catch(error) {
            message.error("수정에 실패하셨습니다")
        }
    }

    return (
        <MyFridgeWriteUI 
        editData = { props.editData }
        isEdit = { props.isEdit }
        isWriteModalOpen = { props.isWriteModalOpen } 
        formState = { formState }
        control = { control }
        handleSubmit = { handleSubmit }
        category = { dataCategory }
        onClickCreateProduct = { onClickCreateProduct }
        onClickUpdateProduct = { onClickUpdateProduct }
        onClickCancelWriteModal = { onClickCancelWriteModal }
        />
    )
}
