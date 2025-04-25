import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer(){
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
      <section className="h-screen flex flex-col bg-black text-white snap-start snap-always">
        {/* Call to Action Header - Reduced Height */}
        <div className="pt-8 pb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Ready to get started?
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors mb-4">
            Get in touch
          </button>
        </div>

        {/* Instagram Gallery - Increased Height */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4">
          {instagramImages.map((image, index) => (
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative block w-full h-full overflow-hidden cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="mt-3 bg-white/90 rounded-full p-2">
                  <Instagram className="w-6 h-6 text-black" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Copyright Footer */}
        <div className="py-4 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Rafiki Studios. All rights reserved.
          </p>
        </div>
      </section>
    );
}