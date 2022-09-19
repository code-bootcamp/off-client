import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_CATEGORY } from "../../my-fridge/list/MyFridgeList.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { MarketWriteProps } from "./MarketWrite.types";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object({
    name: yup.string().required("상품명은 필수입니다")
})

export default function MarketWrite(props: MarketWriteProps) {
    
    const { control, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    useEffect(() => {
        reset({
            name: props.marketCreateData.name,
        })
    }, [props.marketCreateData])

    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    const onClickCancelWriteModal = () => {
        props.setIsMarketCreateModalOpen(false)
        reset({
            name: "",
        })
    }

    return (
        <MarketWriteUI
        marketCreateData = { props.marketCreateData }
        isMarketCreateModalOpen = { props.isMarketCreateModalOpen }
        formState = { formState }
        control = { control }
        category = { dataCategory }
        handleSubmit = { handleSubmit }
        onClickCancelWriteModal = { onClickCancelWriteModal }
        />
    )
}