import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Form, HelpLink, RowBox, Title, TitleInfo, Wrapper } from "./Join.styles";

export default function JoinUI(props:any) {
    return(
        <Wrapper>
            <Title>회원가입</Title>
            <TitleInfo>OFF를 사용하기위해 회원가입을 진행합니다.</TitleInfo>
            <Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
                <NormalInput type="text" placeholder = '사용하실 이메일' register={props.register("email")} />
                <NormalInput type="password" placeholder = '사용하실 비밀번호' register={props.register("password")} />
                <NormalInput type="password" placeholder = '비밀번호확인' register={props.register("password2")} />
                <NormalInput type="text" placeholder = '이름' register={props.register("name")} />
                <NormalInput type="text" placeholder = '닉네임' register={props.register("nickname")} />
                <RowBox>
                    <NormalInput type="text" placeholder = '" - " 을 제외한 전화번호'/>
                    <NormalButton type="button" title="전송" isActive/>
                </RowBox>
                <RowBox>
                    <NormalInput type="text" placeholder = '인증번호'/>
                    <NormalButton type="button" title="확인" isActive/>
                </RowBox>
                <NormalButton type="submit" title="회원가입하기" isActive={props.formState.isValid} />
                <RowBox><span>이미 회원이신가요?</span><HelpLink href={"/info/login"}><a>로그인하기</a></HelpLink></RowBox>
            </Form>
        </Wrapper>
    )
}