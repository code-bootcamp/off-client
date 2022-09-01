import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form } from "./Login.styles";

export default function LoginUI() {
  return(
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <NormalInput placeholder = '아이디를 입력해주세요' />
      </Form>
    </Wrapper>
  )
}
