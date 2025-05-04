"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "../Nav";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  // Navigate to next slide
  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

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

      {/* Caption */}
      <div className="absolute inset-0 flex  flex-col text-white items-center justify-center z-40 uppercase">
        <h1 className="text-xl md:text-[23px]  font-semibold tracking-wider font-biennale">
          the way i remember the world
        </h1>
        <p className="font-extralight pt-1 text-xl">Photography / filmmaking</p>
      </div>

      {/* Carousel indicator with arrows */}

      <div className="flex items-center justify-center">
        {/* Carousel controls */}
        <div className="absolute bottom-[25px] gap-[48px] flex items-center justify-between px-8 z-50">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hover:scale-110 transition-transform"
            aria-label="Previous slide">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="w-8 h-8"
              fill="#fff">
              <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" />
            </svg> */}
            <Image
              src="/left-arrow.svg"
              alt="Previous slide"
              width={30}
              height={30}
              className="w-6 h-6"
            />
          </button>

          {/* Current Slide Number */}
          <div className="text-white text-base  font-sans gap-[20px] lg:gap-[48px] flex">
            <span>{currentSlide + 1}</span> <span>/</span>
            <span>{images.length}</span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hover:scale-110 transition-transform"
            aria-label="Next slide">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="w-8 h-8 rotate-180"
              fill="#fff">
              <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" />
            </svg> */}
            <Image
              src="/right-arrow.svg"
              alt="Next slide"
              width={30}
              height={30}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
