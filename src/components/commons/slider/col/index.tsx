import { SliderCol } from "../../../../commons/styles/override";

export default function SlideCol() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 300,
        pauseOnHover: true,
        arrow: false,
        dots: false,
      };
    return(
        <SliderCol {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </SliderCol>
    )
}