import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const portfolioImages = [
    {
      bgImg:
        "https://res.cloudinary.com/du50lw9fp/image/upload/v1746250720/Rectangle_17_copy_2_r3802t.png",
      topImg:
        "https://res.cloudinary.com/du50lw9fp/image/upload/v1746250698/Work_armk39.png",
      alt: "Wedding ceremony by the beach",
      caption: "Photography",
      description: `Captured moments - the way they lived, breathed, and lingered.`,
      pageLink: "/gallery",
    },
    {
      bgImg:
        "https://res.cloudinary.com/du50lw9fp/image/upload/v1746250739/Rectangle_17_copy_3_sn1cbj.png",
      topImg:
        "https://res.cloudinary.com/du50lw9fp/image/upload/v1746250703/Work_2_xubl8x.png",
      alt: "Urban portrait photography",
      caption: "Films",
      description: `Narratives woven with emotion, memory, and timeless craft.`,
      pageLink: "/filmography",
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
    <section className="h-screen flex flex-col bg-[url('/portfolio-bg.png')] bg-cover bg-center text-white snap-start snap-always relative">
      <div className="mx-auto pt-8 flex flex-col h-full w-full">
        <h2 className="text-2xl mt-10 lg:text-3xl font-medium text-center mb-8 tracking-wider uppercase font-fontspring">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 flex-grow w-full md:grid-cols-2 lg:mt-10 lg:gap-5">
          {portfolioImages.map((image, index) => (
            <section
              className="relative group cursor-pointer overflow-hidden "
              key={index}>
              <Link href={image.pageLink}>
                <Image
                  src={image.bgImg || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className=""
                />
                <Image
                  src={image.topImg || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="pt-[80px] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                <div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-white text-center">
                      <p className="uppercase font-fontspring  text-xl lg:text-2xl lg:pt-[50px] font-semibold">
                        {image.caption}
                      </p>
                      <p className="text-[14px] text-wrap text-center w-[260px] items-center justify-center flex font-poppins">
                        {formatDescription(image.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
