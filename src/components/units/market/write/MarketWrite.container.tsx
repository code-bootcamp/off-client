import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { fridgeInfoState } from "../../../../commons/store";
import { FETCH_CATEGORY } from "../../my-fridge/list/MyFridgeList.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { MarketWriteProps } from "./MarketWrite.types";

export default function MarketWrite(props: MarketWriteProps) {
    const { control, handleSubmit, getValues, trigger, formState, reset } = useForm({
        // resolver: yupResolver(schema),
        mode: "onChange",
    })

    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    const [isAddressOpen, setIsAddressOpen] = useState(false)
    const [fridgeInfo, setFridgeInfo] = useRecoilState(fridgeInfoState)
    const [fileUrls, setFileUrls] = useState(["", "", ""])

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls]
        newFileUrls[index] = fileUrl
        setFileUrls(newFileUrls)
    }
    console.log("받아오는 data",props.data?.fetchFridgeFoodOne)
    useEffect(()=>{
        setFridgeInfo(props.data?.fetchFridgeFoodOne)
    },[props.data?.fetchFridgeFoodOne])
    console.log(fridgeInfo)
    return (
        <MarketWriteUI
        data = { props.data?.fetchFridgeFoodOne }
        // data = { fridgeInfo }
        address = { getValues("salesLocations.address") }
        category = { dataCategory }
        control = { control }
        fileUrls = { fileUrls }
        onChangeFileUrls = { onChangeFileUrls }
        />
    )
}