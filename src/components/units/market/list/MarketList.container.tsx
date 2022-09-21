import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_CATEGORY } from "../../my-fridge/list/MyFridgeList.queries";
import MarketListUI from "./MarketList.presenter";
import { FETCH_BOARDS } from "./MarketList.queries";

const locationValue = [
    {
        id: "서울",
        name: "서울"
    },
    {
        id: "인천",
        name: "인천"
    },
    {
        id: "부산",
        name: "부산"
    },
    {
        id: "대전",
        name: "대전"
    },
    {
        id: "광주",
        name: "광주"
    },
    {
        id: "대구",
        name: "대구"
    },
    {
        id: "울산",
        name: "울산"
    },
    {
        id: "경기",
        name: "경기"
    },
    {
        id: "강원",
        name: "강원"
    },
    {
        id: "충북",
        name: "충북"
    },
    {
        id: "충남",
        name: "충남"
    },
    {
        id: "전북",
        name: "전북"
    },
    {
        id: "전남",
        name: "전남"
    },
    {
        id: "경북",
        name: "경북"
    },
    {
        id: "경남",
        name: "경남"
    },
    {
        id: "제주",
        name: "제주"
    },
    {
        id: "세종",
        name: "세종"
    },
]

export default function MarketListContainer() {
    const [convertData, setConvertData] = useState<any>()
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const { data } = useQuery(FETCH_BOARDS, {
        onCompleted(data) {
            setConvertData(data.fetchBoards)
        }
    })
    const { data: dataCategory } = useQuery(FETCH_CATEGORY)

    useEffect(() => {
        let newData = []
        if(location === "" && category === "" && searchInput === "") {
            data?.fetchBoards?.forEach((element1: any) => {
                newData.push(element1)
            })
        } else {
            data?.fetchBoards?.forEach((element1: any) => {
                if(category === "" && searchInput === "") {
                    if(element1.salesLocation.address.slice(0,2) === location) {
                        newData.push(element1)
                    }
                }
                if(category !== "" && searchInput !== "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.category.name === category && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
                if(category !== "" && searchInput === "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.category.name === category) {
                        newData.push(element1)
                    }
                }
                if(category === "" && searchInput !== "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
            })
        }
        setConvertData(newData)
    }, [location])

    useEffect(() => {
        let newData = []
        if(location === "" && category === "" && searchInput === "") {
            data?.fetchBoards?.forEach((element1: any) => {
                newData.push(element1)
            })
        } else {
            data?.fetchBoards?.forEach((element1: any) => {
                if(location === "" && searchInput === "") {
                    if(element1.category.name === category) {
                        newData.push(element1)
                    }
                }
                if(location !== "" && searchInput !== "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.category.name === category && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
                if(location !== "" && searchInput === "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.category.name === category) {
                        newData.push(element1)
                    }
                }
                if(location === "" && searchInput !== "") {
                    if(element1.category.name === category && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
            })
        }
        setConvertData(newData)
    }, [category])

    useEffect(() => {
        let newData = []
        if(location === "" && category === "" && searchInput === "") {
            data?.fetchBoards?.forEach((element1: any) => {
                newData.push(element1)
            })
        } else {
            data?.fetchBoards?.forEach((element1: any) => {
                if(location === "" && category === "") {
                    if(element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
                if(location !== "" && category !== "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.category.name === category && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
                if(location !== "" && category === "") {
                    if(element1.salesLocation.address.slice(0,2) === location && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
                if(location === "" && category !== "") {
                    if(element1.category.name === category && element1.title.includes(searchInput)) {
                        newData.push(element1)
                    }
                }
            })
        }
        setConvertData(newData)
    }, [searchInput])

    const onChangeLocation = (value: any) => {
        setLocation(value)
    }

    const onChangeCategory = (value: any) => {
        setCategory(value)
    }

    const onChangeInput = (event) => {
        setSearchInput(event.target.value)
    }

    return (
        <MarketListUI 
        data = { convertData }  
        location = { locationValue }
        category = { dataCategory }
        onChangeLocation = { onChangeLocation }
        onChangeCategory = { onChangeCategory }
        onChangeInput = { onChangeInput }
        />
    )
}