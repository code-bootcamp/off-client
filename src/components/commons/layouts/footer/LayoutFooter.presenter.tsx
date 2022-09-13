import Link from "next/link";
import { Footer, FooterCol, FooterRow } from "./LayoutFooter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function LayoutFooterUI() {
    return(
        <Footer>
            <FooterRow>
                {/* <FooterCol id="logo" xl={{span:6}} lg={{span:6}} md={{span:6}} sm={{span:6}} xs={{span:6, order:3}}>OFF</FooterCol> */}
                <FooterCol id="corp_area" xl={{span:24}} lg={{span:24}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                    <Link href={'/'}>
                        <a>멤버소개</a>
                    </Link>

                    <Link href={'/'}>
                        <a>개인정보 보호정책</a>
                    </Link>
                    <Link href={'/'}>
                        <a>이용약관</a>
                    </Link>
                    <Link href={'/'}>
                        <a>고객센터</a>
                    </Link>
                </FooterCol>
                <FooterCol id="copyright" xl={{span:24}} lg={{span:24}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                    <span>Copyright </span>
                    <FontAwesomeIcon icon={ faCopyright } />
                    <span> TEAM7</span>
                </FooterCol>
            </FooterRow>
        </Footer>
    )
}