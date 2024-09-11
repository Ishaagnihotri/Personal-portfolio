import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { clientsData } from './ClientsData'
import Image from 'next/image';
import Link from 'next/link';

const Clients = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            if (document.body.classList.contains('theme-dark')) {
                setIsDarkMode(true);
            } else {
                setIsDarkMode(false);
            }
        };

        checkDarkMode();

        // Listen for changes to 'theme-dark' class on document.body.
        document.body.addEventListener('DOMSubtreeModified', checkDarkMode);

        return () => {
            document.body.removeEventListener('DOMSubtreeModified', checkDarkMode);
        };
    }, []);

    return (
        <div className="section-box mt-4" id="clients">
            <h2 className="title-heading mb-4" data-backdrop-text={clientsData.mainData.title}>{clientsData.mainData.title2}</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="clients-swiper"
            >
                {clientsData.clients.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="client-box">
                            <Link href={item.url}>
                                <Image src={isDarkMode ? item.darkLogo : item.lightLogo} alt={index} placeholder="blur" />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Clients