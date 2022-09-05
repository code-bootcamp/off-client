
import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Title, Wrapper, Form, RowBox, HelpLink, TitleInfo } from "./Login.styles";

export default function LoginUI() {
  return(
    <Wrapper>
      <Title>로그인</Title>
      <TitleInfo>다양한 서비스 이용을 위해 로그인이 필요합니다.</TitleInfo>
      <Form>
        <NormalInput type="text" placeholder = '아이디' />
        <NormalInput type="password" placeholder = '비밀번호' />
        <NormalButton type="button" title="로그인"/>
        <RowBox><HelpLink href={"/info/join"}><a>회원가입</a></HelpLink><HelpLink href={"/"}><a>비밀번호 찾기</a></HelpLink></RowBox>
      </Form>
    </Wrapper>
  )
}
