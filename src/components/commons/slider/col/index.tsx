import { ColSwiper } from "../../../../commons/styles/override";
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper/core";
import * as B from '../../../../commons/styles/basic'

SwiperCore.use([EffectCoverflow, Autoplay]);
const images = ['/images/C군만두.png', '/images/C모둠채소.png', '/images/C스팸.png']
export default function SlideCol() {


    return(
        <ColSwiper
            direction="vertical"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false,
            }}
            autoplay={{
                delay:2000,
                disableOnInteraction: false,
            }}
            speed={1000}
            // loop={true}
            // loopedSlides={1}
            pagination={false}
        >
            {images.map((el,i)=>(
                <SwiperSlide key={i}><img src={el}/></SwiperSlide>
            ))}
        </ColSwiper>
    )
}