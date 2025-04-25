"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Images for the slideshow
  const images = [
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
  ];

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Fade duration
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider">
          Rafiki Studios
        </h1>
      </div>

      {/* Carousel indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <div className="bg-black/50 px-4 py-2 rounded-full text-white">
          <span className="font-medium">
            {currentSlide + 1}/{images.length} photos
          </span>
        </div>
      </div>
    </main>
  );
}
