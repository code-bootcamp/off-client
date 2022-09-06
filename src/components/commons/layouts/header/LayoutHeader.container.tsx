import { MouseEvent, SyntheticEvent, useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { accessTokenState, isLoadedState, isLogoutState } from "../../../../commons/store";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useApolloClient } from "@apollo/client";
import { LOGOUT } from "./LayoutHeader.queries";

export default function LayoutHeader() {
    const [menuVisible, setMenuVisible] = useState(false)
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
    const [isLogout, setIsLogout] = useRecoilState(isLogoutState)
    const resetIsLoaded = useResetRecoilState(isLoadedState)
    const resetAccessToken = useResetRecoilState(accessTokenState)
    const client = useApolloClient()

    const onClickOpenMenu = () => {
        setMenuVisible(true)
    }

    const onClickCloseMenu = async(event: {target: InnerHTML}) => {
        setMenuVisible(false)
        const name = (event.target.innerHTML)
        if( name === "로그아웃" ){
                const result = await client.mutate({
                    mutation: LOGOUT,
                    context: {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
            })
            setIsLogout(result.data.logout)
            resetAccessToken()
            resetIsLoaded()
        }
    }
    return (
        <LayoutHeaderUI
        menuVisible = { menuVisible }
        onClickOpenMenu = { onClickOpenMenu }
        onClickCloseMenu = { onClickCloseMenu }
        />
    )
}