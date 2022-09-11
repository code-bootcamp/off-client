import { useState } from "react";
import { Slide, ColSwiper } from "../../../../commons/styles/override";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);
const images = ['/images/R고등어.png', '/images/R모둠채소.png', '/images/R삼겹살.png']
export default function SlideCol() {
    // const [imageIndex, setImageIndex] = useState(0)

    // const settings = {
    //     dots: false,
    //     arrow: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     useCSS: true,
    //     swipe: true,
    //     beforeChange: (current, next)=>setImageIndex(next)
    //   };
    //   console.log(imageIndex)


    return(
        <ColSwiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 5,
            slideShadows: true
            }}
            pagination={true}
        >
            {images.map((el,i)=>(
                <Slide key={i}><img src={el}/></Slide>
            ))}
        </ColSwiper>
    )
}