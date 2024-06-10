import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./Button";
import Link from "next/link";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
import BlurImage from "../BlurImage";

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const pics = [
    {
      id: 1,
      url: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938780/Orientation_47_fs17wd.jpg",
      title: "People",
      buttonLink: "/",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717933755/IMG_4741_jrmzd4.jpg",
      title: "Nature",
      buttonLink: "/about",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717935127/Friday-39_gp8rqb.jpg",
      title: "Travel",
      buttonLink: "/gallery",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot",
    },
    // {
    //   id: 4,
    //   url: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938755/Hillsong-25_o9rwsa.jpg",
    //   title: "Our Contact",
    //   buttonLink: "",
    //   caption:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcot",
    // },
  ];

  return (
    <section className="relatve">
      <Carousel
        plugins={[plugin.current]}
        className="absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-[-999]"
        opts={{
          loop: true,
        }}
        //   onMouseEnter={plugin.current.stop}
        //   onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {pics.map((pic) => (
            <CarouselItem key={pic.id} className="">
              <div className=" h-screen relative w-screen ">
                <BlurImage imageUrl={pic.url} preload rounded={false} />
                <div className="top-[45%] md:top-[40%] absolute text-white z-[100] pl-5 md:pl-10 flex flex-col items-start">
                  <h5 className="text-4xl uppercase md:text-8xl font-poppins font-light">
                    {pic.title}
                  </h5>
                  {/* <p className="text-base max-w-sm md:max-w-md text-balance pt-3 md:text-lg lg:max-w-xl">
                    {pic.caption}
                  </p> */}
                  <Link href="/gallery">
                    <Button className="bg-white text-black text-lg px-4 mt-2 font-poppins">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="h-screen w-screen absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60 " />
                {/* <Image
                src={pic.url}
                alt="Founders"
                width={650}
                height={875}
                quality={100}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                className="h-screen w-screen object-cover rounded-md border-[1px] border-white/20"
              /> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
