
import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form, RowBox, HelpLink, TitleInfo } from "./Login.styles";
import { ILoginUIProps } from "./Login.types";
// import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return(
    <Wrapper>
      <Title>로그인</Title>
      <TitleInfo>다양한 서비스 이용을 위해 로그인이 필요합니다.</TitleInfo>
      <Form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <NormalInput type="text" placeholder = '아이디' register={props.register("email")}/>
        <NormalInput type="password" placeholder = '비밀번호' register={props.register("password")}/>
        <NormalButton type="submit" isActive={props.formState.isValid} title="로그인"/>
        <RowBox><HelpLink href={"/info/join"}><a>회원가입</a></HelpLink><HelpLink href={"/"}><a>비밀번호 찾기</a></HelpLink></RowBox>
      </Form>
    </Wrapper>
  )
}
