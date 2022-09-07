import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState, isLogoutState } from "../../../../commons/store";
import { IMutation, IMutationLoginArgs } from "../../../../commons/types/generated/types";
import LoginUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN } from "./Login.queries";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Modal } from "antd";


const schema = yup.object({
  email: yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요.").required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,"영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.").required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
});

export default function Login() {
  const router = useRouter();
  const client = useApolloClient();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLogout, setIsLogout] = useRecoilState(isLogoutState)
  const [login] = useMutation<Pick<IMutation,"login">,IMutationLoginArgs>(LOGIN);
  const { control, handleSubmit, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange"
  })

  const onClickLogin = (data:any) => {
    console.log(data)
    // try {
    //     const result = await login({
    //         variables: {...data},
    //     });
    //     const accessToken = result.data?.login;
    //     if (!accessToken) {
    //         Modal.error({
    //             content: "로그인에 실패하였습니다. 다시 시도해주세요.",
    //         });
    //         return;
    //     }
    //     const resultUserInfo = await client.query({
    //         query: FETCH_USER_LOGGED_IN,
    //         context: {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`,
    //             },
    //         },
    //     });
    //     const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
    //     setAccessToken(accessToken || "");
    //     setUserInfo(userInfo || {});
    //     setIsLogout("로그인")

    //     Modal.success({ content: `${userInfo.nickname}님 환영합니다.` });
    //     router.push("/");
    // } catch (error) {
    //     if (error instanceof Error) Modal.error({ content: Error });
    //     console.log(error)
    // }
};
  return (
    <LoginUI 
    Controller = { Controller }
    control = { control } 
    onClickLogin = { onClickLogin } 
    handleSubmit = { handleSubmit } 
    formState = { formState } />
  )
}
