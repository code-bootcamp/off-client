import NormalButton from "../../../commons/buttons/normalButton/normalButton.container";
import Error from "../../../commons/error";
import NormalInput from "../../../commons/inputs/normalInput/NormalInput.container";
import { Form, FormCol, FormRow, Title, TitleInfo, Wrapper } from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
    return(
        <Wrapper>
            <Title>회원가입</Title>
                <TitleInfo>OFF를 사용하기위해 회원가입을 진행합니다.</TitleInfo>
                <Form>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput name = "email" type = "text" placeholder = '이메일' control = { props.control } />
                            <Error message = { props.formState.errors.email?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput name = "password" type = "password" placeholder = '비밀번호' control = { props.control } />
                            <Error message = { props.formState.errors.password?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput name = "passwordRe" type = "password" placeholder = '비밀번호확인' control = { props.control } />
                            <Error message = { props.formState.errors.passwordRe?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput name = "name" type = "text" placeholder = '이름' control = { props.control } />
                            <Error message = { props.formState.errors.name?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow>
                        <FormCol xs = { 24 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 }>
                            <NormalInput name = "nickname" type = "text" placeholder = '닉네임' control = { props.control } />
                            <Error message = { props.formState.errors.nickname?.message } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={30}>
                        <FormCol xs = { 18 } sm = { 19 } md = { 19 } lg = { 19 } xl = { 20 }>
                            <NormalInput name = "phone" type = "text" placeholder = '" - " 을 제외한 전화번호' control = { props.control } />
                            <Error message = { props.formState.errors.phone?.message } />
                        </FormCol>
                        <FormCol xs = { 6 } sm = { 5 } md = { 5 } lg = { 5 } xl = { 4 }>
                            <NormalButton title = "전송" color = { "blue" } onClick = { props.onClickGetToken } />
                        </FormCol>
                    </FormRow>
                    <FormRow gutter={30}>
                        <FormCol xs = { 18 } sm = { 19 } md = { 19 } lg = { 19 } xl = { 20 }>
                            <NormalInput name = "token" type="text" placeholder = '인증번호' control = { props.control } />
                        </FormCol>
                        <FormCol xs = { 6 } sm = { 5 } md = { 5 } lg = { 5 } xl = { 4 }>
                            <NormalButton title = "확인" color = {"blue"} onClick = { props.onClickCheckValidToken } disabled={!props.isGetToken}/>
                        </FormCol>
                    </FormRow>
                    <NormalButton title = "회원가입하기" color = {"blue"} onClick = { props.handleSubmit(props.onClickSubmit) } disabled={ props.formState.isValid&&props.isCheckToken ? false : true }/>
            </Form>
        </Wrapper>
    )
}