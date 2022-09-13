import MyFridgeListUI from "./MyFridgeList.presenter";
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { getDate } from '../../../../../src/commons/libraries/utils';
import { useMutation, useQuery } from "@apollo/client"
import { CREATE_FRIDGE_FOOD, FETCH_CATEGORY, FETCH_CREATED_FRIDGE_FOODS } from "./MyFridgeList.queries";
import { IMutation, IMutationCreateFridgeFoodArgs } from "../../../../commons/types/generated/types";

const schema = yup.object({
    name: yup.string().required("상품명은 필수입니다"),
    price: yup.number().typeError("숫자를 입력해주세요").required("가격은 필수입니다"),
    expDate: yup.string().nullable(true).required("유효기간 설정은 필수입니다"),
    alarm: yup.string().nullable(true).required("유효기간임박 설정은 필수입니다"),
    category: yup.string().required("카테고리는 필수입니다")
})

const testData = [
    {
        id: "test1",
        category: "육류",
        price: 15000,
        name: "돼지고기 등심",
        alarm: "2022-09-19",
        expDate: "2022-09-21",
    },
    {
        id: "test2",
        category: "채소류",
        price: 4000,
        name: "양파",
        alarm: "2022-09-19",
        expDate: "2022-09-21",
    },
    {
        id: "test3",
        category: "어패류",
        price: 7000,
        name: "고등어",
        alarm: "2022-09-19",
        expDate: "2022-09-21",
    },
    {
        id: "test4",
        category: "유제품",
        price: 2000,
        name: "요구르트",
        alarm: "2022-09-19",
        expDate: "2022-09-21",
    },
]

export default function MyFridgeList() {

    const columnData = {
        ["createProductList"]: {
            isCreateBtn: true,
            name: "목록",
            items: []
        },
        ["frozenList"]: {
            isCreateBtn: false,
            name: "냉동",
            items: []
        },
        ["fridgeList"]: {
            isCreateBtn: false,
            name: "냉장",
            items: []
        }
    }

    const [columns, setColumns] = useState(columnData)
    const [productList, setProductList] = useState([])
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)
    const [winReady, setWinReady] = useState(false)

    const [createFridgeFood] = useMutation(CREATE_FRIDGE_FOOD)

    const { data: dataFetchCreatedFridgeFood } = useQuery(FETCH_CREATED_FRIDGE_FOODS, { onCompleted(data) {
        const _columns = {
            ...columns,
            ["createProductList"]: {
                isCreateBtn: true,
                name: "목록",
                items: data.fetchCreatedFridgeFoods
            }
        }
        setColumns(_columns)
    }, })
    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    useEffect(() => {
        setWinReady(true)
    }, [])

    console.log(columns)

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if(!result.destination) return
        const { source, destination } = result

        if(source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId]
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            })
        } else {
            const column = columns[source.droppableId]
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            })
        }
    }

    const { control, handleSubmit, formState, reset } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onClickShowWriteModal = () => {
        setIsWriteModalOpen(true)
    }

    const onClickCancelWriteModal = () => {
        setIsWriteModalOpen(false)
    }

    const onClickCreateProduct = async (data: any) => {
        const convertExpDate = getDate(data.expDate)
        const convertAlarm = getDate(data.alarm)
        try {
            await createFridgeFood({
                variables: {
                    fridgeFoodInput: {
                        name: data.name,
                        price: data.price,
                        expDate: convertExpDate,
                        alarm: convertAlarm,
                        category: data.category
                    }
                },
                refetchQueries: [
                    {
                        query: FETCH_CREATED_FRIDGE_FOODS
                    }
                ]
            })
            setIsWriteModalOpen(false)
        } catch(error) {
            message.error("등록에 실패하셨습니다")
        }
    }

    return (
        <MyFridgeListUI 
        winReady = { winReady }
        category = { dataCategory }
        productList = { productList }
        isWriteModalOpen = { isWriteModalOpen } 
        formState = { formState }
        control = { control }
        handleSubmit = { handleSubmit }
        onClickShowWriteModal = { onClickShowWriteModal }
        onClickCancelWriteModal = { onClickCancelWriteModal }
        onClickCreateProduct = { onClickCreateProduct }
        onDragEnd = { onDragEnd }
        columns = { columns }
        setColumns = { setColumns }
        />
    )
}