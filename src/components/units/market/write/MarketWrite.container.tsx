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
    
    const { control, handleSubmit, getValues, trigger, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    useEffect(() => {
        reset({
            name: props.data?.fetchFridgeFoodOne.name
        })
    }, [props.data])

    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    const [isAddressOpen, setIsAddressOpen] = useState(false)
    const [fileUrls, setFileUrls] = useState(["", "", ""])

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls]
        newFileUrls[index] = fileUrl
        setFileUrls(newFileUrls)
    }

    const onClickCreate = (data: any) => {
        console.log(data)
    }
    
    return (
        <MarketWriteUI
        data = { props.data?.fetchFridgeFoodOne }
        address = { getValues("salesLocations.address") }
        category = { dataCategory }
        control = { control }
        fileUrls = { fileUrls }
        onChangeFileUrls = { onChangeFileUrls }
        handleSubmit = { handleSubmit }
        onClickCreate = { onClickCreate }
        />
    )
}