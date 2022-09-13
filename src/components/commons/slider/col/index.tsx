import styled from "@emotion/styled";
import { ColSlide } from "../../../../commons/styles/override";

const images = ['/images/C군만두.png', '/images/C모둠채소.png', '/images/C스팸.png']
const Card = styled.div`
    width: 10rem;
`
export default function SlideCol() {

    return(
        <ColSlide alignment={'vertical'} disable_box_shadow={true} autoplay={true} autoplay_speed={2000}>
            {images.map((el,i)=>(
                <Card><img src={el}/></Card>
            ))}
        </ColSlide>
    )
}