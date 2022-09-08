import MyFridgeListUI from "./MyFridgeList.presenter";
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { message } from 'antd';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { getDate } from '../../../../../src/commons/libraries/utils';

const schema = yup.object({
    name: yup.string().required("상품명은 필수입니다"),
    price: yup.number().typeError("숫자를 입력해주세요").required("가격은 필수입니다"),
    expDate: yup.string().nullable(true).required("유효기간 설정은 필수입니다"),
    alarm: yup.string().nullable(true).required("유효기간임박 설정은 필수입니다"),
    category: yup.string().required("카테고리는 필수입니다")
})

export default function MyFridgeList() {
    const [productList, setProductList] = useState([])
    const [isCreate, setIsCreate] = useState(false)
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)

    const { control, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    useEffect(() => {
        setProductList(JSON.parse(localStorage.getItem("productList") || "[]"))
    }, [isCreate])

    const onClickShowWriteModal = () => {
        setIsWriteModalOpen(true)
    }

    const onClickCancelWriteModal = () => {
        setIsWriteModalOpen(false)
    }

    const onClickCreateProduct = (data: any) => {
        const alarm = getDate(data.alarm)
        const expDate = getDate(data.expDate)
        const convertData = {...data, alarm, expDate}
        
        const productList = JSON.parse(localStorage.getItem("productList") || "[]")
        setIsCreate((prev) => !prev)
        productList.push(convertData)
        localStorage.setItem("productList", JSON.stringify(productList))
        setIsWriteModalOpen(false)
        message.success("상품이 추가되었습니다")
    }

    return (
        <MyFridgeListUI 
        productList = { productList }
        isWriteModalOpen = { isWriteModalOpen } 
        formState = { formState }
        control = { control }
        handleSubmit = { handleSubmit }
        onClickShowWriteModal = { onClickShowWriteModal }
        onClickCancelWriteModal = { onClickCancelWriteModal }
        onClickCreateProduct = { onClickCreateProduct }
        />
    )
}