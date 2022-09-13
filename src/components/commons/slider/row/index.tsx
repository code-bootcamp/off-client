import { RowSlide } from "../../../../commons/styles/override";



const images = ['/images/R고등어.png', '/images/R모둠채소.png', '/images/R삼겹살.png']
export default function SlideRow() {
    return(
        <RowSlide disable_box_shadow={true} autoplay={true} autoplay_speed={2000}>
            {images.map((el,i)=>(
               <img src={el}/>
            ))}
        </RowSlide>
    )
}