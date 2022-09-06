import SignUpUI from "./Join.presenter";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../join/Join.queries"
import { IMutation, IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object().shape({
    email: yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요.").required("이메일 아이디를 @까지 정확하게 입력해주세요."),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,"영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.").required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
    password2: yup.string().oneOf([yup.ref('password'),null],"비밀번호가 일치하지 않습니다."),
    name: yup.string().required("이름을 입력해주세요."),
    nickname: yup.string().required("닉네임을 입력해주세요"),
    phone: yup.string().matches(/^\d{3}\d{3,4}\d{4}$/,"올바른 전화번호 형식이 아닙니다.").required("전화번호를 입력해주세요"),
    token: yup.string().required("인증을받아주세요")
  });

export default function JoinContainer() {
  const router = useRouter()
  const [createUser] = useMutation<Pick<IMutation,"createUser">,IMutationCreateUserArgs>(CREATE_USER)
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
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
};

    return<SignUpUI register={register} onClickSubmit={onClickSubmit} handleSubmit={handleSubmit} formState={formState} />
}