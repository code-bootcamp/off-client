import { MenuDrawer } from "../../../../commons/styles/override";
import 
{ 
    Header, 
    HeaderAlignBox, 
    Logo, 
    MenuBox,
    MenuIcon
} 
from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
    return (
        <Header>
            <HeaderAlignBox>
                <Logo>OFF</Logo>
                <MenuBox>
                    <MenuIcon onClick = { props.onClickOpenMenu } />
                    <MenuDrawer visible = { props.menuVisible } placement = "right" onClose = { props.onClickCloseMenu }>

                    </MenuDrawer>
                </MenuBox>
            </HeaderAlignBox>
        </Header>
    )
}