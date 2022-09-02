import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Form, HelpLink, RowBox, Title, Wrapper } from "./Join.styles";

export default function JoinUI() {
    return(
        <Wrapper>
            <Title>회원가입</Title>
            <Form>
                <NormalInput type="text" placeholder = '아이디' />
                <RowBox>
                    <NormalInput type="password" placeholder = '비밀번호' />
                    <NormalInput type="password" placeholder = '비밀번호확인' />
                </RowBox>
                <RowBox>
                    <NormalInput type="text" placeholder = '이름' />
                    <NormalInput type="text" placeholder = '닉네임' />
                </RowBox>
                <RowBox>
                    <NormalInput type="text" placeholder = '전화번호' />
                    <NormalButton type="button" title="인증"/>
                </RowBox>
                <RowBox>
                    <NormalInput type="text" placeholder = '인증번호' />
                    <NormalButton type="button" title="확인"/>
                </RowBox>
                <NormalButton type="button" title="회원가입하기"/>
                <RowBox><span>이미 회원이신가요?</span><HelpLink href={"/info/login"}><a>로그인하기</a></HelpLink></RowBox>
            </Form>
        </Wrapper>
    )
}