import Image from "next/image";
export default function Services() {
  const portfolioImages = [
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936942/Project-9_ygc50d.jpg",
      alt: "Wedding ceremony by the beach",
      caption: "Photography",
      description: `Our portfolio represents a decade of dedication to the art of
            photography, capturing moments that tell powerful stories. Each
            image is carefully composed to evoke emotion and preserve memories
            that last a lifetime. We specialize in finding beauty in both grand
            events and subtle, intimate moments.`,
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936934/Leo_yi6jwz.png",
      alt: "Urban portrait photography",
      caption: "Filmography",
      description: `Our portfolio represents a decade of dedication to the art of
            photography, capturing moments that tell powerful stories. Each
            image is carefully composed to evoke emotion and preserve memories
            that last a lifetime. We specialize in finding beauty in both grand
            events and subtle, intimate moments.`,
    },
  ];
  return (
    <section className="h-screen flex flex-col bg-black text-white snap-start snap-always">
      <div className="container mx-auto px-4 py-8 flex flex-col h-full">
        <h2 className="text-4xl font-bold text-center mb-8 tracking-wider uppercase">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-grow mb-6">
          {portfolioImages.map((image, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="relative flex-grow overflow-hidden rounded-lg group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-xl font-bold mb-2">{image.caption}</h3>
                <p className="text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center mb-6">
          <button className="border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
