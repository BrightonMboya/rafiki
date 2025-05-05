import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const instagramImages = [
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1746191067/Rectangle_13_hbvooi.png",
      alt: "Beach wedding photoshoot",
      category: "Wedding",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1746191122/Rectangle_13_copy_3_dnxgdz.png",
      alt: "Urban portrait session",
      category: "Portrait",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1746191063/Rectangle_13_copy_2_fgk3hm.png",
      alt: "Fashion editorial",
      category: "Fashion",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1746191118/Rectangle_13_copy_gihrw1.png",
      alt: "Nature landscape",
      category: "Landscape",
    },
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col bg-[url('/portfolio-bg.png')] bg-cover bg-center text-white snap-start snap-always relative">
        {/* Call to Action Header - Reduced Height */}
        <div className="pt-8 pb-4 text-center lg:pt-[70px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2 uppercase font-fontspring">
            Crafting stories starts here
          </h2>
          <button className="bg-white text-black px-8 py-3 lg:text-[22.984px] lg:px-10 lg:mt-7 uppercase hover:bg-gray-200 transition-colors mb-4 font-fontspring font-regular">
            Let<span className="font-biennale">'</span>s Connect
          </button>
        </div>
        <div className="">
          <div className="flex-grow grid grid-cols-2 md:grid-cols-4 relative lg:h-[500px] 2xl:h-[calc(100vh-500px)] overflow-hidden lg:mt-[20px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <Link href="https://www.instagram.com/with_rafiki">
                <div className="relative w-[120px] h-[50px] lg:w-[200px] lg:h-[200px] 2xl:w-[255px] 2xl:h-[112px]">
                  <Image
                    src="https://res.cloudinary.com/du50lw9fp/image/upload/v1746262560/Insta_f0yrqk.png"
                    fill
                    alt="follow me on Instagram"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            {instagramImages.map((image, index) => (
              <div className="relative group">
                <Link
                  href="https://www.instagram.com/with_rafiki"
                  key={index}
                  className="">
                  <div className="overflow-hidden relative h-full">
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      // width={500}
                      // height={200}
                      fill
                      objectFit="cover"
                      className="transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer object-cover"
                    />
                  </div>
                </Link>
              </div>
            ))}
            {/* <div className="flex items-center justify-center w-screen text-center  absolute inset-0 z-[50] font-poppins">
            <Link
              href="https://www.instagram.com/with_rafiki"
              className="bg-white text-black py-10 px-[60px] uppercase">
              @with_rafiki
            </Link>
          </div> */}
            {/* <div className="flex items-center justify-center w-screen h-full border">
            <div className="absolute text-center -top-1/2 -translate-y-1/2 -left-1/2 -translate-x-1/2">
              <Link href="https://www.instagram.com/with_rafiki">
                <div className="relative w-[120px] h-[50px] lg:w-[255px] lg:h-[112px]">
                  <Image
                    src="https://res.cloudinary.com/du50lw9fp/image/upload/v1746262560/Insta_f0yrqk.png"
                    fill
                    alt="follow me on Instagram"
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div> */}
          </div>
        </div>
        <div className="py-4 text-center text-sm text-gray-400 uppercase font-fontspring h-fit">
          <p>© {new Date().getFullYear()} Rafiki</p>
        </div>
      </section>
    </>
  );
}
