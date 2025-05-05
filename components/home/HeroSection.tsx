"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "../Nav";
import CarouselArrows from "./CarouselArrows";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574863/1_u9lq8c.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574852/2_pmow7o.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574840/3_u2gg2t.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574798/4_5_pwjozj.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574871/5_5_mbye3q.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574862/6_5_tjabde.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden snap-start snap-always">
      <div className="absolute inset-0 z-[50]">
        <Nav />
      </div>

      {/* Slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}>
            <Image
              src={src}
              // key={currentSlide}
              alt={`Studio photo ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-[4000ms] "
              // className={`object-cover transition-transform duration-[4000ms] ${
              //   currentSlide === index ? "slow-zoom" : "zoom-static"
              // }`}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-30" />

      <div className="absolute inset-0 flex  flex-col text-white items-center justify-center z-40 uppercase">
        <h1 className="text-xl md:text-[23px]  font-semibold tracking-wider font-biennale">
          the way i remember the world
        </h1>
        <p className="font-extralight pt-1 text-xl">Photography / filmmaking</p>
      </div>

      <CarouselArrows
        images={images}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </section>
  );
}
