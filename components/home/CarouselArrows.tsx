import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export default function CarouselArrows({
  currentSlide,
  setCurrentSlide,
  images,
}: {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  images: string[];
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);
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
  );
}
