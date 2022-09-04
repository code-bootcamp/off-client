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


const HEADER_MENUS_NO_LOGIN = [
    { name: "마이 냉장고", page: "/" },
    { name: "나눔 마켓", page: "/" },
    { name: "로그인", page: "/info/login" },
    { name: "회원가입", page: "/info/join" }
]

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
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
                            { HEADER_MENUS_NO_LOGIN.map(el => (
                                <MenuItem key = { uuidv4() } onClick = { props.onClickCloseMenu }>
                                    <MenuLink href = { el.page }>
                                        <a>{ el.name }</a>
                                    </MenuLink>
                                </MenuItem>
                            )) }
                        </MenuWrapper>
                    </MenuDrawer>
                </MenuBox>
            </HeaderAlignBox>
        </Header>
    )
}