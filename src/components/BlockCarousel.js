import * as React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class BlockCarousel extends React.Component {
    render() {
        const {slides}  = this.props
        return (
            <div className="block-carousel">
                <div className="container row">
                    <Swiper
                        className="col-xs-12"
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{"type": "fraction"}}
                        >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <img src={slide.image.src} alt={slide.image.alt}/>
                                <p>{slide.title}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
          )
      }
}

export default BlockCarousel
