import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IMutation, IMutationUpdateBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"
import MarketDetailUI from "./MarketDetail.presenter"
import { FETCH_BOARD, FETCH_USER_LOGGED_IN, UPDATE_BOARD } from "./MarketDetail.queries"

export default function MarketDetailContainer () {
    const router = useRouter()

    const [isMarketCreateModalOpen, setIsMarketCreateModalOpen] = useState(false)
    const [marketUpdateData, setMarketUpdateData] = useState({})
    const [toggle, setToggle] = useState(false)
    const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: {
            id: String(router.query.marketId)
        },
    })
    const { data: user } = useQuery(FETCH_USER_LOGGED_IN)

    const onClickOpenMarketCreateModal = (data:any) => {
        setIsMarketCreateModalOpen(true)
        setMarketUpdateData(data)
    }

    const onClickToChat = () => {
        setToggle( prev => !prev )
    };

    return<MarketDetailUI
            data = { data }
            isMarketCreateModalOpen = { isMarketCreateModalOpen }
            setIsMarketCreateModalOpen = { setIsMarketCreateModalOpen }
            onClickOpenMarketCreateModal = { onClickOpenMarketCreateModal }
            marketUpdateData = { marketUpdateData }
            onClickToChat = { onClickToChat }
            toggle = { toggle }
            user = { user }
        />
}