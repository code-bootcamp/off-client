import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import MyFridgeWriteUI from "./MyFridgeWrite.presenter";
import { CREATE_FRIDGE_FOOD, FETCH_CATEGORY } from "./MyFridgeWrite.queries";
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
        mode: "onChange"
    })

    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    const [createFridgeFood] = useMutation(CREATE_FRIDGE_FOOD)

    const onClickCancelWriteModal = () => {
        props.setIsWriteModalOpen(false)
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
                    }
                ]
            })
            props.setIsWriteModalOpen(false)
            message.success("등록에 성공하셨습니다")
        } catch(error) {
            message.error("등록에 실패하셨습니다")
        }
    }

    return (
        <MyFridgeWriteUI 
        isWriteModalOpen = { props.isWriteModalOpen } 
        formState = { formState }
        control = { control }
        handleSubmit = { handleSubmit }
        category = { dataCategory }
        onClickCreateProduct = { onClickCreateProduct }
        onClickCancelWriteModal = { onClickCancelWriteModal }
        />
    )
}
