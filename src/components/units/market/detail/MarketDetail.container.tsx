import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IMutation, IMutationUpdateBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"
import { FETCH_BOARDS } from "../list/MarketList.queries"
import MarketDetailUI from "./MarketDetail.presenter"
import { DELETE_BOARD, FETCH_BOARD, FETCH_USER_LOGGED_IN, UPDATE_BOARD } from "./MarketDetail.queries"

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
    const [deleteBoard] = useMutation(DELETE_BOARD)


    const onClickOpenMarketCreateModal = (data:any) => {
        setIsMarketCreateModalOpen(true)
        setMarketUpdateData(data)
    }

    const onClickToChat = () => {
        setToggle( prev => !prev )
    };

    const onClickDeleteBoard = async() => {
        try{
            const result = await deleteBoard({
                variables: {
                    boardId: router.query.marketId
                },
                refetchQueries:[{query: FETCH_BOARDS}]
            })
        }catch(error){

        }
    }

    return<MarketDetailUI
            data = { data }
            isMarketCreateModalOpen = { isMarketCreateModalOpen }
            setIsMarketCreateModalOpen = { setIsMarketCreateModalOpen }
            onClickOpenMarketCreateModal = { onClickOpenMarketCreateModal }
            onClickDeleteBoard = { onClickDeleteBoard }
            marketUpdateData = { marketUpdateData }
            onClickToChat = { onClickToChat }
            toggle = { toggle }
            user = { user }
        />
}