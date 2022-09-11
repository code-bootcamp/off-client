import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MyFridgeList from "../../src/components/units/my-fridge/list/MyFridgeList.container";

export default function myFridgePage() {

    return (
        <MyFridgeList />
    )
}
// export default withAuth(myFridgePage)