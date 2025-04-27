"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "../Nav";
import { ChevronLeft, ChevronRight, MoveLeft } from "lucide-react";

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
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <h1 className="text-xl md:text-3xl font-bold text-white tracking-wider uppercase">
          photography/filmmaking
        </h1>
      </div>

      {/* Indicator */}
      {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center z-40">
        <div className="bg-black/50 px-4 py-2 rounded-full text-white">
          <span className="font-medium">
            {currentSlide + 1}/{images.length}
          </span>
        </div>
      </div> */}

      {/* Carousel indicator with arrows */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center ">
        <div className=" px-4 py-2 rounded-full text-white flex items-center gap-3 lg:gap-[50px]">
          <button
            onClick={prevSlide}
            className="hover:text-gray-300 transition-colors inset-0 z-[50]"
            aria-label="Previous slide">
            ←            
          </button>
          <span className="font-medium">
            {currentSlide + 1}/{images.length}
          </span>
          <button
            onClick={nextSlide}
            className="hover:text-gray-300 transition-colors inset-0 z-[50]"
            aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
