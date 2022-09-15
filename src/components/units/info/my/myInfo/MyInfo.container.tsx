import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import MyInfoUI from "./MyInfo.presenter";
import { FETCH_USER_LOGGED_IN } from "./MyInfo.queries";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup.string().email("이메일 아이디를 @까지 정확하게 입력해주세요.").required("이메일 아이디를 @까지 정확하게 입력해주세요."),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,"영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.").required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
    passwordRe: yup.string().oneOf([yup.ref('password'),null],"비밀번호가 일치하지 않습니다."),
    name: yup.string().required("이름을 입력해주세요."),
    nickname: yup.string().required("닉네임을 입력해주세요"),
    phone: yup.string().matches(/^\d{3}\d{4}\d{4}$/,"올바른 전화번호 형식이 아닙니다.").required("전화번호를 입력해주세요"),
    token: yup.string().required("인증을받아주세요")
});

export default function MyInfoContainer () {
    const [userInfo,setUserInfo] = useRecoilState(userInfoState)
    const [isEdit, setIsEdit] = useState(false)
    const [checkId, setCheckId] = useState("")
    const {data} = useQuery(FETCH_USER_LOGGED_IN)

    const { control, handleSubmit, formState, getValues } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    })

    const onClickToEdit = (e:any) => {
        setCheckId(e.target.id)
        setIsEdit(true)
    }
    const onClickCancel = (e:any) => {
        setCheckId(e.target.id)
        setIsEdit(false)
    }
    useEffect(()=>{
        setUserInfo(data?.fetchUserLoggedIn)
    },[data])
    return<MyInfoUI
        isEdit = { isEdit }
        checkId = { checkId }
        onClickToEdit = { onClickToEdit }
        onClickCancel = { onClickCancel }
        control = { control }/>
}