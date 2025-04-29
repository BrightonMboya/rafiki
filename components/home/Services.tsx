import Image from "next/image";
export default function Services() {
  const portfolioImages = [
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936942/Project-9_ygc50d.jpg",
      alt: "Wedding ceremony by the beach",
      caption: "Photography",
      description: `Life through a thoughtful lens. Stories that stays with you`,
    },
    {
      src: "https://res.cloudinary.com/du50lw9fp/image/upload/v1717936934/Leo_yi6jwz.png",
      alt: "Urban portrait photography",
      caption: "Filmography",
      description: `Intentional Frames Global inspiration. Personal Touch`,
    },
  ];

  const formatDescription = (text: string) => {
    return text.split(".").map((sentence, index, array) => {
      // Don't add a line break after the last sentence if it's empty
      if (index === array.length - 1 && !sentence.trim()) {
        return null;
      }

      // Add a period back except for the last empty sentence
      const formattedSentence =
        sentence + (index < array.length - 1 ? "." : "");

      return (
        <span key={index} className="block">
          {formattedSentence}
        </span>
      );
    });
  };
  return (
    <section className="h-screen flex flex-col bg-black text-white snap-start snap-always">
      <div className=" mx-auto py-8 flex flex-col h-full">
        <h2 className="text-2xl mt-10 lg:text-3xl font-medium text-center mb-8 tracking-wider uppercase font-fontspring">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 flex-grow w-screen md:grid-cols-2 lg:mt-10 lg:gap-2">
          {portfolioImages.map((image, index) => (
            <div className="relative" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover "
              />

              <div className="flex items-center justify-center ">
                <div className="text-white w-[500px] text-center h-[50px] top-1/2 absolute">
                  <p className="uppercase font-fontspring tracking-wider text-xl font-medium">
                    {image.caption}
                  </p>
                  <p className="text-[14px] pt-3">
                    {formatDescription(image.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
