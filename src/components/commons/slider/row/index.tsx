import styled from "@emotion/styled";
import  ReactCardCarousel  from 'react-card-carousel'
import * as B from '../../../../commons/styles/basic'

const images = ['/images/R고등어.png', '/images/R모둠채소.png', '/images/R삼겹살.png']




const Card = styled.div`
    width: 3.8rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 4rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 4rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 7rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 8rem;
    }
`
export default function SlideRow() {
    return(
        <ReactCardCarousel disable_box_shadow={true} spread={"wide"} autoplay={true} autoplay_speed={3000}>
            {images.map((el,i)=>(
               <Card><img src={el}/></Card>
            ))}
        </ReactCardCarousel>
    )
}