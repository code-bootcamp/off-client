import JoinUI from "./Join.presenter";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER, GET_TOKEN } from "../join/Join.queries"
import { IMutation, IMutationCreateUserArgs, IMutationGetTokenArgs } from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { message, Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object().shape({
    email: yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요.").required("이메일 아이디를 @까지 정확하게 입력해주세요."),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,"영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.").required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
    passwordRe: yup.string().oneOf([yup.ref('password'),null],"비밀번호가 일치하지 않습니다."),
    name: yup.string().required("이름을 입력해주세요."),
    nickname: yup.string().required("닉네임을 입력해주세요"),
    phone: yup.string().matches(/^\d{3}\d{4}\d{4}$/,"올바른 전화번호 형식이 아닙니다.").required("전화번호를 입력해주세요"),
    // token: yup.string().required("인증을받아주세요")
});

export default function JoinContainer() {
    const router = useRouter()

    const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER)
    const [getToken] = useMutation<Pick<IMutation, "getToken">, IMutationGetTokenArgs>(GET_TOKEN)

    const { control, handleSubmit, formState, getValues } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    const onClickSubmit = async (data: any) => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        nickname: data.nickname,
                        phone: data.phone
                    },
                },
            });
            Modal.success({
                content: '회원가입 완료되었습니다 로그인 화면으로 이동합니다.',
            });
            router.push("/info/login");
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    }

    const onClickGetToken = async () => {
        if(getValues("phone") && getValues("phone").match(/^\d{3}\d{4}\d{4}$/)) {
            try {
                await getToken({
                    variables: {
                        phone: getValues("phone")
                    }
                })
                message.success("인증번호가 전송되었습니다")
            } catch(error) {

            }
        } else {
            message.error("핸드폰 번호를 확인해주세요")
        }
    }

    return (
        <JoinUI 
        control = { control }
        onClickSubmit = { onClickSubmit } 
        onClickGetToken = { onClickGetToken }
        handleSubmit = { handleSubmit } 
        formState = { formState } 
        />
    )
}