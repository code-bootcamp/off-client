import { useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
    const [menuVisible, setMenuVisible] = useState(false)

    const onClickOpenMenu = () => {
        setMenuVisible(true)
    } 
    
    const onClickCloseMenu = () => {
        setMenuVisible(false)
    }

    return (
        <LayoutHeaderUI 
        menuVisible = { menuVisible } 
        onClickOpenMenu = { onClickOpenMenu }
        onClickCloseMenu = { onClickCloseMenu }
        />
    )
}