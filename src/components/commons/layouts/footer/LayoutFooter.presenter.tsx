import { Footer, FooterTop, FooterBody, FooterBottom } from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
    return (
        <Footer>
            <div className = "align-box">
                <FooterTop>
                    <p className = "main-title">OFF</p>
                    <p className = "sub-title">Our Fresh Fridge</p>
                </FooterTop>
                <FooterBody>
                    <p>개인정보처리방침</p>
                    <p>이용약관</p>
                    <p>이메일 무단수집 거부</p>
                    <p>고객센터</p>
                </FooterBody>
                <FooterBottom>
                    <p>Copyright © OFF.All right reserved</p>
                </FooterBottom>
            </div>
        </Footer>
    )
}