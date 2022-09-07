import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MarketListContainer from "../../src/components/units/market/list/MarketList.container";

function MarketListPage() {
    return<MarketListContainer/>
}
export default withAuth(MarketListPage)