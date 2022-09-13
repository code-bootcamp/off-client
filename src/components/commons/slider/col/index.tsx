import styled from "@emotion/styled";
import ReactCardCarousel from 'react-card-carousel'
import * as B from '../../../../commons/styles/basic'

const images = ['/images/C군만두.png', '/images/C모둠채소.png', '/images/C스팸.png']
const Card = styled.div`
    width: 7rem;
    @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
        width: 7rem;
    }
    @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
        width: 8rem;
    }
    @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
        width: 12rem;
    }
    @media (max-width: ${B.mobile - 1}px) {
        width: 13rem;
    }
`
export default function SlideCol() {

    return(
        <ReactCardCarousel alignment={'vertical'} spread={"wide"} disable_box_shadow={true} autoplay={true} autoplay_speed={2500}>
            {images.map((el,i)=>(
                <Card><img src={el}/></Card>
            ))}
        </ReactCardCarousel>
    )
}