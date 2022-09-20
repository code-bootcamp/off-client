import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_CATEGORY } from "../../my-fridge/list/MyFridgeList.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { MarketWriteProps } from "./MarketWrite.types";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { CREATE_BOARD } from "./MarketWrite.queries";
import { IMutation, IMutationCreateBoardArgs } from "../../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { addressState } from "../../../../commons/store";
import { getDate } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";

const schema = yup.object({
    name: yup.string().required("상품명은 필수입니다"),
    price: yup.number().typeError("숫자를 입력해주세요").required("가격은 필수입니다"),
    expDate: yup.string().nullable(true).required("유효기간 설정은 필수입니다"),
    category: yup.string().required("카테고리는 필수입니다"),
    contents: yup.string().required("내용 입력은 필수입니다"),
    address: yup.string().required("주소 입력은 필수입니다"),
})

export default function MarketWrite(props: MarketWriteProps) {
    const { control, handleSubmit, formState, reset, setValue, trigger, register } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })
// console.log(getValues(""))
    useEffect(() => {
        reset({
            name: props.marketCreateData.name,
            price: props.marketCreateData.price,
            expDate: props.marketCreateData.expDate,
            category: props.marketCreateData?.category?.id,
        })
    }, [props.marketCreateData])

    const { data: dataCategory } = useQuery(FETCH_CATEGORY)
    const router = useRouter()
    const [createBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD)
    const [isAddressOpen, setIsAddressOpen] = useState(false)
    const [address, setAddress] = useState("")
    const [fileUrls, setFileUrls] = useState(["", "", ""])


    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls]
        newFileUrls[index] = fileUrl
        setFileUrls(newFileUrls)
    }


    const onClickCancelWriteModal = () => {
        props.setIsMarketCreateModalOpen(false)
        reset({
            name: "",
            price: "",
            expDate: "",
            category: "",
            contents: "",
            address: ""
        })
    }

    const onClickAddressOpen = () => {
        setIsAddressOpen(prev => !prev)
    }

    const onCompletePostcode = (data: any) => {
        let addr = ""; // 주소
        let extraAddr = ""; // 참고주소
        if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
                extraAddr +=
                    extraAddr !== ""
                        ? ", " + data.buildingName
                        : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== "") {
                extraAddr = " (" + extraAddr + ")";
            }
        } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
        }
        const tempAddress = data.address + (data.extraAddr || "")
        setAddress(tempAddress)
        setValue("address", tempAddress)
        trigger("address")
        onClickAddressOpen()
    };

    const onClickSubmit = async(data: any) => {
        console.log("data",data)
        try{
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        title: data.name,
                        contents: data.contents,
                        categoryId: data.category,
                        expDate: getDate(data.expDate),
                        salesLocations: {
                            address: data.address,
                            detailAddress: data.detailAddress,
                        },
                        url: fileUrls
                    }
                }
            })
            console.log("결과",result)
            onClickAddressOpen()
            router.push(`/market/${result.data?.createBoard.id}`)
        }catch(error){
            if(error instanceof Error)
            console.log(error.message)
        }
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
        fileUrls = { fileUrls }
        onChangeFileUrls = { onChangeFileUrls }
        onClickSubmit = { onClickSubmit }
        onClickAddressOpen = { onClickAddressOpen }
        isAddressOpen = { isAddressOpen }
        onCompletePostcode = { onCompletePostcode }
        address = { address }
        register = { register }
        />
    )
}