import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import Error from "../../../commons/error";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form, TitleInfo, FormRow, FormCol } from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return(
    <Wrapper>
        <Title>로그인</Title>
        <TitleInfo>다양한 서비스 이용을 위해 로그인이 필요합니다.</TitleInfo>
        <Form>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalInput 
              type = "text"
              name = "email" 
              placeholder = "아이디" 
              control = { props.control } 
              />
              <Error message = { props.formState.errors.email?.message } />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalInput 
              type = "password" 
              name = "password"
              placeholder = "비밀번호"
              control = { props.control }
              />
              <Error message = { props.formState.errors.password?.message } />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
              <NormalButton title = "로그인" color = "blue" onClick = { props.handleSubmit(props.onClickLogin) } />
            </FormCol>
          </FormRow>
        </Form>
      </Wrapper>
  )
}
