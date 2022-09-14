import { MenuDrawer } from "../../../../commons/styles/override";
import
{
    Header,
    HeaderAlignBox,
    Logo,
    MenuBox,
    MenuIcon,
    MenuItem,
    LogoLink,
    MenuLink,
    MenuWrapper,
    LogoBox
}
from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";
import { v4 as uuidv4 } from 'uuid'
import { accessTokenState, isLoginState } from "../../../../commons/store";
import { useRecoilState } from "recoil";


const HEADER_MENUS_NO_LOGIN = [
    { name: "마이 냉장고", page: "/my-fridge" },
    { name: "나눔 마켓", page: "/market" },
    { name: "로그인", page: "/info/login" },
    { name: "회원가입", page: "/info/join" },
]
const HEADER_MENUS_LOGIN = [
    { name: "마이 냉장고", page: "/my-fridge" },
    { name: "나눔 마켓", page: "/market" },
    { name: "마이 페이지", page: "/info/my" },
    { name: "로그아웃", page: "/", },

]

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
    const [isLogin, setIsLogin] = useRecoilState(isLoginState);

    return (
        <Header>
            <HeaderAlignBox>
                <LogoBox>
                    <LogoLink href = '/'>
                        <Logo>OFF</Logo>
                    </LogoLink>
                </LogoBox>
                <MenuBox>
                    <MenuIcon onClick = { props.onClickOpenMenu } />
                    <MenuDrawer visible = { props.menuVisible } placement = "right" onClose = { props.onClickCloseMenu }>
                        <MenuWrapper>
                            { isLogin && accessToken ? (
                                HEADER_MENUS_LOGIN.map(el => (
                                    <MenuItem key = { uuidv4() } onClick = { el.name === "로그아웃" ? props.onClickLogout : props.onClickCloseMenu }>
                                        <MenuLink href = { el.page }>
                                            <a>{ el.name }</a>
                                        </MenuLink>
                                    </MenuItem>
                                ))
                                ) : (
                                HEADER_MENUS_NO_LOGIN.map(el => (
                                   <MenuItem key = { uuidv4() } onClick = { props.onClickCloseMenu }>
                                       <MenuLink href = { el.page }>
                                           <a>{ el.name }</a>
                                       </MenuLink>
                                   </MenuItem>
                               ))
                            )}
                        </MenuWrapper>
                    </MenuDrawer>
                </MenuBox>
            </HeaderAlignBox>
        </Header>
    )
}