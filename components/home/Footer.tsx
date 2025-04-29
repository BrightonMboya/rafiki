import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const instagramImages = [
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936889/Art-27_lx35uv.jpg",
      alt: "Beach wedding photoshoot",
      category: "Wedding",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938230/Trace_Awards-38_lp6l5w.jpg",
      alt: "Urban portrait session",
      category: "Portrait",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717933373/7_its7if.png",
      alt: "Fashion editorial",
      category: "Fashion",
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717938232/Stecy-18_ehn0vi.jpg",
      alt: "Nature landscape",
      category: "Landscape",
    },
  ];

  return (
    <section className="h-screen flex flex-col bg-black text-white snap-start snap-always relative">
      {/* Call to Action Header - Reduced Height */}
      <div className="pt-8 pb-4 text-center lg:pt-[70px]">
        <h2 className="text-xl md:text-2xl font-medium mb-2 uppercase font-fontspring">
          Crafting stories starts here
        </h2>
        <button className="bg-white text-black px-8 py-3  lg:mt-5 font-medium uppercase hover:bg-gray-200 transition-colors mb-4">
          Let's Connect
        </button>
      </div>
      <div className="absolute bottom-0 z-[999]">
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4  relative ">
          {instagramImages.map((image, index) => (
            <Link
              href="https://www.instagram.com/with_rafiki"
              key={index}
              className="relative">
              <div className="overflow-hidden group lg:h-[500px]">
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={200}
                  className="transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-[50]"></div>
              </div>
            </Link>
          ))}
          <div className="flex items-center justify-center w-screen text-center  absolute inset-0 z-[50] font-poppins">
            <Link
              href="https://www.instagram.com/with_rafiki"
              className="bg-white text-black py-10 px-[60px] uppercase">
              @with_rafiki
            </Link>
          </div>
        </div>
        <div className="py-4 text-center text-sm text-gray-400 uppercase font-fontspring">
          <p>{new Date().getFullYear()} Rafiki</p>
        </div>
      </div>
    </section>
  );
}
