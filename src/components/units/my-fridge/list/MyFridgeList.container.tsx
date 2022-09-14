import MyFridgeListUI from "./MyFridgeList.presenter";
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from "@apollo/client"
import { UPDATE_FRIDGE_FOODS, FETCH_FRIDGE_FOODS } from "./MyFridgeList.queries";
import { getDate } from "../../../../commons/libraries/utils";
import { message } from "antd";

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
    const [winReady, setWinReady] = useState(false)
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)

    const [updateFridgeFoods] = useMutation(UPDATE_FRIDGE_FOODS)

    const { data: dataFetchCreatedFood } = useQuery(FETCH_FRIDGE_FOODS, {
        variables: {
            status: "LIST"
        },
        onCompleted(data) {
            const _columns = {
                ...columns,
                ["createProductList"]: {
                    isCreateBtn: true,
                    name: "목록",
                    items: data.fetchFridgeFoods
                }
            }
            setColumns(_columns)
        }
    })
    console.log(dataFetchCreatedFood)

    const { data: dataFetchFreezerFood } = useQuery(FETCH_FRIDGE_FOODS, {
        variables: {
            status: "FREEZER"
        },
        onCompleted(data) {
            const _columns = {
                ...columns,
                ["frozenList"]: {
                    isCreateBtn: false,
                    name: "냉동",
                    items: data.fetchFridgeFoods
                }
            }
            setColumns(_columns)
        }
    })

    const { data: dataFetchFridgeFood } = useQuery(FETCH_FRIDGE_FOODS, {
        variables: {
            status: "FRIDGE"
        },
        onCompleted(data) {
            const _columns = {
                ...columns,
                ["fridgeList"]: {
                    isCreateBtn: false,
                    name: "냉장",
                    items: data.fetchFridgeFoods
                }
            }
            setColumns(_columns)
        }
    })

    useEffect(() => {
        setWinReady(true)
    }, [])

    const onDragEnd = async (result: any, columns: any, setColumns: any) => {
        if(!result.destination) return
        const { source, destination } = result

        if(source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId]
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)
            if(destination.droppableId === "frozenList") {
                let selectItem = {
                    id: "",
                    name: "",
                    price: 0,
                    expDate: "",
                    alarm: "",
                    category: ""
                }
                destItems.forEach((element1) => {
                    if(element1.id === result.draggableId) {
                        selectItem.id = element1.id
                        selectItem.name = element1.name
                        selectItem.price = element1.price
                        selectItem.expDate = getDate(element1.expDate)
                        selectItem.alarm = getDate(element1.alarm)
                        selectItem.category = element1.category.id
                    }
                })
                try {
                    await updateFridgeFoods({
                        variables: {
                            fridgeFoodId: selectItem.id,
                            updateFridgeFoodInput: {
                                name: selectItem.name,
                                price: selectItem.price,
                                expDate: selectItem.expDate,
                                alarm: selectItem.alarm,
                                category: selectItem.category
                            },
                            status: "FREEZER"
                        },
                    })
                    message.success("등록에 성공했습니다")
                } catch(error) {
                    message.error("등록에 실패하셨습니다")
                }
            } else if(destination.droppableId === "fridgeList") {
                let selectItem = {
                    id: "",
                    name: "",
                    price: 0,
                    expDate: "",
                    alarm: "",
                    category: ""
                }
                destItems.forEach((element1) => {
                    if(element1.id === result.draggableId) {
                        selectItem.id = element1.id
                        selectItem.name = element1.name
                        selectItem.price = element1.price
                        selectItem.expDate = getDate(element1.expDate)
                        selectItem.alarm = getDate(element1.alarm)
                        selectItem.category = element1.category.id
                    }
                })
                try {
                    await updateFridgeFoods({
                        variables: {
                            fridgeFoodId: selectItem.id,
                            updateFridgeFoodInput: {
                                name: selectItem.name,
                                price: selectItem.price,
                                expDate: selectItem.expDate,
                                alarm: selectItem.alarm,
                                category: selectItem.category
                            },
                            status: "FRIDGE"
                        }
                    })
                    message.success("등록에 성공했습니다")
                } catch(error) {
                    message.error("등록에 실패하셨습니다")
                }
            } else if(destination.droppableId === "createProductList") {
                let selectItem = {
                    id: "",
                    name: "",
                    price: 0,
                    expDate: "",
                    alarm: "",
                    category: ""
                }
                destItems.forEach((element1) => {
                    if(element1.id === result.draggableId) {
                        selectItem.id = element1.id
                        selectItem.name = element1.name
                        selectItem.price = element1.price
                        selectItem.expDate = getDate(element1.expDate)
                        selectItem.alarm = getDate(element1.alarm)
                        selectItem.category = element1.category.id
                    }
                })
                try {
                    await updateFridgeFoods({
                        variables: {
                            fridgeFoodId: selectItem.id,
                            updateFridgeFoodInput: {
                                name: selectItem.name,
                                price: selectItem.price,
                                expDate: selectItem.expDate,
                                alarm: selectItem.alarm,
                                category: selectItem.category
                            },
                            status: "LIST"
                        }
                    })
                    message.success("등록에 성공했습니다")
                } catch(error) {
                    message.error("등록에 실패하셨습니다")
                }
            }
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

    const onClickOpenWriteModal = () => {
        setIsWriteModalOpen(true)
    }

    return (
        <MyFridgeListUI 
        winReady = { winReady }
        isWriteModalOpen = { isWriteModalOpen }
        onDragEnd = { onDragEnd }
        onClickOpenWriteModal = { onClickOpenWriteModal }
        columns = { columns }
        setColumns = { setColumns }
        setIsWriteModalOpen = { setIsWriteModalOpen }
        />
    )
}