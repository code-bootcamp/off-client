import { useMediaQuery } from "react-responsive";
import { MyPageTab, TabItem } from "../../../../../commons/styles/override";
import FridgeInfoContainer from "../fridgeInfo/FridgeInfo.container";
import MyInfoContainer from "../myInfo/MyInfo.container";
import { Title, Wrapper } from "./MyPage.styles";

export default function MyPageUI() {
    const colSize = useMediaQuery({ minWidth: 992})
    return(
        <Wrapper>
            <Title>마이페이지</Title>
            <MyPageTab tabPosition={ colSize ? "left" : "top" }>
                <TabItem tab="내 정보" key="myInfo">
                    <MyInfoContainer/>
                </TabItem>
                <TabItem tab="냉장고" key="fridgeInfo">
                    <FridgeInfoContainer/>
                </TabItem>
                <TabItem tab="나눔내역" key="marketInfo">

                </TabItem>
            </MyPageTab>
        </Wrapper>
    )
}