import React, {useState} from 'react'
import Icon from '../components/Icons'

import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const BlockTestimonials = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);

    const labelledBy = (name) => {
        return encodeURIComponent(name)
        .toLowerCase()
        .replace(/\.|%[0-9a-z]{2}/gi, '');
    }

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<button id="' + (labelledBy((content[index].title))) + '" class="testimonials-navigation ' + className + '">' + (content[index].title) + '</button>';
        },
      };
    return (
        <div className="block-testimonials gsap-fade-in">
            <div className="container row">
                <div className='col-xs-12 col-md-3 block-testimonials_title'>
                    <Icon name="fire"/>
                    <h2>{title}</h2>
                    <button aria-label="open" onClick={() => setIsActive(!isActive)} className='arrow-button'>
                        <span className={`close ${isActive ? 'open' : ''}`}></span>
                    </button>
                </div>
                <div className={`block-testimonials_content accordion col-md-9 col-xs-12 ${isActive ? 'open' : ''}`}>
                     <Swiper
                        pagination={pagination}
                        modules={[Pagination, EffectFade]}
                        className="testimonials-swiper"
                        navigation={false}
                        effect="fade"
                    >
                        {content.map((slide, index) => (
                            <SwiperSlide key={index} aria-labelledby={labelledBy(slide.title)}>
                                <div>
                                    <blockquote>{slide.quote}</blockquote>
                                    <p>{slide.quotee}</p>
                                    <img src={slide.image.src} alt={slide.image.alt}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
        )
}

export default BlockTestimonials
