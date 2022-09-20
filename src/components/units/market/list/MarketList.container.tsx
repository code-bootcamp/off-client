import { useQuery } from "@apollo/client";
import MarketListUI from "./MarketList.presenter";
import { FETCH_BOARDS } from "./MarketList.queries";

export default function MarketListContainer() {

    const { data } = useQuery(FETCH_BOARDS)

    return (
        <MarketListUI data = { data } />
    )
}