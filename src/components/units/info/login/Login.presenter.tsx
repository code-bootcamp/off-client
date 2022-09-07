import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form, RowBox, HelpLink, TitleInfo, FormRow, FormCol, LoginWrapper } from "./Login.styles";
import { ILoginUIProps } from "./Login.types";
import { Controller } from "react-hook-form";

export default function LoginUI(props: ILoginUIProps) {
  return(
    <LoginWrapper>
      <Wrapper>
        <Title>로그인</Title>
        <TitleInfo>다양한 서비스 이용을 위해 로그인이 필요합니다.</TitleInfo>
        <Form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalInput  control={props.control} type="text" placeholder="아이디"/>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalInput control={props.control} type="password" placeholder = '비밀번호'/>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalButton type="submit" isActive={props.formState.isValid} title="로그인" color="blue"/>
            </FormCol>
          </FormRow>
        </Form>
        {/* <RowBox>
          <HelpLink href={"/info/join"}><a>회원가입</a></HelpLink><HelpLink href={"/"}><a>비밀번호 찾기</a></HelpLink>
        </RowBox> */}
      </Wrapper>
    </LoginWrapper>
  )
}
