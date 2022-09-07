import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Form, FormCol, FormRow, HelpLink, RowBox, Title, TitleInfo, Wrapper } from "./Join.styles";

export default function JoinUI(props:any) {
    console.log(props.formState.isValid)
    return(
        <Wrapper>
            <Title>회원가입</Title>
                <TitleInfo>OFF를 사용하기위해 회원가입을 진행합니다.</TitleInfo>
                <Form onSubmit = { props.handleSubmit(props.onClickSubmit) }>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "text" placeholder = '사용하실 이메일' register = { props.register("email") } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "password" placeholder = '사용하실 비밀번호' register = { props.register("password") } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "password" placeholder = '사용하실 비밀번호' register = { props.register("password") } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "password" placeholder = '비밀번호확인' register = { props.register("password2") } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "text" placeholder = '이름' register = { props.register("name") } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput type = "text" placeholder = '닉네임' register = { props.register("nickname") } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={30}>
                        <FormCol xs = { 18 } sm = { 19 } md = { 19 } lg = { 19 } xl = { 20 }>
                            <NormalInput type = "text" placeholder = '" - " 을 제외한 전화번호' register = { props.register("phone") }/>
                        </FormCol>
                        <FormCol xs = { 6 } sm = { 5 } md = { 5 } lg = { 5 } xl = { 4 }>
                            <NormalButton type = "button" title = "전송" isActive = { props.formState.error?.phone ? false : true } color = { "red" }/>
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={30}>
                        <FormCol xs = { 18 } sm = { 19 } md = { 19 } lg = { 19 } xl = { 20 }>
                            <NormalInput type="text" placeholder = '인증번호' register={props.register("token")}/>
                        </FormCol>
                        <FormCol xs = { 6 } sm = { 5 } md = { 5 } lg = { 5 } xl = { 4 }>
                            <NormalButton type="button" title="확인" isActive={props.formState.error?.phone ? false : true} color={"blue"}/>
                        </FormCol>
                    </FormRow>
                    <NormalButton  title="회원가입하기" isActive={props.formState.isValid} color={"blue"}/>
                {/* <RowBox><span>이미 회원이신가요?</span><HelpLink href={"/info/login"}><a>로그인하기</a></HelpLink></RowBox> */}
            </Form>
        </Wrapper>
    )
}