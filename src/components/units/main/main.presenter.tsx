
import { PropertySafetyFilled } from "@ant-design/icons";
import NormalButton from "../../commons/buttons/normalButton/normalButton.container";
import SlideCol from "../../commons/slider/col/ColSlide";
import SlideRow from "../../commons/slider/row/RowSlide";
import { Circle, IntroCol, Introduce1, Introduce2, Introduce3, IntroRow, Main, MainCol, MainImgWrapper, MainRow, MainTitle, MainTitleWrapper, Phone, SubTitle } from "./Main.styles";
import { IMainUIProps } from "./Main.types";
export default function MainUI(props: IMainUIProps) {
    return(
        <Main>
            <MainRow>
                <MainCol xl={{span:12}} lg={{span:12}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                    <MainTitleWrapper >
                        <MainTitle><strong>냉장고</strong>를</MainTitle>
                        <MainTitle><strong>체계적</strong>으로!</MainTitle>
                        <SubTitle><b>O</b>ur <b>F</b>resh <b>F</b>ridge</SubTitle>
                        <NormalButton title="바로 이용하러 가기" color="blue"  disabled={false} onClick={props.onClickMoveToMarket}/>
                    </MainTitleWrapper>
                </MainCol>
                <MainCol xl={{span:12}} lg={{span:12}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                    <MainImgWrapper>
                        <Phone src="/images/phone.webp"/>
                        <Circle/>
                    </MainImgWrapper>
                </MainCol>
            </MainRow>
            <Introduce1>
                <p id="f">
                    <span>"언젠간 필요하겠지?"</span>
                    <span>"저거 언제 넣어놨지 썩은거 아닌가?"</span>
                    <span>냉장고속 유통기한이 있는 식품 <strong>OFF로 관리하세요.</strong></span>
                </p>
            </Introduce1>
            <Introduce2>
                <IntroRow  gutter={[0,50]}>
                    <IntroCol xl={{span:11, order:1}} lg={{span:11, order:1}} md={{span:12, order:1}} sm={{span:24, order:1}} xs={{span:24, order:1}}>
                        <p id="s">
                            <span>유통기한이 다가오면</span>
                            <span>OFF가 알려드릴게요.</span>
                            <span>까먹기 쉬운 냉동, 냉장식품 유통기한</span>
                            <span>입력해놓으시면 저희가 알려드려요.</span>
                        </p>
                    </IntroCol>
                    <IntroCol xl={{span:13, order:2}} lg={{span:13, order:2}} md={{span:12, order:2}} sm={{span:24, order:2}} xs={{span:24, order:2}}>
                        <SlideCol/>
                    </IntroCol>
                    <IntroCol xl={{span:13, order:3}} lg={{span:13, order:3}} md={{span:12, order:3}} sm={{span:24, order:4}} xs={{span:24, order:4}}>
                        <SlideRow/>
                    </IntroCol>
                    <IntroCol xl={{span:11, order:4}} lg={{span:11, order:4}} md={{span:12, order:4}} sm={{span:24, order:3}} xs={{span:24, order:3}}>
                        <p id="s">
                            <span>안먹는 음식들</span>
                            <span>OFF에서 나눔해요.</span>
                            <span>냉장고에서의 의미없이 방치되어있는</span>
                            <span>음식 OFF나눔마켓에서 나눔해요.</span>
                        </p>
                    </IntroCol>
                </IntroRow>
            </Introduce2>
            <Introduce3>
                <IntroRow gutter={[0,30]}>
                    <IntroCol id="tc" xl={{span:12}} lg={{span:12}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                        <p id="t">
                            <span>지금바로</span>
                            <span>간편하게 OFF를 시작해보세요</span>
                            <span>데스크탑, 휴대폰 어디서든 사용가능해요 : &#41;</span>
                        </p>
                    </IntroCol>
                    <IntroCol id="tc" xl={{span:12}} lg={{span:12}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                        <NormalButton title="바로 이용하러 가기" color="blue"  disabled={false} onClick={props.onClickMoveToMarket}/>
                    </IntroCol>
                </IntroRow>
            </Introduce3>
        </Main>

    )
}