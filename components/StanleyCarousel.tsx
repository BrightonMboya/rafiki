'use client'

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Grid, Autoplay, Navigation, A11y, Pagination } from 'swiper/modules';
import BlurImage from './BlurImage';

export default function Page() {
    const swiper = useSwiper()

    const content = [
        { title: 'Mountain Landscape', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
        { title: 'City Skyline', img: 'https://images.unsplash.com/photo-1720370225485-386b9793c61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' },
        { title: 'Forest Path', img: 'https://images.unsplash.com/photo-1718844054442-a42c957518c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' },
        { title: 'Ocean Waves', img: 'https://images.unsplash.com/photo-1719356441313-6cb150b99318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Desert Dunes', img: 'https://images.unsplash.com/photo-1719836567959-6e39d41c8a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Sunset Horizon', img: 'https://images.unsplash.com/photo-1719886260713-f6127e297181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Snowy Mountains', img: 'https://images.unsplash.com/photo-1720292770211-442f7eb56ec8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Lush Green Field', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
        { title: 'Calm Lake', img: 'https://images.unsplash.com/photo-1718154710424-d44de466c549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Starry Night', img: 'https://images.unsplash.com/photo-1719886260713-f6127e297181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Autumn Leaves', img: 'https://images.unsplash.com/photo-1719836567938-f120c7e4c439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Forest Path', img: 'https://images.unsplash.com/photo-1718844054442-a42c957518c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' },
    ];

    return (
        <section className='absolute top-0 bottom-0 left-0 right-0 w-full h-screen z-[-999]'>
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 2,
                }}
                navigation={{
                    enabled: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        grid: { rows: 2 }
                    },
                    1024: {
                        slidesPerView: 3,
                        grid: { rows: 2 }
                    }
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Grid, Autoplay, Navigation, A11y]}
                className="absolute top-0 left-0 w-full h-screen z-[-999]"
            >
                {
                    content.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='text-center bg-black/30 h-full flex justify-center items-center group relative'>
                                <BlurImage imageUrl={item.img} preload={false} rounded={false} />
                                <div className='absolute -bottom-[30%] group-hover:bottom-0 transition-all duration-500 ease-in-out group-hover:bg-black/50 w-full h-full group-hover:h-full flex items-center justify-center'>
                                    <div className='py-10'>
                                        <p className='text-white text-4xl transition-all duration-700'>
                                            {item.title}
                                        </p>
                                        <button className={`relative py-2 px-8 w-full font-semibold text-xl text-center flex items-center justify-center mx-auto sm:w-fit hover:before:bg-red-600 overflow-hidden bg-white text-red-600 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full translate-y-12 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 delay-300 duration-500`}>
                                            <span className="relative z-10">View More</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                <SwiperNavButtons />
            </Swiper>
        </section>
    );
}

const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <div onClick={() => swiper.slidePrev()} className="swiper-button-prev after:scale-[0.40] w-fit bg-white px-6 rounded flex justify-center items-center">
            </div>
            <div onClick={() => swiper.slideNext()} className="swiper-button-next after:scale-[0.40] w-fit bg-white px-6 rounded flex justify-center items-center">
            </div>
        </div>
    );
}