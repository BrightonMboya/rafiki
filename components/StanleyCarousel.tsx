"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import Image from "next/image";
import { Grid, Navigation } from "swiper/modules";
import YoutubeModal from "./ui/youtubeModal";

export default function Page({ images }: any) {
  const swiper = useSwiper();
  console.log(images)

  return (
    <section className="absolute top-0 bottom-0 left-0 right-0 w-full h-screen z-[-999]">
      <Swiper
        slidesPerView={1}
        speed={750}
        grid={{
          rows: 2,
        }}
        navigation={{
          enabled: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
        }}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        className="absolute top-0 left-0 w-full h-screen z-[-999]">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="text-center overflow-hidden bg-black/45 h-full flex justify-center items-center group relative">
              <Image
                alt="Rafiki Pictures"
                className="transform brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={img.blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${img.public_id}.${img.format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />

              <div className="absolute  group-hover:bottom-0 -bottom-[30%] transition-all duration-500 bg-gradient-to-t from-black/45  ease-in-out group-hover:bg-black/45 w-full h-full group-hover:h-full flex items-center justify-center">
                <div className="py-10">
                  <p className="text-white text-base lg:text-xl line-clamp-1 uppercase font-medium transition-all duration-700 px-6">
                    {img.caption}
                  </p>
                  <YoutubeModal
                    width={img.video.width}
                    height={img.video.height}
                    className={img.video.className}
                    url={img.video.url}
                  />
                  {/* <button
                    className={`relative py-2 px-8 w-full font-semibold text-xl text-center flex items-center justify-center mx-auto sm:w-fit hover:before:bg-red-600 overflow-hidden bg-white text-red-600 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full translate-y-12 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 delay-300 duration-500`}>
                    <span className="relative z-10">View More</span>
                  </button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </section>
  );
}

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <div
        onClick={() => swiper.slidePrev()}
        className="swiper-button-prev after:scale-[0.40] w-fit bg-white px-6 rounded flex justify-center items-center"></div>
      <div
        onClick={() => swiper.slideNext()}
        className="swiper-button-next after:scale-[0.40] w-fit bg-white px-6 rounded flex justify-center items-center"></div>
    </div>
  );
};
