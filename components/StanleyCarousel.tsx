"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import Image from "next/image";
import { Grid, Navigation } from "swiper/modules";
import YoutubeModal from "./ui/youtubeModal";

export default function Page({ images }: any) {
  const swiper = useSwiper();

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
            <HoverableImage img={img} />
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

const HoverableImage = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="text-center h-full flex justify-center items-center group relative"
      onTouchStart={() => setIsHovered(!isHovered)}
      onTouchCancel={() => setIsHovered(false)}
      >
      <Image
        alt="Rafiki Pictures"
        className="transform brightness-90 transition will-change-auto h-full object-cover"
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

      <div
        className={`absolute transition-all duration-500 bg-gradient-to-t from-black/30 to-transparent w-full h-[40%] bottom-0 flex items-center justify-center z-[999] ${
          isHovered ? "group-hover:via-black/50" : ""
        }`}>
        <div
          className={`absolute bottom-[5%] ${
            isHovered ? "bottom-[30%]" : ""
          } transition-all duration-500`}>
          <p
            className="text-white text-base lg:text-xl uppercase font-medium transition-all duration-700 px-6"
            dangerouslySetInnerHTML={{ __html: img.caption }}
          />
          <div className="transition-all duration-150">
            <YoutubeModal
              width={img.video.width}
              height={img.video.height}
              className={img.video.className}
              url={img.video.url}
              videoType={img.videoType}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black via-black/50 to-transparent w-full h-[30%] absolute left-0 bottom-0 " />
    </div>
  );
};
