import styled from '@emotion/styled'
import * as B from '../src/commons/styles/basic'


const Test2 = styled.p`
  font-size: 0.31rem;
  @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
    font-size: 0.5rem;
  } 
  @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
    font-size: 0.6rem;
  }
  @media (min-width: ${B.mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
    font-size: 0.78rem;
  }
  @media (max-width: ${B.mobile - 1}px) {
    font-size: 1.2rem;
  }
`

export default function Home() {
  return (
    <>
      <Test2>아이디</Test2>
      <Test2>비밀번호</Test2>
      <Test2>로그인하기</Test2>
    </>
  )
}
