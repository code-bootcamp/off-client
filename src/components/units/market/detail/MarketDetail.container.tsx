import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types"
import MarketDetailUI from "./marketDetail.presenter"
import { FETCH_BOARD } from "./marketDetail.queries"

export default function MarketDetailContainer () {
    const router = useRouter()
    const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD,{
        variables: {
            id: String(router.query.marketId)
        }
    })
    console.log("1",data?.fetchBoard.boardImage[0].url)
    return<MarketDetailUI data = { data } />
}