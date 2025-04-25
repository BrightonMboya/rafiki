"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Nav from "../Nav";


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Images for the slideshow
  const images = [
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574863/1_u9lq8c.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574852/2_pmow7o.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574840/3_u2gg2t.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574798/4_5_pwjozj.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574871/5_5_mbye3q.jpg",
    "https://res.cloudinary.com/du50lw9fp/image/upload/v1745574862/6_5_tjabde.jpg",
  ];

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 350); // Fade duration 500ms
    }, 4000); // Change slide every 5 seconds

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
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            } ${isTransitioning ? "opacity-50" : ""}`}>
            <Image
              src={src || "/placeholder.svg"}
              alt={`Studio photo ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Caption */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-wider uppercase">
          photography/filmmaking
        </h1>
      </div>

      {/* Carousel indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <div className="bg-black/50 px-4 py-2 rounded-full text-white">
          <span className="font-medium">
            {currentSlide + 1}/{images.length}
          </span>
        </div>
      </div>
    </section>
  );
}
