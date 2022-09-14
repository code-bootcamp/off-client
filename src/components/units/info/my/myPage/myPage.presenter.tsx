import { MyPageTab, TabItem } from "../../../../../commons/styles/override";
import { Title, Wrapper } from "./myPage.styles";

export default function MyPageUI() {
    return(
        <Wrapper>
            <Title>마이페이지</Title>
            <MyPageTab tabPosition="left">
                <TabItem tab="내 정보" key="myInfo">

                </TabItem>
                <TabItem tab="냉장고" key="fridgeInfo">

                </TabItem>
                <TabItem tab="나눔내역" key="marketInfo">

                </TabItem>
            </MyPageTab>
        </Wrapper>
    )
}