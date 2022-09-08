import { message } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoginState } from "../../../commons/store";

export const withAuth = (Component:any) => (props:any) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useRecoilState(isLoginState);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);



    useEffect(() => {
        if (isLogin && !accessToken) {
            message.error("로그인 후 이용 가능합니다!");
            router.push("/info/login");
        }
    }, [isLogin]);




    return <Component {...props} />;
};
