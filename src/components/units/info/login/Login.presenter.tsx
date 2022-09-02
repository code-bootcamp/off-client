
import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form, RowBox, HelpLink, ColLine } from "./Login.styles";

export default function LoginUI() {
  return(
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <NormalInput type="text" placeholder = '아이디를 입력해주세요' />
        <NormalInput type="password" placeholder = '비밀번호를 입력해주세요' />
        <NormalButton type="button" title="로그인"/>
        <RowBox><HelpLink href={"/"}><a>회원가입</a></HelpLink><ColLine/><HelpLink href={"/"}><a>비밀번호찾기</a></HelpLink></RowBox>
      </Form>
    </Wrapper>
  )
}
