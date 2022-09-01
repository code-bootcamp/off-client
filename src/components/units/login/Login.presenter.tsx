import NormalButton from "../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper } from "./Login.styles";

export default function LoginUI() {
  return(
    <Wrapper>
      <Title>로그인</Title>
      <NormalInput title="id" type="text" placeholder="아이디"/>
      <NormalInput title="password" type="password" placeholder="비밀번호"/>
      <NormalButton title="로그인" type="button"/>
    </Wrapper>
  )
}
