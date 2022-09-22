import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState, isLoginState } from "../../../../commons/store";
import { IMutation, IMutationLoginArgs } from "../../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN } from "./Login.queries";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { message, Modal } from "antd";
import { GoogleLogin, GoogleLogout } from 'react-google-login'


const schema = yup.object({
  email: yup.string().email("이메일 형식으로 작성해주세요").required("아이디는 필수입니다"),
  password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,"영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.").required("비밀번호는 필수입니다"),
});

export default function Login() {
  const router = useRouter();
  const client = useApolloClient();

  const [accessToken1, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo2, setUserInfo] = useRecoilState(userInfoState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  const [login] = useMutation<Pick<IMutation,"login">,IMutationLoginArgs>(LOGIN);

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onClickLogin = async (data:any) => {
    try {
        const result = await login({
            variables: {
              email: data.email,
              password: data.password
            }
        })
        const accessToken = result.data?.login;
        const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context: {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
            fetchPolicy: "network-only"
        });
        console.log(resultUserInfo)
        const userInfo = resultUserInfo.data?.fetchUserLoggedIn
        setAccessToken(accessToken as string)
        setUserInfo(userInfo)
        setIsLogin(true)
        message.success("로그인에 성공하셨습니다")
        router.push("/");
    } catch (error) {
        message.error("로그인에 실패하였습니다. 다시 시도해주세요")
    }
  };

  const onClickGoogleLogin = () => {
    router.push('https://freshfridge.shop/login/google')
  }

  const onClickKakaoLogin = () => {
    router.push('https://freshfridge.shop/login/kakao')
  }

  return (
    <LoginUI
    control = { control }
    onClickLogin = { onClickLogin }
    handleSubmit = { handleSubmit }
    formState = { formState }
    onClickGoogleLogin = { onClickGoogleLogin } 
    onClickKakaoLogin = { onClickKakaoLogin }
     />
  )
}
