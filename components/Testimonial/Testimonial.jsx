import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { testimonialData } from './TestimonialData';

const Testimonial = () => {
    const sliderRef = useRef();

    const [swiper, setSwiper] = React.useState();
    const prevRef = React.useRef();
    const nextRef = React.useRef();

    React.useEffect(() => {
        if (swiper) {
            console.log("Swiper instance:", swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <div className="section-box mt-4" id="testimonial">
            <div className="row align-items-center">
                <div className="col-6">
                    <h6 className="title-heading mb-0" data-backdrop-text={testimonialData.mainData.title}>{testimonialData.mainData.title2}</h6>
                </div>
                <div className="col-6 text-end">
                    {/* Slider Navigation */}
                    <div className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-prev" onClick={() => sliderRef.current?.slidePrev()}>
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="button-circle button-circle-sm button-circle-outline-dark swiper-custom-next" onClick={() => sliderRef.current?.slideNext()}>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                    {/* end Slider Navigation */}
                </div>
            </div>
            <Swiper
                onSwiper={it => (sliderRef.current = it)}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="testimonial-swiper mt-4"
            >
                {testimonialData.testimonial.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-box">
                            <div className="d-block text-yellow mb-3">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>{item.description}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <div className="d-inline-block me-3">
                                <Image className="img-mask-avatar-sm" src={item.avatar} alt={item.name} placeholder="blur" />
                            </div>
                            <div className="d-inline-block">
                                <h5 className="fw-medium m-0 line-height-140">{item.name}</h5>
                                <span className="font-small fw-normal">{item.jobTitle}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Testimonial;
