import { TabsPosition } from "antd/lib/tabs";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MyPageTab, TabItem } from "../../../../../commons/styles/override";
import FridgeInfoContainer from "../fridgeInfo/FridgeInfo.container";
import MyInfoContainer from "../myInfo/MyInfo.container";
import { Title, Wrapper } from "./MyPage.styles";

export default function MyPageUI() {
    const [position, setPosition] = useState<TabsPosition>('left')
    const colSize = useMediaQuery({ query: `(max-Width: 992px)`})
    useEffect(()=>{
        if(colSize)setPosition("top")
        if(!colSize)setPosition("left")
    },[colSize])
    return(
        <Wrapper>
            <Title>마이페이지</Title>
            <MyPageTab tabPosition = { position } >
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