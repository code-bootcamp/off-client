import { MouseEvent, SyntheticEvent, useState } from "react";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { accessTokenState, isLoginState } from "../../../../commons/store";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGOUT } from "./LayoutHeader.queries";
import { IMutation } from "../../../../commons/types/generated/types";
import { message } from "antd";

export default function LayoutHeader() {
    const [menuVisible, setMenuVisible] = useState(false)
    const [accessToken, setIsAccessToken] = useRecoilState(accessTokenState)
    const [isLogin, setIsLogin] = useRecoilState(isLoginState)

    const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT)

    const onClickOpenMenu = () => {
        setMenuVisible(true)
    }

    const onClickCloseMenu = () => {
        setMenuVisible(false)
    }

    const onClickLogout = async () => {
        try {
            await logout()
            setIsAccessToken("")
            setMenuVisible(false)
        } catch {
            message.error("로그아웃에 실패하셨습니다")
        }
    }

    return (
        <LayoutHeaderUI
        menuVisible = { menuVisible }
        onClickOpenMenu = { onClickOpenMenu }
        onClickCloseMenu = { onClickCloseMenu }
        onClickLogout = { onClickLogout }
        />
    )
}