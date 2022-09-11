import { RowSwiper } from "../../../../commons/styles/override";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper/core";
import * as B from '../../../../commons/styles/basic'

SwiperCore.use([EffectCoverflow, Autoplay]);
const images = ['/images/R고등어.png', '/images/R모둠채소.png', '/images/R삼겹살.png']
export default function SlideRow() {


    return(
        <RowSwiper
            direction="horizontal"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false
            }}
            // loop={true}
            // loopedSlides={1}
            speed={1000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={false}
        >
            {images.map((el,i)=>(
                <SwiperSlide key={i}><img src={el}/></SwiperSlide>
            ))}
        </RowSwiper>
    )
}